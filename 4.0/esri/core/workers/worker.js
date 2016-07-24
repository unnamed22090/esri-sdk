/* eslint-env worker */
/* jshint worker: true */

/**
 * @classdesc
 * The worker class is the script which initializes the WebWorkers. It is functioning as a bootstrap-loader allowing the
 * calling API to use it to load desired modules.
 * The worker is the object who listens to incoming messages and depending on the connection ID channels the messages
 * unto the proper connection/module object.
 * @module esri/code/workers/worker
 * @since 4.0
 */
importScripts("../libs/requirejs/require.js");

//--------------------------------------------------------------------------
//
//  Variables
//
//--------------------------------------------------------------------------

/**
 * A dictionary of connection. Each connection is identified by ID
 * @type {{WorkerConnection}} and array of worker connections
 * @private
 */
var connections = {};

//--------------------------------------------------------------------------
//
//  Private Methods
//
//--------------------------------------------------------------------------

/**
 * onmessage event handler which listens to messages coming from the main thread. Depending on the type of the message,
 * the worker will either open a connection, close connection or forward the message onto the target connection object.
 * The API handles five types of messages:
 * 1. <worker-init> fired by the worker to indicate that the worker is up an running
 * 2. <open-connection> request from to open a new connection and load a module
 * 3. <close-connection> request to close and dispose a worker connection
 * 4. <response> any type of response, indicating loading module status, error or a valid response
 * 5. <cancel> a request to cancel an ongoing or awaiting job
 * @private
 * @param e {Object} message data
 */
onmessage = function(e) {
  var data = e.data;
  if (!data) {
    return;
  }

  var connectionID = e.data.connection;

  if (data.type === "<open-connection>") {
    // invoke the AMD module loader function require
    var path = data.data.path;
    var jobID = data.id;

    // this is simply to reassure that the connection/module does not already exist
    if (connections[connectionID]) {
      self.postMessage( { type: "<response>", id: jobID, connection: connectionID } );
      return;
    }

    require({
        baseUrl: "../../../"
      },
      [
        "esri/core/workers/WorkerConnection", // TODO: see whether it is possible to make relative?
        path
      ],
      function(WorkerConnection, Module) {

        // we need to create the connection, then add it to the connections dictionary
        connections[connectionID] = new WorkerConnection(Module, this, connectionID);

        // send an init message indicating that the worker has loaded the requested module
        self.postMessage( { type: "<response>", id: jobID, data: { connection: connectionID }, error: undefined } );
      });
  }
  else if (data.type === "<close-connection>") {
    if (connections[connectionID]) {
      delete connections[connectionID];
    }
  }
  else {
    // we need to distribute the message to the named module
    var type = e.data.type;
    if (type) {
      var connection = connections[connectionID];
      if (connection) {
        connection.proxy.message(e);
      }
    }
  }
};

// fire a ready message in order to notify the workers dispatcher that this worker is ready to process messages
postMessage( { type: "<worker-init>" } );

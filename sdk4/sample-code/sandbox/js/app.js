require([
  'dojo/query',
  'dojo/on',
  'dojo/dom',
  'dojo/dom-construct',
  'dojo/dom-geometry',
  'dojo/_base/connect',
  'dojo/has',
  'dojo/_base/event',
  'dojo/dom-class',
  'dojo/dom-style',
  'esri/core/domUtils',
  'esri/core/urlUtils',
  'esri/config',
  'esri/request',
  'dojo/NodeList-dom',
  'dojo/domReady!'
], function($, on, dom, domConstruct, domGeom, connect, has, event, domClass, domStyle, domUtils, urlUtils, esriConfig, esriRequest) {

  // declare shared variables
  var editor, sampleFolder, sandboxIsLoaded, toggleCodeWidth, toggleOutputWidth;

  // cache DOM elements
  var $handle, $save, $toggle, $update, $wrapper, $output, $code;

  // set to true to use log() for debugging
  var DEBUG = false;

  // add sample server address to esri config
  esriConfig.request.corsEnabledServers.push('https://developers.arcgis.com/javascript/samples');

  // run all the things
  setSampleFolder();
  startEditor();
  bindEventHandlers();
  getSampleCode();

  // get sample folder from querystring
  function setSampleFolder() {
    log('setSampleFolder');

    var urlObject = urlUtils.urlToObject(document.location.href);

    urlObject.query = urlObject.query || {};

    if (urlObject.query && urlObject.query.sample) {
      var pathnameWithoutSandbox = document.location.pathname.replace("sample-code/sandbox/sandbox.html", "");
      sampleFolder = document.location.protocol + "//" + document.location.host + pathnameWithoutSandbox + "sample-code/" + urlObject.query.sample + "/live";
    } else {
      sampleFolder = 'map_simple'; // default
    }
  }

  // initialize ace editor
  function startEditor() {
    log('startEditor');

    ace.config.set('workerPath', 'js');
    editor = ace.edit('editor');
    editor.setPrintMarginColumn(0);
    editor.setTheme('ace/theme/clouds');
    editor.getSession().setTabSize(2);
    editor.getSession().setUseSoftTabs(true);
    editor.getSession().setMode('ace/mode/html');
  }

  // bind events to DOM elements
  function bindEventHandlers() {
    log('bindEventHandlers');

    $code    = $('#code');
    $handle  = $('#handle');
    $output  = $('#output');
    $save    = $('#save-file');
    $toggle  = $('.toggle');
    $update  = $('#update-sandbox');
    $wrapper = $('#wrapper');

    $handle.on('mousedown', resizePanes);
    $save.on('click', saveFile);
    $toggle.on('click', toggleEditor);
    $update
      .attr('disabled', 'disabled')
      .on('click', updateSandbox);

    on(window, 'resize', resetPanes);
  }

  // get sample code then delegate to handleSample()
  function getSampleCode() {
    log('getSampleCode');

    var url = sampleFolder + '/index.html';
    // get code sample from docs
    esriRequest(url, {
      // 'url': 'https://developers.arcgis.com/javascript/samples/' + sampleFolder + '/index.html',
      //'url': '../samples/' + sampleFolder + '/index.html',
      // 'url': sampleFolder + '/index.html',
      'responseType': 'text'
    }).then(handleSample, handleError);

    // show page after loading is complete
    $wrapper.style('visibility', 'visible');

    // dump sample code into editor then update sandbox
    function handleSample(response) {
      log('handleSample');

      var str = response.data;
      editor.getSession().setValue(str); // add the content
      updateSandbox(); // load the sample into an iframe
    }

    // logs error if esriRequest from getSample() fails
    function handleError(err) {
      if (console && console.log) { // check for console first
        console.log('error getting code sample: ', err);
      }
    }
  }

  // helper functions

  // get code from editor and run inside iframe
  function updateSandbox() {
    log('updateSandbox');
    
    $update.attr('disabled', 'disabled');
    $save.attr('disabled', 'disabled');

    domUtils.show(dom.byId('loader')); // Show a loading/updating icon

    var iframeName = 'sandbox';

    // destroy the iframe, if it exists
    if (dom.byId(iframeName)) {
      domConstruct.destroy(iframeName);
    }

    // disconnect previous iframe onload handler
    if (sandboxIsLoaded) {
      connect.disconnect(sandboxIsLoaded);
    }

    // create an iframe
    var iframe = domConstruct.create('iframe', { 'id': iframeName }, 'output');

    sandboxIsLoaded = on(iframe, 'load', function() {
      domUtils.hide(dom.byId('loader')); // Hide the loading icon

      $update.attr('disabled', false);
      $save.attr('disabled', false);
    });

    log('sandboxIsLoaded');

    idoc = (iframe.contentWindow) ?
      iframe.contentWindow : (iframe.contentDocument.document) ?
      iframe.contentDocument.document : iframe.contentDocument;

    var content = editor.getSession().getValue();

    // 4.x fix for syntax used in layers-featurelayer-collection samples
    //      var url = "data/week.geojson";
    var relLinks = content.match(/url = ".+?"/g);
    if (relLinks) {
      relLinks = relLinks.filter(function(url){ return url.indexOf("//") === -1 }); // ignore absolute URLs
      relLinks.forEach(function(href){
        var file = href.split('"')[1];
        content = content.replace(file, sampleFolder + '/' + file);
      });
    };
    
    // 4.x fix for syntax used in popup-actions samples
    //      image: "Measure_Distance16.png"
    var relLinks = content.match(/image: ".+?"/g);
    if (relLinks) {
      relLinks = relLinks.filter(function(url){ return url.indexOf("//") === -1 }); // ignore absolute URLs
      relLinks.forEach(function(href){
        var file = href.split('"')[1];
        content = content.replace(file, sampleFolder + '/' + file);
      });
    };
    
    // 4.x fix for syntax used in satellites-3d samples
    //      url: "satellite.png",
    relLinks = content.match(/url: ".+?"/g);
    if (relLinks) {
      relLinks = relLinks.filter(function(url){ return url.indexOf("//") === -1 }); // ignore absolute URLs
      relLinks.forEach(function(href){
        var file = href.split('"')[1];
        content = content.replace(file, sampleFolder + '/' + file);
      });
    };
    
    // 4.x fix for syntax used in tasks-find samples
    //      src="ajax-loader.gif"    
    relLinks = content.match(/src='.+?'/g);
    if (relLinks) {
      relLinks = relLinks.filter(function(url){ return url.indexOf("//") === -1 }); // ignore absolute URLs
      relLinks.forEach(function(href){
        var file = href.split("'")[1];
        content = content.replace(file, sampleFolder + '/' + file);
      });
    };
    
    relLinks = content.match(/src=".+?"/g);
    if (relLinks) {
      relLinks = relLinks.filter(function(url){ return url.indexOf("//") === -1 }); // ignore absolute URLs
      relLinks.forEach(function(href){
        var file = href.split('"')[1];
        content = content.replace(file, sampleFolder + '/' + file);
      });
    };
    
    // 4.x fix for syntax used in satellites-3d samples
    //      "dojo/text!./brightest.txt",
    relLinks = content.match(/"dojo\/text!.+?"/g);
    if (relLinks) {
      relLinks = relLinks.filter(function(url){ return url.indexOf("//") === -1 }); // ignore absolute URLs
      relLinks.forEach(function(href){
        var file = href.split('"')[1];
        content = content.replace(file, 'dojo/text!' + sampleFolder + '/' + 'brightest.txt');
      });
    };
    
    //relLinks = content.match(/href=".+?"/g);
    // fix for syntax used in fl_featureCollection
    //      "url": "images/flickr.png",
    //relLinks = content.match(/"url": ".+?"/g);

    //var jsLinks = content.match(/location.pathname.+\"/g);
    //if (jsLinks) {
    //  jsLinks.forEach(function(href){
    //    content = content.replace(/""\)/, "\"/../samples/" + sampleFolder + "/\")");
    //    content = content.replace(/''\)/, "\'/../samples/" + sampleFolder + "/\')");
    //  });
    //};
    
    if (has('ie')) {
      // http://sparecycles.wordpress.com/2012/03/08/inject-content-into-a-new-iframe/
      // this workaround was causing issues in Firefox - may be able to get it to
      // work cross-browser need to test more. But for now this 'split' approach works.
      idoc.contents = content;
      iframe.src = 'javascript:window["contents"]';
    } else {
      idoc.document.open();
      idoc.document.write(content);
      idoc.document.close();
      // set the iframe's src attribute
      // otherwise, no referrer is sent when making requests from the iframe
      // which breaks samples which use the /sproxy on developers.arcgis.com
        // TODO temporary fix (Chris), need to go back and check what this is doing
      //iframe.src = '../samples/' + sampleFolder + '/index.html';
    }
  }

  // save contents of editor to html file
  function saveFile() {
    log('saveFile');

    var builder = new BlobBuilder();
    builder.append(editor.getSession().getValue());

    var blob = builder.getBlob('text/plain;charset=' + document.characterSet);
    saveAs(blob, sampleFolder + '.html');
  }

  // toggle display of editor pane
  function toggleEditor() {
    resetPanes();
    $wrapper.toggleClass('minimized');
  }

  // resize content panes when handle is dragged
  function resizePanes(e) {
    event.stop(e);
    $wrapper.addClass('resizing');
    var min = 550;
    var width = domStyle.get('wrapper', 'width');

    var dragHandle = on(window, 'mousemove', function(e){
      event.stop(e);
      if (e.pageX > min) {
        setHandlePosition(e.pageX + 8, width);
      }
    });

    on.once(parent.document, 'mouseup', function(e){
      $wrapper.removeClass('resizing');
      connect.disconnect(dragHandle);
    });

    function setHandlePosition(pos, width) {
      // vanilla JS is a *lot* faster than dojo :/
      $code[0].style.right = (width - pos) + 'px';
      $output[0].style.left = pos + 'px';
    }
  }

  function resetPanes() {
    $output.removeAttr('style');
    $code.removeAttr('style');
  }

  // log function for debugging
  function log(str) {
    if (DEBUG && console && console.log) { // check for console first
      console.log(Array.prototype.slice.call(arguments));
    }
  }
});

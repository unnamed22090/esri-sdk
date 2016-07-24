// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/WaterMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vertexShaderWater"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tattribute vec3 $position;\r\n\tvarying vec3 vpos;\r\n\r\n\tvoid main(void) {\r\n\t\tvpos \x3d (model * vec4($position, 1.0)).xyz;\r\n\t\tgl_Position \x3d proj * view * vec4(vpos, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fragmentShaderWater"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform vec3 color;\r\n\tuniform float scale;\r\n\tuniform float speed;\r\n\r\n\tuniform vec4 lightAmbient;\r\n\tuniform vec4 lightDiffuse;\r\n\tuniform vec4 lightSpecular;\r\n\tuniform vec3 lightDirection;\r\n\r\n\tuniform vec3 camPos;\r\n\r\n\tuniform sampler2D noiseTex;\r\n\tuniform sampler2D reflTex;\r\n\r\n\tuniform sampler2D depthTex;\r\n\tuniform int shadowMapNum;\r\n\tuniform vec4 shadowMapDistance;\r\n\tuniform mat4 shadowMapMatrix[4];\r\n\tuniform float depthHalfPixelSz;\r\n\r\n\tvarying vec3 vpos;\r\n\r\n\t$evalShadow\r\n\r\n\t$normal2envTC\r\n\r\n\t// TODO optimize?\r\n\tvec2 rotate(vec2 pos, float angle) {\r\n\t\tfloat c \x3d cos(angle);\r\n\t\tfloat s \x3d sin(angle);\r\n\t\treturn vec2(c * pos.x - s * pos.y, s * pos.x + c * pos.y);\r\n\t}\r\n\r\n\tfloat compDelta(vec2 pos) {\r\n\t\tconst float PI_THIRD \x3d 1.04719755;\r\n\r\n\t\tfloat result \x3d .0;\r\n\t\tfloat s \x3d 1.0;\r\n\t\tfor (int i \x3d 0; i \x3c 6; ++i) {\r\n\t\t\tvec2 tc \x3d pos / (20.0 * s);\r\n\t\t\ttc +\x3d rotate(vec2(1.0 + speed, .0), PI_THIRD * float(i));\r\n\t\t\tresult +\x3d s * texture2D(noiseTex, tc).r;\r\n\t\t\ts *\x3d 1.5;\r\n\t\t}\r\n\t\treturn result * scale * .2;\r\n\t}\r\n\r\n\tvoid main() {\r\n\t\tvec3 viewVec \x3d normalize(camPos - vpos);\r\n\r\n\t\tfloat d0 \x3d compDelta(vpos.xz);\r\n\t\tfloat dx \x3d compDelta(vpos.xz + vec2(.05, .0));\r\n\t\tfloat dz \x3d compDelta(vpos.xz + vec2(.0, .05));\r\n\r\n\t\tvec3 normal \x3d normalize(vec3(d0 - dx, .05, d0 - dz));\r\n\r\n\t\tfloat fresnel \x3d clamp(1.0 - 1.25 * dot(viewVec, normal), .0, 1.0);\r\n\r\n\t\tfloat shadow \x3d evalShadow(vpos, 1.0 / gl_FragCoord.w, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);\r\n\r\n\t\tvec3 reflDir \x3d reflect(-viewVec, normal);\r\n\t\tif (reflDir.y \x3c .02) reflDir.y \x3d 0.04 - reflDir.y;\r\n\r\n\t\tvec3 reflCol \x3d texture2D(reflTex, normal2envTC(reflDir)).rgb * lightAmbient.rgb*lightSpecular.w;\r\n\t\treflCol *\x3d .5 + max(lightDirection.y, .0) * .5; // ?\t+\r\n\t\tvec3 waterColor \x3d color * (lightAmbient.rgb * lightAmbient.w + (1.0 - shadow) * max(lightDirection.y, .0) * lightDiffuse.rgb * lightDiffuse.w);\r\n\t\tvec3 finalColor \x3d mix(waterColor, reflCol, .15 + .6 * fresnel);\r\n\r\n\t\tvec3 spec \x3d pow(max(dot(reflDir, lightDirection), .001), 80.0) * lightSpecular.rgb * lightSpecular.w * 2.0;\r\n\t\tfinalColor +\x3d (1.0 - shadow) * lightDiffuse.w * spec;\r\n\r\n\t\tgl_FragColor \x3d vec4(finalColor, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e'}});
define(["dojo/text!./WaterMaterial.xml","./internal/MaterialUtil","../lib/GLSLProgram","../lib/GLSLShader","../lib/RenderSlot"],function(n,e,p,k,q){var l=function(b,c,g,a,d,m){e.basicMaterialConstructor(this,m);var h=e.Layouts.Pos;this.dispose=function(){};this.getNoiseTextureId=function(){return b};this.getReflTextureId=function(){return c};this.getColor=function(){return g};this.getScale=function(){return a};this.getSpeed=function(){return d};this.getOutputAmount=function(b){return b*h.getStride()};
this.getVertexBufferLayout=function(){return h};this.fillInterleaved=function(b,d,r,a,f,c,g){e.fillInterleaved(b,d,r,a,h,f,c,g)};this.intersect=e.intersectTriangleGeometry;this.getGLMaterials=function(){return{color:s,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}};this.getAllTextureIds=function(){return[b,c]}},s=function(b,c,g){e.basicGLMaterialConstructor(this,b);var a=q.TRANSPARENT_MATERIAL,d=c.get("water");c={noiseTextureId:b.getNoiseTextureId(),reflTextureId:b.getReflTextureId()};
e.multiTextureGLMaterialConstructor(this,g,c,[["noiseTextureId",void 0,"noiseTex"],["reflTextureId",void 0,"reflTex"]]);var m=b.getColor(),h=b.getScale(),k=b.getSpeed(),l=Date.now();this.beginSlot=function(b){return a===b};this.getProgram=function(){return d};this.bind=function(a,c){d.use();this.bindTextures(a,d);d.uniform3fv("color",m);d.uniform1f("scale",h);var f=(Date.now()-l)/1E5*k,f=f-Math.floor(f);d.uniform1f("speed",f);c.shadowMap||d.uniform1f("depthHalfPixelSz",-1);b.getVertexBufferLayout().enableVertexAttribArrays(a,
d)};this.release=function(a){b.getVertexBufferLayout().disableVertexAttribArrays(a,d)};this.bindView=function(b,a){var c=a.origin;e.bindView(c,a.view,d);e.bindCamPos(c,a.viewInvTransp,d);a.shadowMap&&a.shadowMap.bindView(d,c)};this.bindInstance=function(b,a){d.uniformMatrix4fv("model",a.transformation)};this.getDrawMode=function(a){return a.TRIANGLES}};l.loadShaders=function(b,c,e,a){b._parse(n);c=new k(a.VERTEX_SHADER,b.vertexShaderWater,a);b=new k(a.FRAGMENT_SHADER,b.fragmentShaderWater,a);a=new p([c,
b],a);e.add("water",a)};return l});
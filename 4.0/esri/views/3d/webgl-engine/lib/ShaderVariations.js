// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","./Util","../lib/GLSLProgram","../lib/GLSLShader"],function(s,t,x,v){var k=t.assert,y=function(k,p){return k+p.toString()};return function(t,p,m,w,g,z,A){k(2===p.length,"you must specify shader snippet prefixes for vertex and fragment shaders");!m||0===m.length?m=[[],[]]:Array.isArray(m[0])||(m=[m,m]);var n=[],q=!1,r={},u={};this.addDefine=function(a,h,c,l){k(!q,"you cannot add another variable after the first program has been generated");k(a,"you must specify a program name suffix");
n.push({programNameSuffixes:["",a],shaderNameSuffixes:l||a,defineStr:h,affectsShaderTypes:c||[!0,!0]})};this.addBinaryShaderSnippetSuffix=function(a,h,c){k(!q,"you cannot add another variable after the first program has been generated");k(a,"you must specify a program name suffix");n.push({programNameSuffixes:["",a],shaderSnippetSuffixes:["",h],affectsShaderTypes:c||[!0,!0]})};this.addNaryShaderSnippetSuffix=function(a,h){k(!q,"you cannot add another variable after the first program has been generated");
var c=a.map(function(a){k(null!=a.value,"value must always be specified");return a.value});n.push({values:c,programNameSuffixes:a.map(function(a,d){return null!=a.programNameSuffix?a.programNameSuffix:c[d]}),shaderSnippetSuffixes:a.map(function(a,d){return null!=a.shaderSnippetSuffix?a.shaderSnippetSuffix:c[d]}),affectsShaderTypes:h||[!0,!0]})};this.getShaderVariation=function(a){k(a.length===n.length,"you must specify a value for each variable");for(var h=t,c=s.clone(p),l=s.clone(p),d=s.clone(m),
e=0;e<n.length;e++){var f=n[e],b=a[e],g;f.values?(g=f.values.indexOf(b),k(0<=g,"invalid value "+b+" for variable "+e)):g=b?1:0;h+=f.programNameSuffixes[g];for(b=0;2>b;b++)f.affectsShaderTypes[b]&&(f.shaderSnippetSuffixes&&(c[b]+=f.shaderSnippetSuffixes[g],l[b]+=f.shaderSnippetSuffixes[g]),f.defineStr&&g&&(d[b].push(f.defineStr),l[b]+=f.shaderNameSuffixes))}return{programName:h,shaderSnippetNames:c,shaderNames:l,defines:d}};this.getProgram=function(a,h,c){h=h||z;c=c||A;q=!0;var l=a.reduce(y,"");if(u[l])return u[l];
a=this.getShaderVariation(a);var d=w.get(a.programName);if(d)return d;var e,f,b=a.shaderNames[0],d=r[b]||g&&g.shaders[b];d||(e=a.shaderSnippetNames[0],f=h[e],k(null!=f,"shader snippet '"+e+"' does not exist"),d=new v(c.VERTEX_SHADER,f,c,a.defines[0]),r[b]=d,g&&g.add(b,d));b=a.shaderNames[1];e=r[b]||g&&g.shaders[b];e||(e=a.shaderSnippetNames[1],f=h[e],k(null!=f,"shader snippet '"+e+"' does not exist"),e=new v(c.FRAGMENT_SHADER,f,c,a.defines[1]),r[b]=e,g&&g.add(b,e));d=new x([d,e],c);u[l]=d;w.add(a.programName,
d);return d}}});
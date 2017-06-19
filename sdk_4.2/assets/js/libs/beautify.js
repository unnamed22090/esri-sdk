/*!
* The MIT License (MIT)
* 
* Copyright (c) 2007-2013 Einar Lielmanis and contributors.
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
Object.values||(Object.values=function(e){if(e!==Object(e))throw new TypeError("Object.values called on a non-object");var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(e[t]);return n}),function(){function e(e,t){function n(e,t){for(var n=0;n<t.length;n+=1)if(t[n]===e)return!0;return!1}function r(e){return e.replace(/^\s+|\s+$/g,"")}function i(e){return e.replace(/^\s+/g,"")}function _(e){e=e||p.before_newline;var t=Object.values(p);if(!n(e,t))throw new Error("Invalid Option Value: The option 'operator_position' must be one of the following values\n"+t+"\nYou passed in: '"+e+"'");return e}function a(e,t){"use strict";function a(e,t){var n=0;e&&(n=e.indentation_level,!Q.just_added_newline()&&e.line_indent_level>n&&(n=e.line_indent_level));var r={mode:t,parent:e,last_text:e?e.last_text:"",last_word:e?e.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,inline_frame:!1,if_block:!1,else_block:!1,do_block:!1,do_while:!1,import_block:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:n,line_indent_level:e?e.line_indent_level:n,start_line_index:Q.get_line_number(),ternary_depth:0};return r}function o(e){var t=e.newlines,n=ie.keep_array_indentation&&b(J.mode);if(n)for(var r=0;r<t;r+=1)E(r>0);else if(ie.max_preserve_newlines&&t>ie.max_preserve_newlines&&(t=ie.max_preserve_newlines),ie.preserve_newlines&&e.newlines>1){E();for(var i=1;i<t;i+=1)E(!0)}Z=e,re[Z.type]()}function u(e){e=e.replace(c.allLineBreaks,"\n");for(var t=[],n=e.indexOf("\n");n!==-1;)t.push(e.substring(0,n)),e=e.substring(n+1),n=e.indexOf("\n");return e.length&&t.push(e),t}function h(e){if(e=void 0!==e&&e,!Q.just_added_newline()){var t=ie.preserve_newlines&&Z.wanted_newline||e,r=n(J.last_text,G.positionable_operators)||n(Z.text,G.positionable_operators);if(r){var i=n(J.last_text,G.positionable_operators)&&n(ie.operator_position,f)||n(Z.text,G.positionable_operators);t=t&&i}if(t)E(!1,!0);else if(ie.wrap_line_length){if("TK_RESERVED"===Y&&n(J.last_text,se))return;var _=Q.current_line.get_character_count()+Z.text.length+(Q.space_before_token?1:0);_>=ie.wrap_line_length&&E(!1,!0)}}}function E(e,t){if(!t&&";"!==J.last_text&&","!==J.last_text&&"="!==J.last_text&&"TK_OPERATOR"!==Y)for(;J.mode===d.Statement&&!J.if_block&&!J.do_block;)v();Q.add_new_line(e)&&(J.multiline_frame=!0)}function T(){Q.just_added_newline()&&(ie.keep_array_indentation&&b(J.mode)&&Z.wanted_newline?(Q.current_line.push(Z.whitespace_before),Q.space_before_token=!1):Q.set_indent(J.indentation_level)&&(J.line_indent_level=J.indentation_level))}function x(e){if(Q.raw)return void Q.add_raw_token(Z);if(ie.comma_first&&"TK_COMMA"===Y&&Q.just_added_newline()&&","===Q.previous_line.last()){var t=Q.previous_line.pop();Q.previous_line.is_empty()&&(Q.previous_line.push(t),Q.trim(!0),Q.current_line.pop(),Q.trim()),T(),Q.add_token(","),Q.space_before_token=!0}e=e||Z.text,T(),Q.add_token(e)}function R(){J.indentation_level+=1}function K(){J.indentation_level>0&&(!J.parent||J.indentation_level>J.parent.indentation_level)&&(J.indentation_level-=1)}function m(e){J?(te.push(J),ee=J):ee=a(null,e),J=a(ee,e)}function b(e){return e===d.ArrayLiteral}function w(e){return n(e,[d.Expression,d.ForInitializer,d.Conditional])}function v(){te.length>0&&(ee=J,J=te.pop(),ee.mode===d.Statement&&Q.remove_redundant_indentation(ee))}function k(){return J.parent.mode===d.ObjectLiteral&&J.mode===d.Statement&&(":"===J.last_text&&0===J.ternary_depth||"TK_RESERVED"===Y&&n(J.last_text,["get","set"]))}function O(){return!!("TK_RESERVED"===Y&&n(J.last_text,["var","let","const"])&&"TK_WORD"===Z.type||"TK_RESERVED"===Y&&"do"===J.last_text||"TK_RESERVED"===Y&&n(J.last_text,["return","throw"])&&!Z.wanted_newline||"TK_RESERVED"===Y&&"else"===J.last_text&&("TK_RESERVED"!==Z.type||"if"!==Z.text)||"TK_END_EXPR"===Y&&(ee.mode===d.ForInitializer||ee.mode===d.Conditional)||"TK_WORD"===Y&&J.mode===d.BlockStatement&&!J.in_case&&"--"!==Z.text&&"++"!==Z.text&&"function"!==q&&"TK_WORD"!==Z.type&&"TK_RESERVED"!==Z.type||J.mode===d.ObjectLiteral&&(":"===J.last_text&&0===J.ternary_depth||"TK_RESERVED"===Y&&n(J.last_text,["get","set"])))&&(m(d.Statement),R(),"TK_RESERVED"===Y&&n(J.last_text,["var","let","const"])&&"TK_WORD"===Z.type&&(J.declaration_statement=!0),k()||h("TK_RESERVED"===Z.type&&n(Z.text,["do","for","if","while"])),!0)}function S(e,t){for(var n=0;n<e.length;n++){var i=r(e[n]);if(i.charAt(0)!==t)return!1}return!0}function y(e,t){for(var n,r=0,i=e.length;r<i;r++)if(n=e[r],n&&0!==n.indexOf(t))return!1;return!0}function g(e){return n(e,["case","return","do","if","throw","else"])}function D(e){var t=$+(e||0);return t<0||t>=_e.length?null:_e[t]}function A(){O();var e=d.Expression;if("["===Z.text){if("TK_WORD"===Y||")"===J.last_text)return"TK_RESERVED"===Y&&n(J.last_text,G.line_starters)&&(Q.space_before_token=!0),m(e),x(),R(),void(ie.space_in_paren&&(Q.space_before_token=!0));e=d.ArrayLiteral,b(J.mode)&&("["!==J.last_text&&(","!==J.last_text||"]"!==q&&"}"!==q)||ie.keep_array_indentation||E())}else"TK_RESERVED"===Y&&"for"===J.last_text?e=d.ForInitializer:"TK_RESERVED"===Y&&n(J.last_text,["if","while"])&&(e=d.Conditional);";"===J.last_text||"TK_START_BLOCK"===Y?E():"TK_END_EXPR"===Y||"TK_START_EXPR"===Y||"TK_END_BLOCK"===Y||"."===J.last_text?h(Z.wanted_newline):"TK_RESERVED"===Y&&"("===Z.text||"TK_WORD"===Y||"TK_OPERATOR"===Y?"TK_RESERVED"===Y&&("function"===J.last_word||"typeof"===J.last_word)||"*"===J.last_text&&(n(q,["function","yield"])||J.mode===d.ObjectLiteral&&n(q,["{",","]))?ie.space_after_anon_function&&(Q.space_before_token=!0):"TK_RESERVED"!==Y||!n(J.last_text,G.line_starters)&&"catch"!==J.last_text||ie.space_before_conditional&&(Q.space_before_token=!0):Q.space_before_token=!0,"("===Z.text&&"TK_RESERVED"===Y&&"await"===J.last_word&&(Q.space_before_token=!0),"("===Z.text&&("TK_EQUALS"!==Y&&"TK_OPERATOR"!==Y||k()||h()),"("===Z.text&&"TK_WORD"!==Y&&"TK_RESERVED"!==Y&&h(),m(e),x(),ie.space_in_paren&&(Q.space_before_token=!0),R()}function C(){for(;J.mode===d.Statement;)v();J.multiline_frame&&h("]"===Z.text&&b(J.mode)&&!ie.keep_array_indentation),ie.space_in_paren&&("TK_START_EXPR"!==Y||ie.space_in_empty_paren?Q.space_before_token=!0:(Q.trim(),Q.space_before_token=!1)),"]"===Z.text&&ie.keep_array_indentation?(x(),v()):(v(),x()),Q.remove_redundant_indentation(ee),J.do_while&&ee.mode===d.Conditional&&(ee.mode=d.Expression,J.do_block=!1,J.do_while=!1)}function N(){var e=D(1),t=D(2);m(t&&(n(t.text,[":",","])&&n(e.type,["TK_STRING","TK_WORD","TK_RESERVED"])||n(e.text,["get","set"])&&n(t.type,["TK_WORD","TK_RESERVED"]))?n(q,["class","interface"])?d.BlockStatement:d.ObjectLiteral:"TK_OPERATOR"===Y&&"=>"===J.last_text?d.BlockStatement:n(Y,["TK_EQUALS","TK_START_EXPR","TK_COMMA","TK_OPERATOR"])||"TK_RESERVED"===Y&&n(J.last_text,["return","throw","import","default"])?d.ObjectLiteral:d.BlockStatement);var r=!e.comments_before.length&&"}"===e.text,i=r&&"function"===J.last_word&&"TK_END_EXPR"===Y;if("expand"===ie.brace_style||"none"===ie.brace_style&&Z.wanted_newline)"TK_OPERATOR"!==Y&&(i||"TK_EQUALS"===Y||"TK_RESERVED"===Y&&g(J.last_text)&&"else"!==J.last_text)?Q.space_before_token=!0:E(!1,!0);else{if("collapse-preserve-inline"===ie.brace_style){var _=0,a=null;J.inline_frame=!0;do if(_+=1,a=D(_),a.wanted_newline){J.inline_frame=!1;break}while("TK_EOF"!==a.type&&("TK_END_BLOCK"!==a.type||a.opened!==Z))}!b(ee.mode)||"TK_START_EXPR"!==Y&&"TK_COMMA"!==Y?"TK_OPERATOR"!==Y&&"TK_START_EXPR"!==Y&&("TK_START_BLOCK"===Y?E():Q.space_before_token=!0):(("TK_COMMA"===Y||ie.space_in_paren)&&(Q.space_before_token=!0),"collapse-preserve-inline"===ie.brace_style&&("TK_COMMA"===Y||"TK_START_EXPR"===Y&&J.inline_frame)&&(h(),ee.multiline_frame=ee.multiline_frame||J.multiline_frame,J.multiline_frame=!1))}x(),R()}function L(){for(;J.mode===d.Statement;)v();var e="TK_START_BLOCK"===Y;"expand"===ie.brace_style?e||E():e||(J.inline_frame?Q.space_before_token=!0:b(J.mode)&&ie.keep_array_indentation?(ie.keep_array_indentation=!1,E(),ie.keep_array_indentation=!0):E()),v(),x()}function V(){if("TK_RESERVED"===Z.type)if(n(Z.text,["set","get"])&&J.mode!==d.ObjectLiteral)Z.type="TK_WORD";else if(n(Z.text,["as","from"])&&!J.import_block)Z.type="TK_WORD";else if(J.mode===d.ObjectLiteral){var e=D(1);":"===e.text&&(Z.type="TK_WORD")}if(O()||!Z.wanted_newline||w(J.mode)||"TK_OPERATOR"===Y&&"--"!==J.last_text&&"++"!==J.last_text||"TK_EQUALS"===Y||!ie.preserve_newlines&&"TK_RESERVED"===Y&&n(J.last_text,["var","let","const","set","get"])||E(),J.do_block&&!J.do_while){if("TK_RESERVED"===Z.type&&"while"===Z.text)return Q.space_before_token=!0,x(),Q.space_before_token=!0,void(J.do_while=!0);E(),J.do_block=!1}if(J.if_block)if(J.else_block||"TK_RESERVED"!==Z.type||"else"!==Z.text){for(;J.mode===d.Statement;)v();J.if_block=!1,J.else_block=!1}else J.else_block=!0;if("TK_RESERVED"===Z.type&&("case"===Z.text||"default"===Z.text&&J.in_case_statement))return E(),(J.case_body||ie.jslint_happy)&&(K(),J.case_body=!1),x(),J.in_case=!0,void(J.in_case_statement=!0);if("TK_RESERVED"===Z.type&&"function"===Z.text&&((n(J.last_text,["}",";"])||Q.just_added_newline()&&!n(J.last_text,["[","{",":","=",","]))&&(Q.just_added_blankline()||Z.comments_before.length||(E(),E(!0))),"TK_RESERVED"===Y||"TK_WORD"===Y?"TK_RESERVED"===Y&&n(J.last_text,["get","set","new","return","export","async"])?Q.space_before_token=!0:"TK_RESERVED"===Y&&"default"===J.last_text&&"export"===q?Q.space_before_token=!0:E():"TK_OPERATOR"===Y||"="===J.last_text?Q.space_before_token=!0:(J.multiline_frame||!w(J.mode)&&!b(J.mode))&&E()),"TK_COMMA"!==Y&&"TK_START_EXPR"!==Y&&"TK_EQUALS"!==Y&&"TK_OPERATOR"!==Y||k()||h(),"TK_RESERVED"===Z.type&&n(Z.text,["function","get","set"]))return x(),void(J.last_word=Z.text);if(ne="NONE","TK_END_BLOCK"===Y?"TK_RESERVED"===Z.type&&n(Z.text,["else","catch","finally","from"])?"expand"===ie.brace_style||"end-expand"===ie.brace_style||"none"===ie.brace_style&&Z.wanted_newline?ne="NEWLINE":(ne="SPACE",Q.space_before_token=!0):ne="NEWLINE":"TK_SEMICOLON"===Y&&J.mode===d.BlockStatement?ne="NEWLINE":"TK_SEMICOLON"===Y&&w(J.mode)?ne="SPACE":"TK_STRING"===Y?ne="NEWLINE":"TK_RESERVED"===Y||"TK_WORD"===Y||"*"===J.last_text&&(n(q,["function","yield"])||J.mode===d.ObjectLiteral&&n(q,["{",","]))?ne="SPACE":"TK_START_BLOCK"===Y?ne=J.inline_frame?"SPACE":"NEWLINE":"TK_END_EXPR"===Y&&(Q.space_before_token=!0,ne="NEWLINE"),"TK_RESERVED"===Z.type&&n(Z.text,G.line_starters)&&")"!==J.last_text&&(ne=J.inline_frame||"else"===J.last_text||"export"===J.last_text?"SPACE":"NEWLINE"),"TK_RESERVED"===Z.type&&n(Z.text,["else","catch","finally"]))if("TK_END_BLOCK"!==Y||ee.mode!==d.BlockStatement||"expand"===ie.brace_style||"end-expand"===ie.brace_style||"none"===ie.brace_style&&Z.wanted_newline)E();else{Q.trim(!0);var t=Q.current_line;"}"!==t.last()&&E(),Q.space_before_token=!0}else"NEWLINE"===ne?"TK_RESERVED"===Y&&g(J.last_text)?Q.space_before_token=!0:"TK_END_EXPR"!==Y?"TK_START_EXPR"===Y&&"TK_RESERVED"===Z.type&&n(Z.text,["var","let","const"])||":"===J.last_text||("TK_RESERVED"===Z.type&&"if"===Z.text&&"else"===J.last_text?Q.space_before_token=!0:E()):"TK_RESERVED"===Z.type&&n(Z.text,G.line_starters)&&")"!==J.last_text&&E():J.multiline_frame&&b(J.mode)&&","===J.last_text&&"}"===q?E():"SPACE"===ne&&(Q.space_before_token=!0);x(),J.last_word=Z.text,"TK_RESERVED"===Z.type&&("do"===Z.text?J.do_block=!0:"if"===Z.text?J.if_block=!0:"import"===Z.text?J.import_block=!0:J.import_block&&"TK_RESERVED"===Z.type&&"from"===Z.text&&(J.import_block=!1))}function P(){for(O()&&(Q.space_before_token=!1);J.mode===d.Statement&&!J.if_block&&!J.do_block;)v();J.import_block&&(J.import_block=!1),x()}function M(){O()?Q.space_before_token=!0:"TK_RESERVED"===Y||"TK_WORD"===Y||J.inline_frame?Q.space_before_token=!0:"TK_COMMA"===Y||"TK_START_EXPR"===Y||"TK_EQUALS"===Y||"TK_OPERATOR"===Y?k()||h():E(),x()}function B(){O(),J.declaration_statement&&(J.declaration_assignment=!0),Q.space_before_token=!0,x(),Q.space_before_token=!0}function j(){x(),Q.space_before_token=!0,J.declaration_statement?(w(J.parent.mode)&&(J.declaration_assignment=!1),J.declaration_assignment?(J.declaration_assignment=!1,E(!1,!0)):ie.comma_first&&h()):J.mode===d.ObjectLiteral||J.mode===d.Statement&&J.parent.mode===d.ObjectLiteral?(J.mode===d.Statement&&v(),J.inline_frame||E()):ie.comma_first&&h()}function I(){if(O(),"TK_RESERVED"===Y&&g(J.last_text))return Q.space_before_token=!0,void x();if("*"===Z.text&&"TK_DOT"===Y)return void x();if("::"===Z.text)return void x();if("TK_OPERATOR"===Y&&n(ie.operator_position,f)&&h(),":"===Z.text&&J.in_case)return J.case_body=!0,R(),x(),E(),void(J.in_case=!1);var e=!0,t=!0,r=!1,i="*"===Z.text&&("TK_RESERVED"===Y&&n(J.last_text,["function","yield"])||J.mode===d.ObjectLiteral&&n(Y,["TK_START_BLOCK","TK_COMMA"])),_=n(Z.text,["-","+"])&&(n(Y,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||n(J.last_text,G.line_starters)||","===J.last_text);if(":"===Z.text?0===J.ternary_depth?e=!1:(J.ternary_depth-=1,r=!0):"?"===Z.text&&(J.ternary_depth+=1),!_&&!i&&ie.preserve_newlines&&n(Z.text,G.positionable_operators)){var a=":"===Z.text,o=a&&r,s=a&&!r;switch(ie.operator_position){case p.before_newline:return Q.space_before_token=!s,x(),a&&!o||h(),void(Q.space_before_token=!0);case p.after_newline:return Q.space_before_token=!0,!a||o?D(1).wanted_newline?E(!1,!0):h():Q.space_before_token=!1,x(),void(Q.space_before_token=!0);case p.preserve_newline:return s||h(),e=!(Q.just_added_newline()||s),Q.space_before_token=e,x(),void(Q.space_before_token=!0)}}n(Z.text,["--","++","!","~"])||_?(e=!1,t=!1,!Z.wanted_newline||"--"!==Z.text&&"++"!==Z.text||E(!1,!0),";"===J.last_text&&w(J.mode)&&(e=!0),"TK_RESERVED"===Y?e=!0:"TK_END_EXPR"===Y?e=!("]"===J.last_text&&("--"===Z.text||"++"===Z.text)):"TK_OPERATOR"===Y&&(e=n(Z.text,["--","-","++","+"])&&n(J.last_text,["--","-","++","+"]),n(Z.text,["+","-"])&&n(J.last_text,["--","++"])&&(t=!0)),(J.mode!==d.BlockStatement||J.inline_frame)&&J.mode!==d.Statement||"{"!==J.last_text&&";"!==J.last_text||E()):i&&(h(),e=!1,t=!1),Q.space_before_token=Q.space_before_token||e,x(),Q.space_before_token=t}function W(){if(Q.raw)return Q.add_raw_token(Z),void(Z.directives&&"end"===Z.directives.preserve&&(Q.raw=ie.test_output_raw));if(Z.directives)return E(!1,!0),x(),"start"===Z.directives.preserve&&(Q.raw=!0),void E(!1,!0);if(!c.newline.test(Z.text)&&!Z.wanted_newline)return Q.space_before_token=!0,x(),void(Q.space_before_token=!0);var e,t=u(Z.text),n=!1,r=!1,_=Z.whitespace_before,a=_.length;for(E(!1,!0),t.length>1&&(n=S(t.slice(1),"*"),r=y(t.slice(1),_)),x(t[0]),e=1;e<t.length;e++)E(!1,!0),n?x(" "+i(t[e])):r&&t[e].length>a?x(t[e].substring(a)):Q.add_token(t[e]);E(!1,!0)}function X(){Z.wanted_newline?E(!1,!0):Q.trim(!0),Q.space_before_token=!0,x(),E(!1,!0)}function z(){O(),"TK_RESERVED"===Y&&g(J.last_text)?Q.space_before_token=!0:h(")"===J.last_text&&ie.break_chained_methods),x()}function F(){x(),"\n"===Z.text[Z.text.length-1]&&E()}function U(){for(;J.mode===d.Statement;)v()}var Q,$,G,Z,Y,q,H,J,ee,te,ne,re,ie,_e=[],ae="";for(re={TK_START_EXPR:A,TK_END_EXPR:C,TK_START_BLOCK:N,TK_END_BLOCK:L,TK_WORD:V,TK_RESERVED:V,TK_SEMICOLON:P,TK_STRING:M,TK_EQUALS:B,TK_OPERATOR:I,TK_COMMA:j,TK_BLOCK_COMMENT:W,TK_COMMENT:X,TK_DOT:z,TK_UNKNOWN:F,TK_EOF:U},t=t?t:{},ie={},void 0!==t.braces_on_own_line&&(ie.brace_style=t.braces_on_own_line?"expand":"collapse"),ie.brace_style=t.brace_style?t.brace_style:ie.brace_style?ie.brace_style:"collapse","expand-strict"===ie.brace_style&&(ie.brace_style="expand"),ie.indent_size=t.indent_size?parseInt(t.indent_size,10):4,ie.indent_char=t.indent_char?t.indent_char:" ",ie.eol=t.eol?t.eol:"auto",ie.preserve_newlines=void 0===t.preserve_newlines||t.preserve_newlines,ie.break_chained_methods=void 0!==t.break_chained_methods&&t.break_chained_methods,ie.max_preserve_newlines=void 0===t.max_preserve_newlines?0:parseInt(t.max_preserve_newlines,10),ie.space_in_paren=void 0!==t.space_in_paren&&t.space_in_paren,ie.space_in_empty_paren=void 0!==t.space_in_empty_paren&&t.space_in_empty_paren,ie.jslint_happy=void 0!==t.jslint_happy&&t.jslint_happy,ie.space_after_anon_function=void 0!==t.space_after_anon_function&&t.space_after_anon_function,ie.keep_array_indentation=void 0!==t.keep_array_indentation&&t.keep_array_indentation,ie.space_before_conditional=void 0===t.space_before_conditional||t.space_before_conditional,ie.unescape_strings=void 0!==t.unescape_strings&&t.unescape_strings,ie.wrap_line_length=void 0===t.wrap_line_length?0:parseInt(t.wrap_line_length,10),ie.e4x=void 0!==t.e4x&&t.e4x,ie.end_with_newline=void 0!==t.end_with_newline&&t.end_with_newline,ie.comma_first=void 0!==t.comma_first&&t.comma_first,ie.operator_position=_(t.operator_position),ie.test_output_raw=void 0!==t.test_output_raw&&t.test_output_raw,ie.jslint_happy&&(ie.space_after_anon_function=!0),t.indent_with_tabs&&(ie.indent_char="\t",ie.indent_size=1),"auto"===ie.eol&&(ie.eol="\n",e&&c.lineBreak.test(e||"")&&(ie.eol=e.match(c.lineBreak)[0])),ie.eol=ie.eol.replace(/\\r/,"\r").replace(/\\n/,"\n"),H="";ie.indent_size>0;)H+=ie.indent_char,ie.indent_size-=1;var oe=0;if(e&&e.length){for(;" "===e.charAt(oe)||"\t"===e.charAt(oe);)ae+=e.charAt(oe),oe+=1;e=e.substring(oe)}Y="TK_START_BLOCK",q="",Q=new s(H,ae),Q.raw=ie.test_output_raw,te=[],m(d.BlockStatement),this.beautify=function(){function t(){return n=D()}var n,r;for(G=new l(e,ie,H),_e=G.tokenize(),$=0;t();){for(var i=0;i<n.comments_before.length;i++)o(n.comments_before[i]);o(n),q=J.last_text,Y=n.type,J.last_text=n.text,$+=1}return r=Q.get_code(),ie.end_with_newline&&(r+="\n"),"\n"!==ie.eol&&(r=r.replace(/[\n]/g,ie.eol)),r};var se=["break","continue","return","throw"]}function o(e){var t=0,n=-1,r=[],i=!0;this.set_indent=function(r){t=e.baseIndentLength+r*e.indent_length,n=r},this.get_character_count=function(){return t},this.is_empty=function(){return i},this.last=function(){return this._empty?null:r[r.length-1]},this.push=function(e){r.push(e),t+=e.length,i=!1},this.pop=function(){var e=null;return i||(e=r.pop(),t-=e.length,i=0===r.length),e},this.remove_indent=function(){n>0&&(n-=1,t-=e.indent_length)},this.trim=function(){for(;" "===this.last();)r.pop(),t-=1;i=0===r.length},this.toString=function(){var t="";return this._empty||(n>=0&&(t=e.indent_cache[n]),t+=r.join("")),t}}function s(e,t){t=t||"",this.indent_cache=[t],this.baseIndentLength=t.length,this.indent_length=e.length,this.raw=!1;var n=[];this.baseIndentString=t,this.indent_string=e,this.previous_line=null,this.current_line=null,this.space_before_token=!1,this.add_outputline=function(){this.previous_line=this.current_line,this.current_line=new o(this),n.push(this.current_line)},this.add_outputline(),this.get_line_number=function(){return n.length},this.add_new_line=function(e){return(1!==this.get_line_number()||!this.just_added_newline())&&(!(!e&&this.just_added_newline())&&(this.raw||this.add_outputline(),!0))},this.get_code=function(){var e=n.join("\n").replace(/[\r\n\t ]+$/,"");return e},this.set_indent=function(e){if(n.length>1){for(;e>=this.indent_cache.length;)this.indent_cache.push(this.indent_cache[this.indent_cache.length-1]+this.indent_string);return this.current_line.set_indent(e),!0}return this.current_line.set_indent(0),!1},this.add_raw_token=function(e){for(var t=0;t<e.newlines;t++)this.add_outputline();this.current_line.push(e.whitespace_before),this.current_line.push(e.text),this.space_before_token=!1},this.add_token=function(e){this.add_space_before_token(),this.current_line.push(e)},this.add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&this.current_line.push(" "),this.space_before_token=!1},this.remove_redundant_indentation=function(e){if(!e.multiline_frame&&e.mode!==d.ForInitializer&&e.mode!==d.Conditional)for(var t=e.start_line_index,r=n.length;t<r;)n[t].remove_indent(),t++},this.trim=function(r){for(r=void 0!==r&&r,this.current_line.trim(e,t);r&&n.length>1&&this.current_line.is_empty();)n.pop(),this.current_line=n[n.length-1],this.current_line.trim();this.previous_line=n.length>1?n[n.length-2]:null},this.just_added_newline=function(){return this.current_line.is_empty()},this.just_added_blankline=function(){if(this.just_added_newline()){if(1===n.length)return!0;var e=n[n.length-2];return e.is_empty()}return!1}}function l(e,t){function i(e){if(!e.match(v))return null;var t={};k.lastIndex=0;for(var n=k.exec(e);n;)t[n[1]]=n[2],n=k.exec(e);return t}function _(){var e,_=[];E=0,T="";var u=K.next();if(null===u)return["","TK_EOF"];var v;for(v=R.length?R[R.length-1]:new h("TK_START_BLOCK","{");n(u,o);)if(c.newline.test(u)?"\n"===u&&"\r"===K.peek(-2)||(E+=1,_=[]):_.push(u),u=K.next(),null===u)return["","TK_EOF"];if(_.length&&(T=_.join("")),s.test(u)||"."===u&&K.testChar(s)){var k=!0,y=!0,g=s;for("0"===u&&K.testChar(/[XxOoBb]/)?(k=!1,y=!1,g=K.testChar(/[Bb]/)?l:K.testChar(/[Oo]/)?p:f,u+=K.next()):"."===u?k=!1:(u="",K.back());K.testChar(g);)u+=K.next(),k&&"."===K.peek()?(u+=K.next(),k=!1):y&&K.testChar(/[Ee]/)&&(u+=K.next(),K.testChar(/[+-]/)&&(u+=K.next()),y=!1,k=!1);return[u,"TK_WORD"]}if(c.isIdentifierStart(K.peekCharCode(-1))){if(K.hasNext())for(;c.isIdentifierChar(K.peekCharCode())&&(u+=K.next(),K.hasNext()););return"TK_DOT"===v.type||"TK_RESERVED"===v.type&&n(v.text,["set","get"])||!n(u,m)?[u,"TK_WORD"]:"in"===u?[u,"TK_OPERATOR"]:[u,"TK_RESERVED"]}if("("===u||"["===u)return[u,"TK_START_EXPR"];if(")"===u||"]"===u)return[u,"TK_END_EXPR"];if("{"===u)return[u,"TK_START_BLOCK"];if("}"===u)return[u,"TK_END_BLOCK"];if(";"===u)return[u,"TK_SEMICOLON"];if("/"===u){var D,A="";if("*"===K.peek()){K.next(),D=K.match(b),A="/*"+D[0];var C=i(A);return C&&"start"===C.ignore&&(D=K.match(O),A+=D[0]),A=A.replace(c.allLineBreaks,"\n"),[A,"TK_BLOCK_COMMENT",C]}if("/"===K.peek())return K.next(),D=K.match(w),A="//"+D[0],[A,"TK_COMMENT"]}var N=/<()([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;if("`"===u||"'"===u||'"'===u||("/"===u||t.e4x&&"<"===u&&K.test(N,-1))&&("TK_RESERVED"===v.type&&n(v.text,["return","case","throw","else","do","typeof","yield"])||"TK_END_EXPR"===v.type&&")"===v.text&&v.parent&&"TK_RESERVED"===v.parent.type&&n(v.parent.text,["if","while","for"])||n(v.type,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"]))){var L=u,V=!1,P=!1;if(e=u,"/"===L)for(var M=!1;K.hasNext()&&(V||M||K.peek()!==L)&&!K.testChar(c.newline);)e+=K.peek(),V?V=!1:(V="\\"===K.peek(),"["===K.peek()?M=!0:"]"===K.peek()&&(M=!1)),K.next();else if(t.e4x&&"<"===L){var B=/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;K.back();var j="",I=K.match(N);if(I){for(var W=I[2].replace(/^{\s+/,"{").replace(/\s+}$/,"}"),X=0===W.indexOf("{"),z=0;I;){var F=!!I[1],U=I[2],Q=!!I[I.length-1]||"![CDATA["===U.slice(0,8);if(!Q&&(U===W||X&&U.replace(/^{\s+/,"{").replace(/\s+}$/,"}"))&&(F?--z:++z),j+=I[0],z<=0)break;I=K.match(B)}return I||(j+=K.match(/[\s\S]*/g)[0]),j=j.replace(c.allLineBreaks,"\n"),[j,"TK_STRING"]}}else{var $=function(t,n,r){for(var i;K.hasNext()&&(i=K.peek(),V||i!==t&&(n||!c.newline.test(i)));)(V||n)&&c.newline.test(i)?("\r"===i&&"\n"===K.peek(1)&&(K.next(),i=K.peek()),e+="\n"):e+=i,V?("x"!==i&&"u"!==i||(P=!0),V=!1):V="\\"===i,K.next(),r&&e.indexOf(r,e.length-r.length)!==-1&&("`"===t?$("}",n,"`"):$("`",n,"${"))};"`"===L?$("`",!0,"${"):$(L)}if(P&&t.unescape_strings&&(e=a(e)),K.peek()===L&&(e+=L,K.next(),"/"===L))for(;K.hasNext()&&c.isIdentifierStart(K.peekCharCode());)e+=K.next();return[e,"TK_STRING"]}if("#"===u){if(0===R.length&&"!"===K.peek()){for(e=u;K.hasNext()&&"\n"!==u;)u=K.next(),e+=u;return[r(e)+"\n","TK_UNKNOWN"]}var G="#";if(K.hasNext()&&K.testChar(s)){do u=K.next(),G+=u;while(K.hasNext()&&"#"!==u&&"="!==u);return"#"===u||("["===K.peek()&&"]"===K.peek(1)?(G+="[]",K.next(),K.next()):"{"===K.peek()&&"}"===K.peek(1)&&(G+="{}",K.next(),K.next())),[G,"TK_WORD"]}}if("<"===u&&("?"===K.peek()||"%"===K.peek())){K.back();var Z=K.match(S);if(Z)return u=Z[0],u=u.replace(c.allLineBreaks,"\n"),[u,"TK_STRING"]}if("<"===u&&K.match(/\!--/g)){for(u="<!--";K.hasNext()&&!K.testChar(c.newline);)u+=K.next();return x=!0,[u,"TK_COMMENT"]}if("-"===u&&x&&K.match(/->/g))return x=!1,["-->","TK_COMMENT"];if("."===u)return[u,"TK_DOT"];if(n(u,d)){for(;K.hasNext()&&n(u+K.peek(),d)&&(u+=K.next(),K.hasNext()););return","===u?[u,"TK_COMMA"]:"="===u?[u,"TK_EQUALS"]:[u,"TK_OPERATOR"]}return[u,"TK_UNKNOWN"]}function a(e){for(var t="",n=0,r=new u(e),i=null;r.hasNext();)if(i=r.match(/([\s]|[^\\]|\\\\)+/g),i&&(t+=i[0]),"\\"===r.peek()){if(r.next(),"x"===r.peek())i=r.match(/x([0-9A-Fa-f]{2})/g);else{if("u"!==r.peek()){t+="\\",r.hasNext()&&(t+=r.next());continue}i=r.match(/u([0-9A-Fa-f]{4})/g)}if(!i)return e;if(n=parseInt(i[1],16),n>126&&n<=255&&0===i[0].indexOf("x"))return e;if(n>=0&&n<32){t+="\\"+i[0];continue}t+=34===n||39===n||92===n?"\\"+String.fromCharCode(n):String.fromCharCode(n)}return t}var o="\n\r\t ".split(""),s=/[0-9]/,l=/[01]/,p=/[01234567]/,f=/[0123456789abcdefABCDEF]/;this.positionable_operators="!= !== % & && * ** + - / : < << <= == === > >= >> >>> ? ^ | ||".split(" ");var d=this.positionable_operators.concat("! %= &= *= **= ++ += , -- -= /= :: <<= = => >>= >>>= ^= |= ~".split(" "));this.line_starters="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");var E,T,x,R,K,m=this.line_starters.concat(["do","in","else","get","set","new","catch","finally","typeof","yield","async","await","from","as"]),b=/([\s\S]*?)((?:\*\/)|$)/g,w=/([^\n\r\u2028\u2029]*)/g,v=/\/\* beautify( \w+[:]\w+)+ \*\//g,k=/ (\w+)[:](\w+)/g,O=/([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g,S=/((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;this.tokenize=function(){K=new u(e),x=!1,R=[];for(var t,n,r,i=null,a=[],o=[];!n||"TK_EOF"!==n.type;){for(r=_(),t=new h(r[1],r[0],E,T);"TK_COMMENT"===t.type||"TK_BLOCK_COMMENT"===t.type||"TK_UNKNOWN"===t.type;)"TK_BLOCK_COMMENT"===t.type&&(t.directives=r[2]),o.push(t),r=_(),t=new h(r[1],r[0],E,T);o.length&&(t.comments_before=o,o=[]),"TK_START_BLOCK"===t.type||"TK_START_EXPR"===t.type?(t.parent=n,a.push(i),i=t):("TK_END_BLOCK"===t.type||"TK_END_EXPR"===t.type)&&i&&("]"===t.text&&"["===i.text||")"===t.text&&"("===i.text||"}"===t.text&&"{"===i.text)&&(t.parent=i.parent,t.opened=i,i=a.pop()),R.push(t),n=t}return R}}var c={};!function(e){var t="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n="̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿",r=new RegExp("["+t+"]"),i=new RegExp("["+t+n+"]");e.newline=/[\n\r\u2028\u2029]/,e.lineBreak=new RegExp("\r\n|"+e.newline.source),e.allLineBreaks=new RegExp(e.lineBreak.source,"g"),e.isIdentifierStart=function(e){return e<65?36===e||64===e:e<91||(e<97?95===e:e<123||e>=170&&r.test(String.fromCharCode(e)))},e.isIdentifierChar=function(e){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||e>=170&&i.test(String.fromCharCode(e))))}}(c);var p={before_newline:"before-newline",after_newline:"after-newline",preserve_newline:"preserve-newline"},f=[p.before_newline,p.preserve_newline],d={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"},u=function(e){var t=e,n=t.length,r=0;this.back=function(){r-=1},this.hasNext=function(){return r<n},this.next=function(){var e=null;return this.hasNext()&&(e=t.charAt(r),r+=1),e},this.peek=function(e){var i=null;return e=e||0,e+=r,e>=0&&e<n&&(i=t.charAt(e)),i},this.peekCharCode=function(e){var i=0;return e=e||0,e+=r,e>=0&&e<n&&(i=t.charCodeAt(e)),i},this.test=function(e,n){return n=n||0,e.lastIndex=r+n,e.test(t)},this.testChar=function(e,t){var n=this.peek(t);return null!==n&&e.test(n)},this.match=function(e){e.lastIndex=r;var n=e.exec(t);return n&&n.index===r?r+=n[0].length:n=null,n}},h=function(e,t,n,r,i){this.type=e,this.text=t,this.comments_before=[],this.newlines=n||0,this.wanted_newline=n>0,this.whitespace_before=r||"",this.parent=i||null,this.opened=null,this.directives=null},E=new a(e,t);return E.beautify()}"function"==typeof define&&define.amd?define([],function(){return{js_beautify:e}}):"undefined"!=typeof exports?exports.js_beautify=e:"undefined"!=typeof window?window.js_beautify=e:"undefined"!=typeof global&&(global.js_beautify=e)}();
//>>built
define(["./common"],function(g){return{label:function(a,b){var f=0.5*(a.x+b.x),d=0.5*(a.y+b.y),e=g.slope(a,b),c=4/Math.sqrt(1+e*e);if(b.y>a.y&&b.x>a.x||b.y<a.y&&b.x<a.x)c=-c,d-=20;return{x:f+-c*e,y:d+c,foo:"bar",align:b.x<a.x?"end":"start"}},angle:function(a,b){var f=0.7*a.x+0.3*b.x,d=0.7*a.y+0.3*b.y,e=g.slope(a,b),c=4/Math.sqrt(1+e*e);b.x<a.x&&(c=-c);var h=b.y>a.y?"end":"start",d=d+c+(b.x>a.x?10:-10);return{x:f+-c*e,y:d,align:h}}}});
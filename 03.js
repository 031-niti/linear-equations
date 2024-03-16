
x = [-3,-2,-1,0,1,2,3];
y = [];
z = [];
for (let i=0; i<x.length; i++) {
    y[i] = 0.5*x[i]+2;
    z[i] = -1*x[i]+5;
    document.write("<span style = 'color:red'>(" + x[i] + " , " + y[i] + ") </span>");
    document.write("<span style = 'color:blue'>(" + x[i] + " , " + z[i] + ") </span>");
}


//practie Qs HW 4.





const doubleAndReturnArgs = (arr,...args) => [
    ...arr , ...args.map((V) => V*2)];
    doubleAndReturnArgs ( [1,2,3] , 4 ,4);
    doubleAndReturnArgs ( [2] , 10 ,4);





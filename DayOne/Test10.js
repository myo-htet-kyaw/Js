function add(...num){
    let total =0;

    num.forEach((element) => {
        total+=element;
    });
    console.log(total)
}
add(1,2,3,4);   
function addressMaker(address){
    const {city,state} = address;

    // const newAddress = {city: address.city,state: address.state,country: 'United states'};
    
    const newAddress = {city,state,country: 'United states'};

    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);

}
addressMaker({city: 'Austin',state: 'Teaxs'});
let result;
    let [size, position, data] = input.split(" | ");
    let zeros;

    size     = Number(size);
    position = String(position);
    data     = JSON.parse(data);

    // -- ваш код начинается тут
    
    if (data.length > size) {
        result = 'Неверный размер';
    }
    else if (position!=='left' && position!=='right'){
        result = 'Неверная позиция';
    }
    else{
        zeros = size - data.length;
        for (let i=0; i<zeros; i++){
        if (position==='left'){
        data.unshift(0);
        }
    }
    
    for (let i=0; i<zeros; i++){
        if (position==='right'){
        data.push(0);
        }
    }
    
    result = data.join(', ');
    }
    
    
    

    // -- ваш код заканчивается тут

    console.log(result);
function createRect(width, height){
    const rect = {width, height};

    rect.getArea = () => {
        return rect.width * rect.height;
    };

    //return rect;
    console.log(rect.getArea())
}


createRect(5,6);

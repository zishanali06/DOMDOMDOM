document.addEventListener('DOMContentLoaded', function(){
    function getRndInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    let button1 = document.createElement('button');
    let button1text = document.createTextNode('Add Square');

    button1.appendChild(button1text);
    document.body.appendChild(button1);

    let newrowdiv = document.createElement('div');
    newrowdiv.className = 'newrow';
    document.body.appendChild(newrowdiv);

    let squareid = 1;
    button1.addEventListener("click", function(){
        let newDiv = document.createElement('div');
        newDiv.className = 'boxes';
        newDiv.id = squareid;
        squareid++;

        document.body.appendChild(newDiv);

        newDiv.addEventListener('mouseenter', function(){
            let squaretext = document.createTextNode(newDiv.id);
            newDiv.appendChild(squaretext);

            newDiv.addEventListener('mouseleave', function(){
                console.log('need to be in here');
                let removesquaretext = document.createTextNode("");

                newDiv.replaceChild(removesquaretext, squaretext);
            })
        });

        let colors = ['red', 'blue', 'green', 'purple'];
        newDiv.addEventListener('click', function(){
            newDiv.style.backgroundColor = colors[getRndInt(0,5)];
        });
    });
});

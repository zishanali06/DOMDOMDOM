document.addEventListener('DOMContentLoaded', function () {
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
    button1.addEventListener("click", function () {
        let newDiv = document.createElement('div');
        newDiv.className = 'boxes';
        newDiv.id = squareid;
        squareid++;

        document.body.appendChild(newDiv);

        newDiv.addEventListener('mouseenter', function () {
            let squaretext = document.createTextNode(newDiv.id);
            newDiv.appendChild(squaretext);

            newDiv.addEventListener('mouseleave', function () {
                let removesquaretext = document.createTextNode("");

                newDiv.replaceChild(removesquaretext, squaretext);
            })
        });

        let colors = ['red', 'blue', 'green', 'purple'];
        newDiv.addEventListener('click', function () {
            newDiv.style.backgroundColor = colors[getRndInt(0, 5)];
        });
        newDiv.addEventListener('dblclick', function () {
            let clicksquareid = newDiv.id;

            if (clicksquareid % 2 == 0) {
                clicksquareid++;
                let newsquareselect = document.getElementById(clicksquareid);
                if(newsquareselect == null){
                    alert('There is no Box to Remove After');
                }else{
                    newsquareselect.remove();
                };
            }else{
                clicksquareid--;
                let newsquareselect = document.getElementById(clicksquareid);
                if(newsquareselect == null){
                    alert('There is no box to Remove Before');
                }else{
                    newsquareselect.remove();
                }
            };
        })
    });
});


//question 1, my console keeps getting an error.

//questoin 2, i cheated and used table-cell as display attribute but I what other way can I get the boxes to not move, when i was using display: flex or even display: inline-block the div square would move when the number text went into it.
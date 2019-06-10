console.log('hello world');

const board = []


function play(clickValue){
    const playerSpan = document.getElementById('player');
    const clickVariable = document.getElementById(clickValue);

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickVariable.innerText = 'X';
        board[clickValue] = 'X';
    } else{
        playerSpan.innerText = 'X';
        clickVariable.innerText = 'O'
        board[clickValue] = 'O'
    } 

    console.log(board)
    
    const topLeft = board[0]
    const topRight = board[2]
    const topCenter = board[1]
    const middleRight = board[5]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const bottomLeft = board[6]
    const bottomRight = board[8]
    const bottomCenter = board[7]
    let boardFull = true
    
    if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
        window.alert(`${topRight} is the winner`)
    }
    if (middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft){
        window.alert(`${middleRight} is the winner`)
    }
    if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft){
        window.alert(`${bottomRight} is the winner`)
    }
    if (topCenter !== undefined && topCenter === middleCenter && middleCenter === bottomCenter){
        window.alert(`${topCenter} is the winner`)
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        window.alert(`${topLeft} is the winner`)
    }
    if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        window.alert(`${topRight} is the winner`)
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        window.alert(`${topLeft} is the winner`)
    }
    
    for(let i = 0; i< 8; i++){
        if(board[i] === undefined){
           boardFull = false
        }
    }
        if(boardFull === true){
            window.alert('Cats game')
        }
    }



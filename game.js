const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Variables del juego
    let joseLuis = { x: 50, y: 450, width: 50, height: 50, health: 3 };
    
    // Función de inicio del juego
    function startGame() {
        drawCharacter();
    }
    
    // Dibuja a José Luis
    function drawCharacter() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(joseLuis.x, joseLuis.y, joseLuis.width, joseLuis.height);
    }

    // Llama a la función de inicio
    startGame();
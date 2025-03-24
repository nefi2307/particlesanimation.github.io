class Bola{
    constructor(x,y){
        this.x = x
        this.y = y
        this.radio = 5
        this.dirX = (Math.random() * 2 ) - 1  
        this.dirY = (Math.random() * 2 ) - 1  
        this.velocidad = 10
    }

    dibujar(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2)
        ctx.fill()        
        ctx.fillStyle = 'white'
        ctx.stroke()
        ctx.strokeStyle = 'white'
        ctx.closePath()

    }

    mover(){
        this.x += this.dirX * this.velocidad
        this.y += this.dirY * this.velocidad   
        
        if(this.x + this.radio > canvas.width || this.x < 0)
            this.dirX *=  -1            
        
        if(this.y + this.radio > canvas.height || this.y < 0)
                this.dirY *=  -1                
    }

}
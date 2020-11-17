/**
 * Monstruo que se ha vuelto más poderoso al que tenemos que destruir
 * Jefe. Hereda de la clase Opponent
 */
class Boss extends Opponent {

    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor(game) {
        super(game);
        this.speed = BOSS_SPEED;
        this.image.src = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
    }

    /**
     * Mata al Boss, termina el juego
     */
    collide() {
        if (!this.dead) {
            setTimeout(() => {
                this.game.endGame();
            }, 2000);
            super.collide();
            //this.game.score++; // Incrementa un punto adicional por ser jefe
        }
    }
}
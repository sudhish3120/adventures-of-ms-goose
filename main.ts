let Cars: Sprite = null
scene.setBackgroundColor(7)
let goose = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . 1 4 4 4 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . f f f f 1 1 1 1 1 f f f f . . 
    . . . f f 1 1 1 1 1 f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
goose.setPosition(80, 110)
game.onUpdateInterval(500, function () {
    Cars = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . f f 8 8 8 8 8 8 8 8 8 f f . . 
        . f f 8 8 8 8 8 8 8 8 8 f f . . 
        . f f 8 8 8 8 8 8 8 8 8 f f . . 
        . f f 8 8 8 8 8 8 8 8 8 f f . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . f f f 8 8 8 8 8 8 8 8 f f . . 
        . f f f 8 8 8 8 8 8 8 8 f f . . 
        . f f f 8 8 8 8 8 8 8 8 f f . . 
        . f f f 8 8 8 8 8 8 8 8 f f . . 
        . . 8 8 8 8 8 8 8 8 8 8 f f . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Cars.setPosition(randint(0, 160), 0)
    Cars.setVelocity(0, 50)
})

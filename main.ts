namespace SpriteKind {
    export const _tree = SpriteKind.create()
    export const button = SpriteKind.create()
    export const _building = SpriteKind.create()
    export const dialogue = SpriteKind.create()
    export const trap = SpriteKind.create()
    export const _dorp = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const 彩蛋 = SpriteKind.create()
}
namespace ConnectionKind {
    export const door3 = ConnectionKind.create()
    export const door4 = ConnectionKind.create()
    export const maybe彩蛋 = ConnectionKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    otherSprite.destroy(effects.smiles, 500)
    生成魔王 = true
    info.changeLifeBy(-1)
    music.bigCrash.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    animation.runImageAnimation(
    離開奧國按鈕,
    [img`
        b b b b b b b b b b b b b b b b 
        b c b b b b b b b b b b b b c b 
        b b b a 3 3 3 3 3 3 3 3 a b b b 
        b b a 3 3 3 3 3 3 3 3 3 3 a b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 3 1 3 3 3 3 3 3 3 3 1 3 b b 
        b b c 3 1 1 1 1 1 1 1 1 3 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `,img`
        b b b b b b b b b b b b b b b b 
        b c b a 3 3 3 3 3 3 3 3 a b c b 
        b b a 3 3 3 3 3 3 3 3 3 3 a b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 3 1 3 3 3 3 3 3 3 3 1 3 b b 
        b b 3 3 1 1 1 1 1 1 1 1 3 3 b b 
        b b c 3 3 3 3 3 3 3 3 3 3 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `],
    100,
    false
    )
    if (game.ask("是否要開始boss戰")) {
        tiles.loadConnectedMap(ConnectionKind.Door2)
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.destroy()
        }
        for (let value2 of sprites.allOfKind(SpriteKind.trap)) {
            value2.destroy()
        }
        魔王6464 = sprites.create(img`
            ................................................................
            ................................................................
            ...................ffffffffffffffffffffff.......................
            .................ffcccccccccccccccccccccfff.....................
            ................fcccccccccccccccccccccccccf.....................
            ................fccccccccccccccccccccccccccf............ccc.....
            ................ffffcccccccccccccccccccccccf............c.c.....
            ....................fffffffffffffffffffffff.............ccc.....
            ................................................................
            ...............a................................................
            ..............aaa...............................................
            .....ccc.......a.....ff...............ff........................
            .....c.c.............f2f....fffff....f2f........................
            .....ccc.............f2fffffffffffffff2f........................
            .....................ff2efffffffffffe2ff............a...........
            ......................fefffffffffffffef............aaa..........
            ......................fffffffffffffffff.............a...........
            ......................fffffffffffffffff.........................
            .....................fffffafffffffafffff........................
            .....................fffaadafffffadaafff........................
            .....................fffffafffffffafffff........................
            .....................fffffffffffffffffff........................
            .............ccc......fffffffffffffffff.........................
            .............c.c......fffffffffffffffff.........................
            .............ccc......fffffffffffffffff.........................
            ......a................fffffffffffffff..........................
            .....aaa.............fffffffffffffffffff................ccc.....
            ......a.............ffbfffffffffffffffbff...............c.c.....
            ..................fffffbbfffffffffffbbffff..............ccc.....
            .................ffffffffbfffffffffbfffffff.....................
            .................fffffffffbbbfffbbbfffffffff....................
            ................fffffffffffffbbbffffffffffff....................
            ...............ffffffffffffffbbbfffffffffffff...................
            ...ccc.........ffffffffffffbbfffbbffffffffffff..................
            ...c.c.........fffffffffffbfffffffbbfffffcffff..................
            ...ccc.........fffcfffbbbfffffffffffbbbffcffff............a.....
            ..............fffccffbbfffffffffffffffbbfcfffff..........aaa....
            .............fffcccffffffffffffffffffffffccffff...........a.....
            .............fffccfffffffffffffffffffffffccfffff................
            ............ffffccfffffffffffffffffffffffccfffff................
            ...........ffffcccfffffffffffffffffffffffccfffff................
            ...........ffffcccfffffffffffffffffffffffccccffff...............
            ...........ffffcccffffffffffffffffffffffffcccffff...............
            ...........ffffccf.ffffffffffffffffffffff.fffffff...............
            ...........fffffff..ffffffffffffffffffff.ffffffff...............
            ...........ffffffff.ffffffffffffffffffff.ffffffff...............
            ...........ffffffff.ffffffffffffffffffff.ffffffff...............
            ............fffffff.ffffffffffffffffffff..fffffff...............
            ..............ff....ffffffffffffffffffff.....fff................
            ....................ffffffffffffffffffff........................
            ....................ffffffffffffffffffff........................
            ....................ffffffffffffffffffff........................
            ...................ffffffffffffffffffffff.......................
            ...................ffffffffffffffffffffff.......................
            ...................ffffffffffffffffffffff.......................
            ..................ffffffffffffffffffffffff......................
            ..................ffffffffffffffffffffffff......................
            .................ffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffff.....................
            ................ffffffffffffffffffffffffffff....................
            ................ffffffffffffffffffffffffffff....................
            ................ffffffffffffffffffffffffffff....................
            `, SpriteKind.boss)
        tiles.placeOnTile(魔王6464, tiles.getTileLocation(8, 14))
        tiles.placeOnTile(princess, tiles.getTileLocation(7, 18))
    } else {
        princess.startEffect(effects.halo, 2000)
        tiles.placeOnTile(princess, tiles.getTileLocation(20, 0))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthWest1, function (sprite, location) {
    if (結局提示1) {
        game.splash("魔王卒")
    }
    結局提示1 = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    tiles.placeOnTile(princess, tiles.getTileLocation(7.5, 6.5))
    game.splash("魔王:想救王子就撐過20秒吧")
    info.startCountdown(20)
    boss戰 = true
    if (boss戰) {
        魔王 = sprites.create(img`
            . . . . 2 . . . . . 2 . . . . . 
            . . . . 2 2 f f f 2 2 . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f b a f a b f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f d f f f d f . . . . . 
            . . . f f f d f d f f f . . . . 
            . . f f b f f d f f b f f . . . 
            . . f b b f d f d f b b f . . . 
            . . f b f d f f f d f b f . . . 
            f . . f . f f f f f . f . . . f 
            f f . . f f f f f f f . . . f . 
            . . f f f f f f f f f f . . f . 
            f . . f f f f f f f f f . f . . 
            . f f f f f f f f f f f f f . . 
            `, SpriteKind.boss)
        tiles.placeOnTile(魔王, tiles.getTileLocation(8, 5))
        魔王.setVelocity(150, 150)
        魔王.setBounceOnWall(true)
        生成魔王 = false
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind._dorp, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(6, 200)
    princess.say("痛", 200)
    music.smallCrash.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    princess.say("這。。是我與王子原本的結婚地點。。。都怪可恨的魔王", 3000)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    princess,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 6 6 1 6 6 f . . . . . 
        . . . f 6 6 6 6 1 9 6 f . . . . 
        . 9 . f 6 6 6 6 6 1 9 f . . . . 
        . . . f d f d 6 6 9 1 f . . . . 
        . . . f d f d 6 9 6 9 f f . . . 
        . . . f d 2 d d 6 9 6 f 9 f . . 
        . . . . f d d d f f 9 f f . . . 
        . . . . . f f 2 3 f 6 9 9 f . . 
        . . . . f 2 3 3 f f f f f . . . 
        . . . . f 3 3 f d f . . . . . . 
        . . . . . f 2 f d f . . . . . . 
        . . . . f 2 2 3 f d f . . . 9 . 
        . . . . f f 3 2 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    200,
    false
    )
})
info.onCountdownEnd(function () {
    boss戰 = false
    for (let value of sprites.allOfKind(SpriteKind.boss)) {
        value.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind._dorp)) {
        value3.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.trap)) {
        value3.destroy()
    }
    tiles.loadConnectedMap(ConnectionKind.door3)
    animation.runImageAnimation(
    princess,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 1 1 1 6 1 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 9 6 6 f . . . 
        . . . f 6 6 9 6 6 6 6 6 f . . . 
        . . f f 9 6 6 9 6 6 9 6 f f . . 
        . f 6 9 6 f 9 6 9 9 f 9 6 9 f . 
        . . f f f 3 f f f f 3 f f f . . 
        . . . f d 2 3 2 2 3 2 d f . . . 
        . . f d d f 3 2 2 3 f d d f . . 
        . . . f f f 2 3 3 2 f f f . . . 
        . . . . f 3 3 2 2 3 3 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    100,
    false
    )
    tiles.placeOnTile(princess, tiles.getTileLocation(5, 13))
    princess.say("終於贏了", 1000)
    prince = sprites.create(img`
        . . . f f f f f f f f f . . . . 
        . . f 9 9 f f 9 f f 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f f f 9 f 9 f 9 f f f . . . 
        . f f d d d d d d d d d f f . . 
        . . f c d 1 f d f 1 d c f . . . 
        . . f c d d d d d d d c f . . . 
        . . . f c d d d d d c f . . . . 
        . f f f f f f f f f f . . . . . 
        . f 1 1 1 1 f 9 e 9 f d . . . . 
        . f 1 e e 1 f e 9 e f d . . . . 
        . f 1 e e 1 f 9 e 9 f f . . . . 
        . f 1 1 1 1 f e 9 f f f f f . . 
        . . f 1 1 f e 9 e 9 b b b . . . 
        . . . f f f f f f f b 9 b . . . 
        . . . . f f . . f f b 9 b . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(prince, tiles.getTileLocation(5, 0))
    魔王6464 = sprites.create(img`
        ................................................................
        ................................................................
        ...................ffffffffffffffffffffff.......................
        .................ffcccccccccccccccccccccfff.....................
        ................fcccccccccccccccccccccccccf.....................
        ................fccccccccccccccccccccccccccf............ccc.....
        ................ffffcccccccccccccccccccccccf............c.c.....
        ....................fffffffffffffffffffffff.............ccc.....
        ................................................................
        ...............a................................................
        ..............aaa...............................................
        .....ccc.......a.....ff...............ff........................
        .....c.c.............f2f....fffff....f2f........................
        .....ccc.............f2fffffffffffffff2f........................
        .....................ff2efffffffffffe2ff............a...........
        ......................fefffffffffffffef............aaa..........
        ......................fffffffffffffffff.............a...........
        ......................fffffffffffffffff.........................
        .....................fffffafffffffafffff........................
        .....................fffaadafffffadaafff........................
        .....................fffffafffffffafffff........................
        .....................fffffffffffffffffff........................
        .............ccc......fffffffffffffffff.........................
        .............c.c......fffffffffffffffff.........................
        .............ccc......fffffffffffffffff.........................
        ......a................fffffffffffffff..........................
        .....aaa.............fffffffffffffffffff................ccc.....
        ......a.............ffbfffffffffffffffbff...............c.c.....
        ..................fffffbbfffffffffffbbffff..............ccc.....
        .................ffffffffbfffffffffbfffffff.....................
        .................fffffffffbbbfffbbbfffffffff....................
        ................fffffffffffffbbbffffffffffff....................
        ...............ffffffffffffffbbbfffffffffffff...................
        ...ccc.........ffffffffffffbbfffbbffffffffffff..................
        ...c.c.........fffffffffffbfffffffbbfffffcffff..................
        ...ccc.........fffcfffbbbfffffffffffbbbffcffff............a.....
        ..............fffccffbbfffffffffffffffbbfcfffff..........aaa....
        .............fffcccffffffffffffffffffffffccffff...........a.....
        .............fffccfffffffffffffffffffffffccfffff................
        ............ffffccfffffffffffffffffffffffccfffff................
        ...........ffffcccfffffffffffffffffffffffccfffff................
        ...........ffffcccfffffffffffffffffffffffccccffff...............
        ...........ffffcccffffffffffffffffffffffffcccffff...............
        ...........ffffccf.ffffffffffffffffffffff.fffffff...............
        ...........fffffff..ffffffffffffffffffff.ffffffff...............
        ...........ffffffff.ffffffffffffffffffff.ffffffff...............
        ...........ffffffff.ffffffffffffffffffff.ffffffff...............
        ............fffffff.ffffffffffffffffffff..fffffff...............
        ..............ff....ffffffffffffffffffff.....fff................
        ....................ffffffffffffffffffff........................
        ....................ffffffffffffffffffff........................
        ....................ffffffffffffffffffff........................
        ...................ffffffffffffffffffffff.......................
        ...................ffffffffffffffffffffff.......................
        ...................ffffffffffffffffffffff.......................
        ..................ffffffffffffffffffffffff......................
        ..................ffffffffffffffffffffffff......................
        .................ffffffffffffffffffffffffff.....................
        .................ffffffffffffffffffffffffff.....................
        .................ffffffffffffffffffffffffff.....................
        .................ffffffffffffffffffffffffff.....................
        ................ffffffffffffffffffffffffffff....................
        ................ffffffffffffffffffffffffffff....................
        ................ffffffffffffffffffffffffffff....................
        `, SpriteKind.boss)
    tiles.placeOnTile(魔王6464, tiles.getTileLocation(5, 10))
    魔王6464.say("厄厄厄厄厄阿阿阿阿阿阿阿", 2000)
    魔王6464.destroy(effects.spray, 2000)
    結局提示1 = true
    結局提示2 = true
    結局提示3 = true
})
function 遊戲結束 () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.trap, function (sprite, otherSprite) {
    if (boss戰) {
        otherSprite.destroy()
    } else {
        tiles.placeOnTile(princess, tiles.getTileLocation(0, 1))
    }
    princess.say("哀呀", 1000)
    princess.startEffect(effects.fire, 1000)
    scene.cameraShake(5, 1000)
    info.changeLifeBy(-1)
    music.smallCrash.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    princess.say("不要碰到火焰，會扣1~2HP", 2000)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    princess,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 1 1 1 6 1 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 9 6 6 f . . . 
        . . . f 6 6 9 6 6 6 6 6 f . . . 
        . . f f 9 6 6 9 6 6 9 6 f f . . 
        . f 6 9 6 f 9 6 9 9 f 9 6 9 f . 
        . . f f f 3 f f f f 3 f f f . . 
        . . . f d 2 3 2 2 3 2 d f . . . 
        . . f d d f 3 2 2 3 f d d f . . 
        . . . f f f 2 3 3 2 f f f . . . 
        . . . . f 3 3 2 2 3 3 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    princess,
    [img`
        . . . . . . . . . . . . . . . . 
        . 9 . . . . f f f f f . . . . . 
        . . . . . f 6 6 1 6 6 f . . . . 
        . . . . f 6 9 1 6 6 6 6 f . . . 
        . . . . f 9 1 6 6 6 6 6 f . 9 . 
        . . . . f 1 9 6 6 d f d f . . . 
        . . . f f 9 6 9 6 d f d f . . . 
        . . f 9 f 6 9 6 d d 2 d f . . . 
        . . . f f 9 f f d d d f . . . . 
        . . f 9 9 6 f 3 2 f f . . . . . 
        . . . f f f f f 3 3 2 f . . . . 
        . . . . . . f d f 3 3 f . . . . 
        . . . . . . f d f 2 f . . . . . 
        . 9 . . . f d f 3 2 2 f . . . . 
        . . . . . . f f 2 3 f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (結局提示2) {
        game.splash("救出勇者")
        tiles.placeOnTile(princess, tiles.getTileLocation(5, 12))
        tiles.placeOnTile(prince, tiles.getTileLocation(5, 13))
        tiles.setTileAt(tiles.getTileLocation(5, 5), assets.tile`myTile30`)
    }
    結局提示2 = false
    prince.follow(princess, 100)
})
scene.onHitWall(SpriteKind._dorp, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    if (bossanime) {
        animation.runImageAnimation(
        魔王6464,
        [img`
            ................................................................
            ................................................................
            ...................ffffffffffffffffffffff.......................
            .................ffcccccccccccccccccccccfff.....................
            ................fcccccccccccccccccccccccccf.....................
            ................fccccccccccccccccccccccccccf............ccc.....
            ................ffffcccccccccccccccccccccccf............c.c.....
            ....................fffffffffffffffffffffff.............ccc.....
            ................................................................
            ...............a................................................
            ..............aaa...............................................
            .....ccc.......a.....ff...............ff........................
            .....c.c.............f2f....fffff....f2f........................
            .....ccc.............f2fffffffffffffff2f........................
            .....................ff2efffffffffffe2ff............a...........
            ......................fefffffffffffffef............aaa..........
            ......................fffffffffffffffff.............a...........
            ......................fffffffffffffffff.........................
            .....................fffffafffffffafffff........................
            .....................fffaadafffffadaafff........................
            .....................fffffafffffffafffff........................
            .....................fffffffffffffffffff........................
            .............ccc......fffffffffffffffff.........................
            .............c.c......fffffffffffffffff.........................
            .............ccc......fffffffffffffffff.........................
            ......a................fffffffffffffff..........................
            .....aaa.............fffffffffffffffffff................ccc.....
            ......a.............ffbfffffffffffffffbff...............c.c.....
            ..................fffffbbfffffffffffbbffff..............ccc.....
            .................ffffffffbfffffffffbfffffff.....................
            .................fffffffffbbbfffbbbfffffffff....................
            ................fffffffffffffbbbffffffffffff....................
            ...............ffffffffffffffbbbfffffffffffff...................
            ...ccc.........ffffffffffffbbfffbbffffffffffff..................
            ...c.c.........fffffffffffbfffffffbbfffffcffff..................
            ...ccc.........fffcfffbbbfffffffffffbbbffcffff............a.....
            ..............fffccffbbfffffffffffffffbbfcfffff..........aaa....
            .............fffcccffffffffffffffffffffffccffff...........a.....
            .............fffccfffffffffffffffffffffffccfffff................
            ............ffffccfffffffffffffffffffffffccfffff................
            ...........ffffcccfffffffffffffffffffffffccfffff................
            ...........ffffcccfffffffffffffffffffffffccccffff...............
            ...........ffffcccffffffffffffffffffffffffcccffff...............
            ...........ffffccf.ffffffffffffffffffffff.fffffff...............
            ...........fffffff..ffffffffffffffffffff.ffffffff...............
            ...........ffffffff.ffffffffffffffffffff.ffffffff...............
            ...........ffffffff.ffffffffffffffffffff.ffffffff...............
            ............fffffff.ffffffffffffffffffff..fffffff...............
            ..............ff....ffffffffffffffffffff.....fff................
            ....................ffffffffffffffffffff........................
            ....................ffffffffffffffffffff........................
            ....................ffffffffffffffffffff........................
            ...................ffffffffffffffffffffff.......................
            ...................ffffffffffffffffffffff.......................
            ...................ffffffffffffffffffffff.......................
            ..................ffffffffffffffffffffffff......................
            ..................ffffffffffffffffffffffff......................
            .................ffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffff.....................
            ................ffffffffffffffffffffffffffff....................
            ................ffffffffffffffffffffffffffff....................
            ................ffffffffffffffffffffffffffff....................
            `,img`
            ................................................................
            ................................................................
            ...................ffffffffffffffffffffff.......................
            .................ff222222222222222222222fff.....................
            ................f2222222222222222222222222f.....................
            ................f22222222222222222222222222f............ccc.....
            ................ffff22222222222222222222222f............c2c.....
            ....................fffffffffffffffffffffff.............ccc.....
            ................................................................
            ...............2................................................
            ..............222...............................................
            .....ccc.......2.....ff...............ff........................
            .....c2c.............fcf....fffff....fcf........................
            .....ccc.............fcfffffffffffffffcf........................
            .....................ffcefffffffffffecff............2...........
            ......................fefffffffffffffef............222..........
            ......................fffffffffffffffff.............2...........
            ......................fffffffffffffffff.........................
            .....................fffffafffffffafffff........................
            .....................fffaadafffffadaafff........................
            .....................fffffafffffffafffff........................
            .....................fffffffffffffffffff........................
            .............ccc......fffffffffffffffff.........................
            .............c2c......fffffffffffffffff.........................
            .............ccc......fffffffffffffffff.........................
            ......2................fffffffffffffff..........................
            .....222.............fffffffffffffffffff................ccc.....
            ......2.............ffbfffffffffffffffbff...............c2c.....
            ..................fffffbbfffffffffffbbfffffffff.........ccc.....
            .................ffffffffbfffffffffbffffffffffff................
            .................fffffffffbbbfffbbbffffffaaaaaff................
            ................fffffffffffffbbbfffffffffa222aff................
            ...............ffffffffffffffbbbfffffffffa222aff................
            ...ccc.........ffffffffffffbbfffbbfffffffa222aff................
            ...c2c.........fffffffffffbfffffffbbfffffaaaaaff................
            ...ccc.........fffcfffbbbfffffffffffbbbffffffff...........2.....
            ..............fffccffbbfffffffffffffffbbfffffff..........222....
            .............fffcccffffffffffffffffffffff.................2.....
            .............fffccfffffffffffffffffffffff.......................
            ............ffffccfffffffffffffffffffffff.......................
            ...........ffffcccfffffffffffffffffffffff.......................
            ...........ffffcccfffffffffffffffffffffff.......................
            ...........ffffcccfffffffffffffffffffffff.......................
            ...........ffffccf.ffffffffffffffffffffff.......................
            ...........fffffff..ffffffffffffffffffff........................
            ...........ffffffff.ffffffffffffffffffff........................
            ...........ffffffff.ffffffffffffffffffff........................
            ............fffffff.ffffffffffffffffffff........................
            ..............ff....ffffffffffffffffffff........................
            ....................ffffffffffffffffffff........................
            ....................ffffffffffffffffffff........................
            ....................ffffffffffffffffffff........................
            ...................ffffffffffffffffffffff.......................
            ...................ffffffffffffffffffffff.......................
            ...................ffffffffffffffffffffff.......................
            ..................ffffffffffffffffffffffff......................
            ..................ffffffffffffffffffffffff......................
            .................ffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffff.....................
            ................ffffffffffffffffffffffffffff....................
            ................ffffffffffffffffffffffffffff....................
            ................ffffffffffffffffffffffffffff....................
            `],
        100,
        false
        )
    }
    bossanime = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button, function (sprite, otherSprite) {
    animation.runImageAnimation(
    離開奧國按鈕,
    [img`
        b b b b b b b b b b b b b b b b 
        b c b b b b b b b b b b b b c b 
        b b b c 6 6 6 6 6 6 6 6 c b b b 
        b b c 6 6 6 6 6 6 6 6 6 6 c b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
        b b 6 9 6 6 6 6 6 6 6 6 9 6 b b 
        b b c 6 9 9 9 9 9 9 9 9 6 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `,img`
        b b b b b b b b b b b b b b b b 
        b c b c 6 6 6 6 6 6 6 6 c b c b 
        b b c 6 6 6 6 6 6 6 6 6 6 c b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
        b b 6 9 6 6 6 6 6 6 6 6 9 6 b b 
        b b 6 6 9 9 9 9 9 9 9 9 6 6 b b 
        b b c 6 6 6 6 6 6 6 6 6 6 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `],
    100,
    false
    )
    if (game.ask("是否要離開奧國")) {
        tiles.placeOnTile(princess, tiles.getTileLocation(0, 0))
        for (let value4 of sprites.allOfKind(SpriteKind.button)) {
            value4.destroy()
        }
        for (let value5 of sprites.allOfKind(SpriteKind._building)) {
            value5.destroy()
        }
        for (let value6 of sprites.allOfKind(SpriteKind._tree)) {
            value6.destroy()
        }
        tiles.loadConnectedMap(ConnectionKind.Door1)
        for (let value7 of tiles.getTilesByType(assets.tile`myTile13`)) {
            trap3 = sprites.create(assets.tile`myTile20`, SpriteKind.Enemy)
            tiles.placeOnTile(trap3, value7)
            tiles.setWallAt(value7, false)
        }
        princess.setVelocity(100, 100)
    } else {
        princess.startEffect(effects.halo, 2000)
        tiles.placeOnTile(princess, tiles.getTileLocation(14, 13))
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    princess,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 9 f . . . . 
        . . . f 1 6 6 6 6 6 1 9 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 9 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 9 f . . 
        . . f 6 f d 2 d d 2 d f 6 f . . 
        . . f 6 9 f d d d d f 9 6 f . . 
        . f 9 9 f 3 f f f f 3 f 9 9 f . 
        . . f f d 3 f 2 3 f 3 d f f . . 
        . . f d d f 3 f f 3 f d d f . . 
        . . . f f 3 2 3 3 2 3 f f . . . 
        . . . f 2 2 f 3 3 f 2 2 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (彩蛋) {
        game.splash("畫師的隱藏作品")
        tiles.placeOnTile(star, tiles.getTileLocation(2, 5))
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        mySprite = sprites.create(img`
            ................................................................
            .........................................ff.....................
            ........................................f91f....................
            .......................................ff91ff...................
            .......................................f9911f...................
            .......................................f9911f...................
            ..................fff..................f9911f...................
            ................ffeeffff...............f9911f...................
            ...............fffeeeeffffff...........f9911f...................
            ..............ffeeeeeeeeef5f...........f9911f...................
            ..........ffffeeeeeeeeeeee5ff..........f9911f...................
            ........fffe5eeeeeeeeeeeee55ff.........f9911f...................
            ........fee5eeeeeeeeeeeee5555f.........f9911f...................
            ........fee5eeeeeeeeeeeee55e5f.........f9911f...................
            ........fffe55555555555555555f.........f9911f...................
            .........ffeeeeeeedddddddddddf.........f9911f...................
            ........ffeeeeeedddddddddddddf.........f9911f...................
            ........feeeeeedddddddddffdddf.........f9911f...................
            ........feeeeeedddddddddffdddf.........f9911f...................
            ........feeeeeedddddddddffdddf.........f9911f...................
            ........ffeeeedddddddddddddddf.........f9911f...................
            .........feeeedddddddddddddddf.........f9911f...................
            .........feeeedddddddddddddddf.......fff9911ffff................
            .........feeeedddddddddddd22f........f555555555f................
            .........feeedddddddddddd222f........f555555555f................
            .........fefffddddddddddd22f........fffdddddffff................
            .........ffff.ffdddddddddff........ff888ddddf...................
            ..............f8fffffffffff.......ff88888dddf...................
            .............ff888888888ffff.....ff888888ffff...................
            ............ff888888888888ffff.fff88888fff......................
            ...........ff888888888888888ffff888888ff........................
            ...........f88888888888888888ff888888ff.........................
            ..........f888888888888878888f888888ff..........................
            ..........f88888888888877788ff88888ff...........................
            .........ff888888888888777888888899f............................
            .........f88888888888888788888899ff.............................
            .........f8888888888888888888888f...............................
            .........f8888888ff8888888888888f...............................
            .........f8f888888fff8888888888f................................
            .........f8ff8888888fff88fff88ff................................
            .........f88f888888888fff111ff..................................
            .........f88ff888888888f11111fff................................
            .........f888f888888888f11111111ff..............................
            .........f8888f8888888f11f11111f1fff............................
            ........fffeeeeff88888f11f111ff1111ff...........................
            ........fffeeeeefff88ff11ffffff11111ff..........................
            .........f88888888fff111111fff111111f...........................
            .........f8888888888f11111ffffff1111f...........................
            .........f888888888f11111ffff11f111f............................
            .........f888888888f1111ffff111f11f.............................
            .........ff8ffffffff111ffff1111111f.............................
            .........fffffffffffe1ffff1111111f..............................
            ..........ffffffffffeefff1111111f...............................
            ...........ffffffffffeef1111111ff...............................
            ...........fffffffff.fee11111fffff..............................
            ...........ffffffff..feee11ffffffff.............................
            ...........ffffffff...ffffffffffffff............................
            ...........ffffffff.......ffffffffff............................
            ...........ffffffff........ffffffffff...........................
            ...........ffffffff........ffffffffff...........................
            ...........ffffffff.........ffffffffff..........................
            ...........ffffffff..........fffffffff..........................
            ...........ffffffff..........fffffffff..........................
            ...........fffffff............ffffffff..........................
            `, SpriteKind.彩蛋)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
        mySprite4 = sprites.create(img`
            ...........cccccc......
            .........fccccccccc....
            .......ffccccccccccc...
            ......ffcccfcceeecccc..
            ....fffcccffce2eefccc..
            ...ffffccffc22dd24fccc.
            .ffffff.ffc22dddd22fcc.
            .......ffc22d11fddf2ffc
            .......fffc2dd19dd922fc
            ........ffc22dddddd2ffc
            ........fffc2dddddd2ffc
            .........fff2ffdddf2ff.
            .........ffffffffffff..
            ........ffffcccfccccf..
            ........fffffcccccccf..
            .......fffffffcccccff..
            ......ffbffffffccccfff.
            ......fffffffffc1ccfff.
            .....ffffffffff11fcffff
            ....ffffffbff5111f5cfff
            ....555fffff51111f55fff
            ...ffff55ff5f11111f5f5f
            ..fffffff555f11111f555f
            fffffffffffff11111fffff
            ......11ffffffffffffff.
            ......1111f444fffff411.
            ......eee.4fff4ee444dd.
            ......de..4ffefffff4d4.
            ......dd..4fe1f.fff44d.
            ..........ff4ff.fffff4.
            .........fffff..fffff..
            .........fffff..ffff...
            ........fffff...fffff..
            .......fffff.....ffff..
            .......fffff.....ffff..
            .......ffff......ffff..
            ......fffff......fffff.
            ......fcccc......fffccc
            ......fffffc.....fffffc
            .......fffff......fffff
            `, SpriteKind.彩蛋)
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(4, 4))
        彩蛋 = false
    } else {
        tiles.placeOnTile(star, tiles.getTileLocation(0, 7))
        for (let value of sprites.allOfKind(SpriteKind.彩蛋)) {
            value.destroy()
        }
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112221112221111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222122221111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222122221111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffff111111111111111111111111112222222221111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111ff6666666666666666fff111111111111111111111111222222211111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111fff666666666666666666666fff111111111111111111111222222211111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111f666666666666666666666666666f11111111111111111111122222111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111f66666666666666666666666666666f1111111111111111111112221111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111f6666699999999999999999999666666f111111111111111111111211111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111f669999999999999999999999999996666f11111111111111111221111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111f66699999999999999999999999999999666f1111111111111122111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111f6669999999999999999999999999999999666f111111111112211111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111f666999999999999999f99999999999999999666f11111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111f6669999999999999999f999999999999999999666f1111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111f666999999999f9999999f9999999999999999999666f111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111f666699999999f99999999f99999999999999999999666f11111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111f6666699999999f99991199f999999999999999999996666f1111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111f6669999999999f99991199f9999999999999999999996666f111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111f66699999999999f99999999f9999999999999999999996666ff11111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111f666999f9999999f99999999f99999999999999999999996666f11111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f666999ff999999f99999999ff99999999999999f99999999966f11111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f666999f9999999f99999999f999999999999999f999999999966f1111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f669999f919999ff99999999f999999f99999119f999999999966f1111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f669999f919999ff99999999f999199f999999199f99999999996f1111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f6699999f919999ff99999999ff99999f999999999f99999999996f1111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f6699999f99999fbf99999999ff99999ff99999999f999999999966f111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f6699999f99999fbbf999999fbf99999fbff9999999f99999999996f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f66999999f99996fbbf999999fbf99999fbbbf966699f99999999996f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f66999999f99996fddf999996fbbf99999fbbbff6669f9999999f9996f11111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f66999999f999eeeeee999996fddf9eeeeedddddf6666f999999f9996f11111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111ff6699999fbf696fdddf669966fddf69996fdddff9fff6f999999f9996f11111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111f66699999fbf696ffffdf6996fdddf66ffffdddf99996ff999999f9996ff1111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111f6669999ffbbf6f2222ff6996fddddff222fdddf999996ff99999f99996f1111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111f6699999fdddf6f2222ff6996fdddddf222fdddf9999996f9999f999996f1111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111f6699ff9fddddff4422fdf996fdddddf222ffddf9999996f9999f999996f1111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111f66999f9fdddddf4422fdf69fddddddf422fdddf99999996f999f999996f1111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111ff66999fffdddddf4422fdf66fddddddf442fdddf999999996f99f9999966f111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111f669999ffddddddf4422fddf6fddddddf442fdddff99999996ff9f9999996f111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111f6699999fdddddddffffddddfddddddddfffdddddf99999996f9f99999996f111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111f6ff9999ffdddddddddddddddddddddddddddddddff9999996f9999f99996f111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111f6fff9999fdd3d3d3d3d3ddddddddd3d3d3d3d3dddf9999996f9999f99996f111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111f6f.ff999ffdd3d3d3d3ddddddddddd3d3d3d3d3ddff999996f9999f99996f111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111f6f..ff996fffdddddddddddddddddddddddddddddbf99999f99999f999966f11111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111f6f..fff9966fdddddddddddddddddddddddddddddbf99999f9999f9991996f11111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111f6ff.f9ff666ffdddddddddddddddddddddddddddddff9999f9999f9991996f11111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111f66f.f99fffffddddddddddddddddddddddddddddddbf999f69999f9991996f11111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111ffff.f9999fddddddddddddddddddddddddddddddddbf9ff669999f9991996f11111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111ff99999fdddddddddddddddddddddddddddddddff9f669999f999919966f1111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f999999ffdddddddddddddddddddddddddddddf9ff666699ff999919996f1111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f9999999fddddddddddddddddddddddddddddf9999ffffff9f699919996f1111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f99999999fdddddddddddddddddddddddddddf99999f99999f699919996f1111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f999999999ffdddddddddddddddddddddddff999999f99999f699919996f1111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f99999999999fffdddddddddddddddddfff99999999f99999f6999199966f111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f99999999999999ffffdddddddddfffff9999999999f99999f6999199966f111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111f999999999991999999fffffffffbbbbf9999999999f99999f6999199996f111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f99999999999199999999fbbbbbbbbbbbf9999991999f99999f6999919996f111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f99999999999199999999fbbbbbbbbdddf9999991999f99999f6999919996f111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f99999999999199999999fdddddddddddf99999919999f9999f6999919996f111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f99999999999199999999fdddddddddddf99999919999f9999f6999991996f111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f9999999999919999999fdddddddddddf999999919999f9999f6999991996f111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f999999999991999999fddddddddddddf999999911999f999f66999991996f111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f99999999999199999fddddddddddddf1f999999919999f99f69999991996f111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f99999999999119999f1ffdddddddddf1f2ffff99919999f99f69999991996f111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f999999999991999ff2f1fddddddddf1f2f3333fff99999f99f69999999996f111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f99999999999199f332f1fbdddddddf1f2fffff333ff999f99f69999999996f111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f9999999999999f3ff2f1fbddddddf1f2ffffffff333ff9f99f69999999996f111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f999999999999f3ffff2f1fbbdddf1f2fffffffffff333ff99f69999999996f111111111111111111111111111111111111111111
            111111111111111111111111111111888111111111111111111111f99999999999ff3ffffff2f1fffff1f2fffffffffffffff3f99f69999999996f111111111111111111111111111111111111111111
            111111111111111111111111111118999811111111111111111111f9999999999f33ffffffff2ff222ffffffffffffffffffff3f9f66999999966f111111111111111111111111111111111111111111
            111111111111111111111111111fff919981111111111111111111f969999999f3ffffffffffffffffffffffffffffffffffff3f9f69699999696f111111111111111111111111111111111111111111
            1111111111111111111111111fffff991998111111111111111111f96999999f3fffffffffffffffffffffffffffffffffffff3ff6669699969666ff1111111111111111111111111111111111111111
            111111111111111111111111f1111899919981111111111111111f99996999f3fffffffffffffffffffffffffffffffffffffff3f669696969696666f111111111111111111111111111111111111111
            11111111111111111111111f11111899991998111111111111111f9999696f3ffffffffffffff333333ffffffffffffffffffff3f696969696969696f111111111111111111111111111111111111111
            1111111111111111111111f111111819999198111111111111111f699669f3ffffffffffffff3dddddd3fffffffffffffffffff3f669696969696966f111111111111111111111111111111111111111
            1111111111111111111111f111111811999998111111111111111f699699f3fffffffffffff3dddddd3ffffffffffffffffffff3f696969696969696f111111111111111111111111111111111111111
            1111111111111111111111f11111188888ff81111111111111111f69669f3ffffffffffffff3ddddd3fffffffffffffffffffff3f669696969696966f111111111111111111111111111111111111111
            1111111111111111111111f11111111111ff11111111111111111f66669f3ffffffffffffff3dddd3ffffffffffffffffffffff3f666964646969696f111111111111111111111111111111111111111
            1111111111111111111111f11111111111ff11111111111111111f6966f3ffffffffffffffff3dd3ffffffffffffffffffffffff3f69644444696966f111111111111111111111111111111111111111
            1111111111111111111111f11111111111f111111111111111111f9669f3fffffffffffffffff33fffffffffffffffffffffffff3f6696444696966f1111111111111111111111111111111111111111
            1111111111111111111111f11111111111f111111111111111111f666f3ffffffffffffffff333ffffffffffffffffffffffffff3f6969646969696f1111111111111111111111111111111111111111
            11111111111111111111111f111111111f1111111111111111111f669f3ffffffffffffff3322233333fffffffffffffffffffff3f6696969696966f1111111111111111111111111111111111111111
            111111111111111111111111f1111111f11111111111111111111f666f3ffffffffffff3322222222223333fffffffffff1fffff3f6669696969666f1111111111111111111111111111111111111111
            1111111111111111111111111fffffff111111111111111111111f966f3ffffffff33332222222222222222333ffffffff1ffffff3f69696969696f11111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111f69f3ff1ffff3222222222222222222222223fffffff1ffffff3f66969696966f11111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111f66f3ff1fffff333333333332222222222223ffffffff1fffff3f69696969696f11111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111f66f3ff1ffffffffffffffff333333333333fffffffff1fffff3f6696969696f111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111f6f3ff11fffffffffffffffffffffffffffffffffffff1ffffff3f669696966f111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111ff3ff1fffffffffffffffffffffffffffffffffffffff1fffff3f69696966f1111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f3ff1fffffffffffffffffffffffffffffffffffffff1fffff3f669696ff11111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f3ff1ffffffffffffffffffffffffffffffffffffffff1fffff3f6696f1111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f3ff11fffffffffffffffffffffffffffffffffffffff1fffff3f666f11111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f3fff1fffffffffffffffffffffffffffffffffffffffffffff3f6ff111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f3ffffffffffffffffffffffffffffffffffffffffffffffffff3fff111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffff33f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f33ffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111ff3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111fdf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111fddf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111fffddf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111fddfddf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111fdddddf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
            `)
        彩蛋 = true
    }
    tiles.loadConnectedMap(ConnectionKind.maybe彩蛋)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    if (結局提示3) {
        game.splash("救出王子後")
        game.splash("我與王子回到王國")
        game.splash("結婚了")
    }
    結局提示3 = false
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.destroy()
    }
    tiles.loadConnectedMap(ConnectionKind.door4)
    彩蛋 = true
    star = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 9 1 . . . . . . 
        . . . . . 1 1 9 9 9 1 1 . . . . 
        . . . . . . . 1 9 1 . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(star, 100, 100)
    tiles.placeOnTile(star, tiles.getTileLocation(0, 7))
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112221112221111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222122221111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222122221111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffff111111111111111111111111112222222221111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111ff6666666666666666fff111111111111111111111111222222211111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111fff666666666666666666666fff111111111111111111111222222211111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111f666666666666666666666666666f11111111111111111111122222111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111f66666666666666666666666666666f1111111111111111111112221111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111f6666699999999999999999999666666f111111111111111111111211111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111f669999999999999999999999999996666f11111111111111111221111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111f66699999999999999999999999999999666f1111111111111122111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111f6669999999999999999999999999999999666f111111111112211111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111f666999999999999999f99999999999999999666f11111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111f6669999999999999999f999999999999999999666f1111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111f666999999999f9999999f9999999999999999999666f111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111f666699999999f99999999f99999999999999999999666f11111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111f6666699999999f99991199f999999999999999999996666f1111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111f6669999999999f99991199f9999999999999999999996666f111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f66699999999999f99999999f9999999999999999999996666ff11111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111f666999f9999999f99999999f99999999999999999999996666f11111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f666999ff999999f99999999ff99999999999999f99999999966f11111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f666999f9999999f99999999f999999999999999f999999999966f1111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f669999f919999ff99999999f999999f99999119f999999999966f1111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f669999f919999ff99999999f999199f999999199f99999999996f1111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f6699999f919999ff99999999ff99999f999999999f99999999996f1111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f6699999f99999fbf99999999ff99999ff99999999f999999999966f111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f6699999f99999fbbf999999fbf99999fbff9999999f99999999996f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f66999999f99996fbbf999999fbf99999fbbbf966699f99999999996f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f66999999f99996fddf999996fbbf99999fbbbff6669f9999999f9996f11111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f66999999f999eeeeee999996fddf9eeeeedddddf6666f999999f9996f11111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111ff6699999fbf696fdddf669966fddf69996fdddff9fff6f999999f9996f11111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111f66699999fbf696ffffdf6996fdddf66ffffdddf99996ff999999f9996ff1111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111f6669999ffbbf6f2222ff6996fddddff222fdddf999996ff99999f99996f1111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111f6699999fdddf6f2222ff6996fdddddf222fdddf9999996f9999f999996f1111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111f6699ff9fddddff4422fdf996fdddddf222ffddf9999996f9999f999996f1111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111f66999f9fdddddf4422fdf69fddddddf422fdddf99999996f999f999996f1111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111ff66999fffdddddf4422fdf66fddddddf442fdddf999999996f99f9999966f111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111f669999ffddddddf4422fddf6fddddddf442fdddff99999996ff9f9999996f111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111f6699999fdddddddffffddddfddddddddfffdddddf99999996f9f99999996f111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111f6ff9999ffdddddddddddddddddddddddddddddddff9999996f9999f99996f111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111f6fff9999fdd3d3d3d3d3ddddddddd3d3d3d3d3dddf9999996f9999f99996f111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111f6f.ff999ffdd3d3d3d3ddddddddddd3d3d3d3d3ddff999996f9999f99996f111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111f6f..ff996fffdddddddddddddddddddddddddddddbf99999f99999f999966f11111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111f6f..fff9966fdddddddddddddddddddddddddddddbf99999f9999f9991996f11111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111f6ff.f9ff666ffdddddddddddddddddddddddddddddff9999f9999f9991996f11111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111f66f.f99fffffddddddddddddddddddddddddddddddbf999f69999f9991996f11111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111ffff.f9999fddddddddddddddddddddddddddddddddbf9ff669999f9991996f11111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111ff99999fdddddddddddddddddddddddddddddddff9f669999f999919966f1111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f999999ffdddddddddddddddddddddddddddddf9ff666699ff999919996f1111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f9999999fddddddddddddddddddddddddddddf9999ffffff9f699919996f1111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f99999999fdddddddddddddddddddddddddddf99999f99999f699919996f1111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f999999999ffdddddddddddddddddddddddff999999f99999f699919996f1111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f99999999999fffdddddddddddddddddfff99999999f99999f6999199966f111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f99999999999999ffffdddddddddfffff9999999999f99999f6999199966f111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111f999999999991999999fffffffffbbbbf9999999999f99999f6999199996f111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f99999999999199999999fbbbbbbbbbbbf9999991999f99999f6999919996f111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f99999999999199999999fbbbbbbbbdddf9999991999f99999f6999919996f111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f99999999999199999999fdddddddddddf99999919999f9999f6999919996f111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f99999999999199999999fdddddddddddf99999919999f9999f6999991996f111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f9999999999919999999fdddddddddddf999999919999f9999f6999991996f111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f999999999991999999fddddddddddddf999999911999f999f66999991996f111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f99999999999199999fddddddddddddf1f999999919999f99f69999991996f111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f99999999999119999f1ffdddddddddf1f2ffff99919999f99f69999991996f111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f999999999991999ff2f1fddddddddf1f2f3333fff99999f99f69999999996f111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f99999999999199f332f1fbdddddddf1f2fffff333ff999f99f69999999996f111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f9999999999999f3ff2f1fbddddddf1f2ffffffff333ff9f99f69999999996f111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f999999999999f3ffff2f1fbbdddf1f2fffffffffff333ff99f69999999996f111111111111111111111111111111111111111111
        111111111111111111111111111111888111111111111111111111f99999999999ff3ffffff2f1fffff1f2fffffffffffffff3f99f69999999996f111111111111111111111111111111111111111111
        111111111111111111111111111118999811111111111111111111f9999999999f33ffffffff2ff222ffffffffffffffffffff3f9f66999999966f111111111111111111111111111111111111111111
        111111111111111111111111111fff919981111111111111111111f969999999f3ffffffffffffffffffffffffffffffffffff3f9f69699999696f111111111111111111111111111111111111111111
        1111111111111111111111111fffff991998111111111111111111f96999999f3fffffffffffffffffffffffffffffffffffff3ff6669699969666ff1111111111111111111111111111111111111111
        111111111111111111111111f1111899919981111111111111111f99996999f3fffffffffffffffffffffffffffffffffffffff3f669696969696666f111111111111111111111111111111111111111
        11111111111111111111111f11111899991998111111111111111f9999696f3ffffffffffffff333333ffffffffffffffffffff3f696969696969696f111111111111111111111111111111111111111
        1111111111111111111111f111111819999198111111111111111f699669f3ffffffffffffff3dddddd3fffffffffffffffffff3f669696969696966f111111111111111111111111111111111111111
        1111111111111111111111f111111811999998111111111111111f699699f3fffffffffffff3dddddd3ffffffffffffffffffff3f696969696969696f111111111111111111111111111111111111111
        1111111111111111111111f11111188888ff81111111111111111f69669f3ffffffffffffff3ddddd3fffffffffffffffffffff3f669696969696966f111111111111111111111111111111111111111
        1111111111111111111111f11111111111ff11111111111111111f66669f3ffffffffffffff3dddd3ffffffffffffffffffffff3f666964646969696f111111111111111111111111111111111111111
        1111111111111111111111f11111111111ff11111111111111111f6966f3ffffffffffffffff3dd3ffffffffffffffffffffffff3f69644444696966f111111111111111111111111111111111111111
        1111111111111111111111f11111111111f111111111111111111f9669f3fffffffffffffffff33fffffffffffffffffffffffff3f6696444696966f1111111111111111111111111111111111111111
        1111111111111111111111f11111111111f111111111111111111f666f3ffffffffffffffff333ffffffffffffffffffffffffff3f6969646969696f1111111111111111111111111111111111111111
        11111111111111111111111f111111111f1111111111111111111f669f3ffffffffffffff3322233333fffffffffffffffffffff3f6696969696966f1111111111111111111111111111111111111111
        111111111111111111111111f1111111f11111111111111111111f666f3ffffffffffff3322222222223333fffffffffff1fffff3f6669696969666f1111111111111111111111111111111111111111
        1111111111111111111111111fffffff111111111111111111111f966f3ffffffff33332222222222222222333ffffffff1ffffff3f69696969696f11111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111f69f3ff1ffff3222222222222222222222223fffffff1ffffff3f66969696966f11111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111f66f3ff1fffff333333333332222222222223ffffffff1fffff3f69696969696f11111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111f66f3ff1ffffffffffffffff333333333333fffffffff1fffff3f6696969696f111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111f6f3ff11fffffffffffffffffffffffffffffffffffff1ffffff3f669696966f111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111ff3ff1fffffffffffffffffffffffffffffffffffffff1fffff3f69696966f1111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f3ff1fffffffffffffffffffffffffffffffffffffff1fffff3f669696ff11111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f3ff1ffffffffffffffffffffffffffffffffffffffff1fffff3f6696f1111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f3ff11fffffffffffffffffffffffffffffffffffffff1fffff3f666f11111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f3fff1fffffffffffffffffffffffffffffffffffffffffffff3f6ff111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f3ffffffffffffffffffffffffffffffffffffffffffffffffff3fff111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffff33f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f33ffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111f3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111ff3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111fdf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111fddf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111fffddf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111fddfddf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111fdddddf3fffffffffffffffffffffffffffffffffffffffffffffffffffff3f111111111111111111111111111111111111111111111111
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    princess.say("通往魔王成的路", 2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnTile(princess, tiles.getTileLocation(0, 1))
    princess.say("哀呀", 1000)
    princess.startEffect(effects.fire, 1000)
    scene.cameraShake(5, 1000)
    trap3.startEffect(effects.fire, 500)
    info.changeLifeBy(-1)
    music.smallCrash.play()
})
let trap2: Sprite = null
let rock: Sprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
let star: Sprite = null
let 彩蛋 = false
let trap3: Sprite = null
let 結局提示3 = false
let 結局提示2 = false
let prince: Sprite = null
let 魔王: Sprite = null
let boss戰 = false
let 結局提示1 = false
let 魔王6464: Sprite = null
let 生成魔王 = false
let tree1: Sprite = null
let market_right: Sprite = null
let market_left: Sprite = null
let princess: Sprite = null
let bossanime = false
let 離開奧國按鈕: Sprite = null
let tilemap1 = tiles.createMap(tilemap`層級4`)
let tilemap2 = tiles.createMap(tilemap`層級2`)
let tilemap3 = tiles.createMap(tilemap`層級15`)
let tilemap4 = tiles.createMap(tilemap`層級17`)
let tilemap5 = tiles.createMap(tilemap`層級21`)
let tilemap6 = tiles.createMap(tilemap`層級22`)
tiles.connectMapById(tilemap1, tilemap2, ConnectionKind.Door1)
tiles.connectMapById(tilemap2, tilemap3, ConnectionKind.Door2)
tiles.connectMapById(tilemap3, tilemap4, ConnectionKind.door3)
tiles.connectMapById(tilemap4, tilemap5, ConnectionKind.door4)
tiles.connectMapById(tilemap5, tilemap6, ConnectionKind.maybe彩蛋)
tiles.loadMap(tilemap1)
for (let value8 of tiles.getTilesByType(assets.tile`myTile5`)) {
    離開奧國按鈕 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b c b c 6 6 6 6 6 6 6 6 c b c b 
        b b c 6 6 6 6 6 6 6 6 6 6 c b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
        b b 6 9 6 6 6 6 6 6 6 6 9 6 b b 
        b b 6 6 9 9 9 9 9 9 9 9 6 6 b b 
        b b c 6 6 6 6 6 6 6 6 6 6 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.button)
    tiles.placeOnTile(離開奧國按鈕, value8)
    tiles.setWallAt(value8, false)
}
bossanime = true
princess = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 1 1 1 1 1 9 f . . . . 
    . . . f 1 6 6 6 6 6 1 9 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 9 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 9 f . . 
    . . f 6 f d 2 d d 2 d f 6 f . . 
    . . f 6 9 f d d d d f 9 6 f . . 
    . f 9 9 f 3 f f f f 3 f 9 9 f . 
    . . f f d 3 f 2 3 f 3 d f f . . 
    . . f d d f 3 f f 3 f d d f . . 
    . . . f f 3 2 3 3 2 3 f f . . . 
    . . . f 2 2 f 3 3 f 2 2 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
info.setLife(5)
controller.moveSprite(princess, 100, 100)
tiles.placeOnTile(princess, tiles.getTileLocation(2, 1))
scene.cameraFollowSprite(princess)
for (let value9 of tiles.getTilesByType(assets.tile`myTile8`)) {
    market_left = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f 4 4 e e e e e e e e 4 4 4 4 f 
        f e e 4 4 4 e 4 4 4 e e e 4 4 f 
        f f f f f f f f f f f f f 4 e f 
        d d d d d d d 1 1 1 1 d f 4 e f 
        d d d d d d d 1 f d 1 d f 4 e f 
        d d d d d d d 1 f d 1 d f 4 e f 
        d d d d d d d 1 1 1 1 d f e 4 f 
        d d d 7 7 2 7 f d 1 d d f e 4 f 
        d 2 7 2 7 2 2 f d 1 d d f e 4 f 
        2 7 2 7 7 2 7 f f f f f f e 4 f 
        2 7 2 2 2 7 4 4 4 4 4 4 4 e 4 f 
        f 4 4 4 4 4 4 4 4 4 4 e e e 4 f 
        f e e 4 4 4 4 e e e e e 4 4 4 f 
        f 4 e e e e e e 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind._building)
    tiles.placeOnTile(market_left, value9)
    tiles.setWallAt(value9, true)
}
for (let value10 of tiles.getTilesByType(assets.tile`myTile9`)) {
    market_right = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f 4 4 4 4 e e e e e e e e 4 4 f 
        f 4 4 e e e 4 4 4 e 4 4 4 e e f 
        f e 4 f f f f f f f f f f f f f 
        f e 4 f d 1 1 1 1 d d d d d d d 
        f e 4 f d 1 d f 1 d d d d d d d 
        f e 4 f d 1 d f 1 d d d d d d d 
        f 4 e f d 1 1 1 1 d d d d d d d 
        f 4 e f d d 1 d f 9 8 8 9 d d d 
        f 4 e f d d 1 d f 8 9 8 6 9 8 d 
        f 4 e f f f f f f 6 9 8 6 6 8 8 
        f 4 e 4 4 4 4 4 4 4 8 9 8 9 8 9 
        f 4 e e e 4 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 e e e e e 4 4 4 4 e e f 
        f 4 4 4 4 4 4 4 e e e e e e 4 f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind._building)
    tiles.placeOnTile(market_right, value10)
    tiles.setWallAt(value10, true)
}
for (let value11 of tiles.getTilesByType(assets.tile`myTile`)) {
    tree1 = sprites.create(img`
        . . . . . . . c c . . . . . . . 
        . . . . c c c 6 5 c 6 6 . . . . 
        . . . . c 6 c 5 5 c 7 6 . . . . 
        . . . 6 c c 7 5 5 7 c 6 6 . . . 
        . . c c 7 7 7 7 7 5 7 7 c 6 . . 
        . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
        c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
        c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
        . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
        . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
        . c c c c 7 7 6 f 7 7 c c c c . 
        . . . . c 7 c f f c 7 c . . . . 
        . . . . . 6 f e e e c . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e . e e . e e . . . . 
        . . . . . . . e e . . . . . . . 
        `, SpriteKind._building)
    tiles.placeOnTile(tree1, value11)
    tiles.setWallAt(value11, true)
}
let 有無陷阱 = true
game.splash("奧國邊境", "")
game.onUpdateInterval(2000, function () {
    if (boss戰) {
        for (let index = 0; index < 5; index++) {
            if (Math.percentChance(30)) {
                rock = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . . b a a b . . . . . . 
                    . . . b b b a a a a b b b . . . 
                    . . . b a a a a a a a a b . . . 
                    . . . . b a a a a a a b . . . . 
                    . . . . c a a a a a a c . . . . 
                    . . . . c a a a a a a c . . . . 
                    . . . . c a a c c a a c . . . . 
                    . . . . c c c . . c c c . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind._dorp)
                rock.setPosition(randint(10, 240), 10)
                rock.setVelocity(0, randint(50, 70))
            }
        }
        for (let index = 0; index < 5; index++) {
            if (Math.percentChance(30)) {
                rock = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . . b a a b . . . . . . 
                    . . . b b b a a a a b b b . . . 
                    . . . b a a a a a a a a b . . . 
                    . . . . b a a a a a a b . . . . 
                    . . . . c a a a a a a c . . . . 
                    . . . . c a a a a a a c . . . . 
                    . . . . c a a c c a a c . . . . 
                    . . . . c c c . . c c c . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind._dorp)
                rock.setPosition(240, randint(160, 10))
                rock.setVelocity(randint(-50, -70), 0)
            }
        }
        for (let index = 0; index < 5; index++) {
            if (Math.percentChance(30)) {
                rock = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . . b a a b . . . . . . 
                    . . . b b b a a a a b b b . . . 
                    . . . b a a a a a a a a b . . . 
                    . . . . b a a a a a a b . . . . 
                    . . . . c a a a a a a c . . . . 
                    . . . . c a a a a a a c . . . . 
                    . . . . c a a c c a a c . . . . 
                    . . . . c c c . . c c c . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind._dorp)
                rock.setPosition(10, randint(160, 10))
                rock.setVelocity(randint(50, 70), 0)
            }
        }
        for (let index = 0; index < 5; index++) {
            if (Math.percentChance(30)) {
                rock = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . . b a a b . . . . . . 
                    . . . b b b a a a a b b b . . . 
                    . . . b a a a a a a a a b . . . 
                    . . . . b a a a a a a b . . . . 
                    . . . . c a a a a a a c . . . . 
                    . . . . c a a a a a a c . . . . 
                    . . . . c a a c c a a c . . . . 
                    . . . . c c c . . c c c . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind._dorp)
                rock.setPosition(randint(10, 240), 160)
                rock.setVelocity(0, randint(-50, -70))
            }
        }
    }
})
game.onUpdateInterval(1200, function () {
    if (有無陷阱) {
        for (let value12 of tiles.getTilesByType(assets.tile`myTile16`)) {
            trap2 = sprites.create(assets.tile`myTile20`, SpriteKind.trap)
            tiles.placeOnTile(trap2, value12)
            tiles.setWallAt(value12, false)
        }
        有無陷阱 = false
    } else {
        for (let value13 of sprites.allOfKind(SpriteKind.trap)) {
            value13.destroy()
        }
        有無陷阱 = true
    }
})
game.onUpdateInterval(10000, function () {
    if (boss戰) {
        魔王 = sprites.create(img`
            . . . . 2 . . . . . 2 . . . . . 
            . . . . 2 2 f f f 2 2 . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f b a f a b f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f d f f f d f . . . . . 
            . . . f f f d f d f f f . . . . 
            . . f f b f f d f f b f f . . . 
            . . f b b f d f d f b b f . . . 
            . . f b f d f f f d f b f . . . 
            f . . f . f f f f f . f . . . f 
            f f . . f f f f f f f . . . f . 
            . . f f f f f f f f f f . . f . 
            f . . f f f f f f f f f . f . . 
            . f f f f f f f f f f f f f . . 
            `, SpriteKind.boss)
        tiles.placeOnTile(魔王, tiles.getTileLocation(8, 5))
        魔王.say("還躲啊", 500)
        魔王.setVelocity(150, 150)
        魔王.setBounceOnWall(true)
        music.pewPew.play()
    }
})

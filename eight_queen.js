/**
 * 1在棋盘任意位置摆放棋子
 * 2 在棋盘上拜访一个不被这棋子攻击的位置
 * 放一个棋子，找出一个安全的位置
 */

/**
 *	每一行只能有一个皇后，所有下一个皇后的Y坐标为数组的长度
 *	X坐标为state[y]的值
 *	数组就保存了所有皇后的位置
 *	皇后的下一个位置的不能与所有已经放好位置冲突
 *	abs(state[i]-nextX)!=nextY-i 对角线上 
 *	abs(state[i]-nextX)!=0 同一列
 *	
 * @param  {[type]} state [已经放置好的数组]
 * @param  {[type]} nextX [下一个位置，横坐标]
 * @return {[type]}       [description]
 */
function conflict(state, nextX) {
    nextY = state.length;
    for (var i = 0; i < nextY; i++) {
        var posX = Math.abs(state[i] - nextX);
        if (posX == 0 || posX == nextY - i) {
            return true;
        }
    }
    return false;
}

function* queens(num, state) {
    for (var i = 0; i < num; i++) {
        if (!conflict(state, i)) {
            if (state.length == num - 1) {
                yield [i];
            } else {
                var l = queens(num, state.concat([i]));
                for(let x of l){
                	yield [i].concat(x);
                }
            }
        }
    }
}
function printQueens(arr){
	var num =8;
	
	for(var i =0;i<8;i++){
		var star = ['*','*','*','*','*','*','*','*'];
		star[arr[i]]='X';
		console.log(star.join(' '));
	}

}
var l = queens(8,[]);
var count = 0;
for(let x of l){
	console.log("第"+ ++count +" 个方案:" )
	printQueens(x)

}

app.controller("myctrl",($scope,gameDetails)=>{
    gameDetails.fillButtons();
    $scope.buttons=gameDetails.buttons;
    $scope.player="Turn: Player 1";
    $scope.updatePos=(position) => {
        gameDetails.show(position);
        $scope.player=gameDetails.state?"Turn: Player 1":"Turn: Player 2";
        let whoWin=gameDetails.gameOver();
        if(whoWin=='fa-times') {
            $scope.wins="Player 1 wins";
            $scope.player="Game Over!";
        }
        else if(whoWin=='fa-circle-o') {
            $scope.wins="Player 2 wins";
            $scope.player="Game Over!"
        }
        else if(whoWin=="Draw!") {
            $scope.wins=whoWin;
            $scope.player="Game Over";
        }
        //$scope.buttons=gameDetails.buttons;
    };
    $scope.restart=() => {
        gameDetails.restartGame();
        $scope.buttons=gameDetails.buttons;
        $scope.player="Turn: Player 1";
        $scope.wins="";
    };
});
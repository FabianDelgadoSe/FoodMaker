gdjs.WinOrLoseCode = {};
gdjs.WinOrLoseCode.GDBackgroundObjects1= [];
gdjs.WinOrLoseCode.GDBackgroundObjects2= [];
gdjs.WinOrLoseCode.GDBackgroundObjects3= [];
gdjs.WinOrLoseCode.GDWinOrLoseObjects1= [];
gdjs.WinOrLoseCode.GDWinOrLoseObjects2= [];
gdjs.WinOrLoseCode.GDWinOrLoseObjects3= [];
gdjs.WinOrLoseCode.GDContinueObjects1= [];
gdjs.WinOrLoseCode.GDContinueObjects2= [];
gdjs.WinOrLoseCode.GDContinueObjects3= [];

gdjs.WinOrLoseCode.conditionTrue_0 = {val:false};
gdjs.WinOrLoseCode.condition0IsTrue_0 = {val:false};
gdjs.WinOrLoseCode.condition1IsTrue_0 = {val:false};


gdjs.WinOrLoseCode.eventsList0x73999c = function(runtimeScene) {

{


{
gdjs.WinOrLoseCode.GDWinOrLoseObjects2.createFrom(runtimeScene.getObjects("WinOrLose"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].setString("YOU WIN!");
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].getWidth()) / 2);
}
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x73999c
gdjs.WinOrLoseCode.eventsList0x6858e4 = function(runtimeScene) {

{


{
gdjs.WinOrLoseCode.GDWinOrLoseObjects2.createFrom(runtimeScene.getObjects("WinOrLose"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].setString("Better luck next");
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].getWidth()) / 2);
}
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x6858e4
gdjs.WinOrLoseCode.eventsList0x7c73fc = function(runtimeScene) {

{



}


{



}


{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
{
gdjs.WinOrLoseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.WinOrLoseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WinOrLoseCode.eventsList0x73999c(runtimeScene);} //End of subevents
}

}


{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
{
gdjs.WinOrLoseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.WinOrLoseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WinOrLoseCode.eventsList0x6858e4(runtimeScene);} //End of subevents
}

}


{


{
gdjs.WinOrLoseCode.GDContinueObjects1.createFrom(runtimeScene.getObjects("Continue"));
gdjs.WinOrLoseCode.GDWinOrLoseObjects1.createFrom(runtimeScene.getObjects("WinOrLose"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDContinueObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDContinueObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WinOrLoseCode.GDContinueObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WinOrLoseCode.GDWinOrLoseObjects1[i].getWidth()) / 2);
}
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x7c73fc
gdjs.WinOrLoseCode.eventsList0x67eccc = function(runtimeScene) {

{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
{
gdjs.WinOrLoseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.WinOrLoseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FinalMenu", false);
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x67eccc
gdjs.WinOrLoseCode.eventsList0xb4be0 = function(runtimeScene) {

{


{
gdjs.WinOrLoseCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDBackgroundObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDBackgroundObjects1[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDBackgroundObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Set Scene"); }gdjs.WinOrLoseCode.eventsList0x7c73fc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Set Scene"); }
}


{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
{
gdjs.WinOrLoseCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}if (gdjs.WinOrLoseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WinOrLoseCode.eventsList0x67eccc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.WinOrLoseCode.eventsList0xb4be0


gdjs.WinOrLoseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinOrLoseCode.GDBackgroundObjects1.length = 0;
gdjs.WinOrLoseCode.GDBackgroundObjects2.length = 0;
gdjs.WinOrLoseCode.GDBackgroundObjects3.length = 0;
gdjs.WinOrLoseCode.GDWinOrLoseObjects1.length = 0;
gdjs.WinOrLoseCode.GDWinOrLoseObjects2.length = 0;
gdjs.WinOrLoseCode.GDWinOrLoseObjects3.length = 0;
gdjs.WinOrLoseCode.GDContinueObjects1.length = 0;
gdjs.WinOrLoseCode.GDContinueObjects2.length = 0;
gdjs.WinOrLoseCode.GDContinueObjects3.length = 0;

gdjs.WinOrLoseCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['WinOrLoseCode'] = gdjs.WinOrLoseCode;

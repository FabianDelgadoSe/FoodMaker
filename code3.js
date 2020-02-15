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
gdjs.WinOrLoseCode.condition2IsTrue_0 = {val:false};
gdjs.WinOrLoseCode.conditionTrue_1 = {val:false};
gdjs.WinOrLoseCode.condition0IsTrue_1 = {val:false};
gdjs.WinOrLoseCode.condition1IsTrue_1 = {val:false};
gdjs.WinOrLoseCode.condition2IsTrue_1 = {val:false};


gdjs.WinOrLoseCode.eventsList0x6cec1c = function(runtimeScene) {

{


{
gdjs.WinOrLoseCode.GDWinOrLoseObjects2.createFrom(runtimeScene.getObjects("WinOrLose"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].setColor("250;250;250");
}
}}

}


{


{
gdjs.WinOrLoseCode.GDContinueObjects1.createFrom(runtimeScene.getObjects("Continue"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDContinueObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDContinueObjects1[i].setColor("250;250;250");
}
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x6cec1c
gdjs.WinOrLoseCode.eventsList0x7c07ac = function(runtimeScene) {

{


{
/* Reuse gdjs.WinOrLoseCode.GDBackgroundObjects2 */
{for(var i = 0, len = gdjs.WinOrLoseCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDBackgroundObjects2[i].setWidth((gdjs.WinOrLoseCode.GDBackgroundObjects2[i].getWidth()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightFactor")));
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDBackgroundObjects2[i].setHeight((gdjs.WinOrLoseCode.GDBackgroundObjects2[i].getHeight()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightFactor")));
}
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x7c07ac
gdjs.WinOrLoseCode.eventsList0x7c0864 = function(runtimeScene) {

{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
{
{gdjs.WinOrLoseCode.conditionTrue_1 = gdjs.WinOrLoseCode.condition0IsTrue_0;
gdjs.WinOrLoseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8583292);
}
}if (gdjs.WinOrLoseCode.condition0IsTrue_0.val) {
gdjs.WinOrLoseCode.GDBackgroundObjects2.createFrom(runtimeScene.getObjects("Background"));
{runtimeScene.getVariables().get("HeightFactor").setNumber(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / (( gdjs.WinOrLoseCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.WinOrLoseCode.GDBackgroundObjects2[0].getHeight()));
}
{ //Subevents
gdjs.WinOrLoseCode.eventsList0x7c07ac(runtimeScene);} //End of subevents
}

}


{


{
gdjs.WinOrLoseCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDBackgroundObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WinOrLoseCode.GDBackgroundObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDBackgroundObjects1[i].setY(0);
}
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x7c0864
gdjs.WinOrLoseCode.eventsList0x79763c = function(runtimeScene) {

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


}; //End of gdjs.WinOrLoseCode.eventsList0x79763c
gdjs.WinOrLoseCode.eventsList0x797a14 = function(runtimeScene) {

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


}; //End of gdjs.WinOrLoseCode.eventsList0x797a14
gdjs.WinOrLoseCode.eventsList0x6d0084 = function(runtimeScene) {

{


{
/* Reuse gdjs.WinOrLoseCode.GDContinueObjects2 */
{for(var i = 0, len = gdjs.WinOrLoseCode.GDContinueObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDContinueObjects2[i].setScale(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightContinueFactor")));
}
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x6d0084
gdjs.WinOrLoseCode.eventsList0x7c40f4 = function(runtimeScene) {

{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
gdjs.WinOrLoseCode.condition1IsTrue_0.val = false;
{
{gdjs.WinOrLoseCode.conditionTrue_1 = gdjs.WinOrLoseCode.condition0IsTrue_0;
gdjs.WinOrLoseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7000676);
}
}if ( gdjs.WinOrLoseCode.condition0IsTrue_0.val ) {
{
gdjs.WinOrLoseCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightContinueFactor")) >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.6;
}}
if (gdjs.WinOrLoseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WinOrLoseCode.GDContinueObjects2 */
{runtimeScene.getVariables().get("HeightContinueFactor").setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.6 / (( gdjs.WinOrLoseCode.GDContinueObjects2.length === 0 ) ? 0 :gdjs.WinOrLoseCode.GDContinueObjects2[0].getWidth()));
}
{ //Subevents
gdjs.WinOrLoseCode.eventsList0x6d0084(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x7c40f4
gdjs.WinOrLoseCode.eventsList0x801254 = function(runtimeScene) {

{


{
/* Reuse gdjs.WinOrLoseCode.GDWinOrLoseObjects1 */
{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects1[i].setScale(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightWinFactor")));
}
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x801254
gdjs.WinOrLoseCode.eventsList0x6d8194 = function(runtimeScene) {

{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
gdjs.WinOrLoseCode.condition1IsTrue_0.val = false;
{
{gdjs.WinOrLoseCode.conditionTrue_1 = gdjs.WinOrLoseCode.condition0IsTrue_0;
gdjs.WinOrLoseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7494356);
}
}if ( gdjs.WinOrLoseCode.condition0IsTrue_0.val ) {
{
gdjs.WinOrLoseCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightWinFactor")) >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.7;
}}
if (gdjs.WinOrLoseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WinOrLoseCode.GDWinOrLoseObjects1 */
{runtimeScene.getVariables().get("HeightWinFactor").setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.7 / (( gdjs.WinOrLoseCode.GDWinOrLoseObjects1.length === 0 ) ? 0 :gdjs.WinOrLoseCode.GDWinOrLoseObjects1[0].getWidth()));
}
{ //Subevents
gdjs.WinOrLoseCode.eventsList0x801254(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x6d8194
gdjs.WinOrLoseCode.eventsList0x80e22c = function(runtimeScene) {

{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
{
gdjs.WinOrLoseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.WinOrLoseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WinOrLoseCode.eventsList0x79763c(runtimeScene);} //End of subevents
}

}


{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
{
gdjs.WinOrLoseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.WinOrLoseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WinOrLoseCode.eventsList0x797a14(runtimeScene);} //End of subevents
}

}


{


{
gdjs.WinOrLoseCode.GDContinueObjects2.createFrom(runtimeScene.getObjects("Continue"));
gdjs.WinOrLoseCode.GDWinOrLoseObjects2.createFrom(runtimeScene.getObjects("WinOrLose"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDContinueObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDContinueObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WinOrLoseCode.GDContinueObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WinOrLoseCode.GDWinOrLoseObjects2[i].getWidth()) / 2);
}
}}

}


{


{
gdjs.WinOrLoseCode.GDContinueObjects2.createFrom(runtimeScene.getObjects("Continue"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDContinueObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDContinueObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WinOrLoseCode.GDContinueObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDContinueObjects2.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDContinueObjects2[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - ((gdjs.WinOrLoseCode.GDContinueObjects2[i].getHeight()) * 1.5));
}
}{runtimeScene.getVariables().get("HeightContinueFactor").setNumber((( gdjs.WinOrLoseCode.GDContinueObjects2.length === 0 ) ? 0 :gdjs.WinOrLoseCode.GDContinueObjects2[0].getWidth()));
}
{ //Subevents
gdjs.WinOrLoseCode.eventsList0x7c40f4(runtimeScene);} //End of subevents
}

}


{


{
gdjs.WinOrLoseCode.GDWinOrLoseObjects1.createFrom(runtimeScene.getObjects("WinOrLose"));
{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WinOrLoseCode.GDWinOrLoseObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.WinOrLoseCode.GDWinOrLoseObjects1.length ;i < len;++i) {
    gdjs.WinOrLoseCode.GDWinOrLoseObjects1[i].setY((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 0.25));
}
}{runtimeScene.getVariables().get("HeightWinFactor").setNumber((( gdjs.WinOrLoseCode.GDWinOrLoseObjects1.length === 0 ) ? 0 :gdjs.WinOrLoseCode.GDWinOrLoseObjects1[0].getWidth()));
}
{ //Subevents
gdjs.WinOrLoseCode.eventsList0x6d8194(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x80e22c
gdjs.WinOrLoseCode.eventsList0x72972c = function(runtimeScene) {

{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
{
gdjs.WinOrLoseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.WinOrLoseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FinalMenu", false);
}}

}


}; //End of gdjs.WinOrLoseCode.eventsList0x72972c
gdjs.WinOrLoseCode.eventsList0xb4be0 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Colors"); }gdjs.WinOrLoseCode.eventsList0x6cec1c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Colors"); }
}


{


{

{ //Subevents
gdjs.WinOrLoseCode.eventsList0x7c0864(runtimeScene);} //End of subevents
}

}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Set Scene"); }gdjs.WinOrLoseCode.eventsList0x80e22c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Set Scene"); }
}


{


gdjs.WinOrLoseCode.condition0IsTrue_0.val = false;
{
gdjs.WinOrLoseCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}if (gdjs.WinOrLoseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WinOrLoseCode.eventsList0x72972c(runtimeScene);} //End of subevents
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

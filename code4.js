gdjs.FinalMenuCode = {};
gdjs.FinalMenuCode.GDPrincipalPanelObjects1= [];
gdjs.FinalMenuCode.GDPrincipalPanelObjects2= [];
gdjs.FinalMenuCode.GDPrincipalPanelObjects3= [];
gdjs.FinalMenuCode.GDFinalTextObjects1= [];
gdjs.FinalMenuCode.GDFinalTextObjects2= [];
gdjs.FinalMenuCode.GDFinalTextObjects3= [];
gdjs.FinalMenuCode.GDBackgroundObjects1= [];
gdjs.FinalMenuCode.GDBackgroundObjects2= [];
gdjs.FinalMenuCode.GDBackgroundObjects3= [];
gdjs.FinalMenuCode.GDPlayAgainButtonObjects1= [];
gdjs.FinalMenuCode.GDPlayAgainButtonObjects2= [];
gdjs.FinalMenuCode.GDPlayAgainButtonObjects3= [];
gdjs.FinalMenuCode.GDURLButtonObjects1= [];
gdjs.FinalMenuCode.GDURLButtonObjects2= [];
gdjs.FinalMenuCode.GDURLButtonObjects3= [];
gdjs.FinalMenuCode.GDPlayAgainTextObjects1= [];
gdjs.FinalMenuCode.GDPlayAgainTextObjects2= [];
gdjs.FinalMenuCode.GDPlayAgainTextObjects3= [];
gdjs.FinalMenuCode.GDURLTextObjects1= [];
gdjs.FinalMenuCode.GDURLTextObjects2= [];
gdjs.FinalMenuCode.GDURLTextObjects3= [];
gdjs.FinalMenuCode.GDThanksTextObjects1= [];
gdjs.FinalMenuCode.GDThanksTextObjects2= [];
gdjs.FinalMenuCode.GDThanksTextObjects3= [];

gdjs.FinalMenuCode.conditionTrue_0 = {val:false};
gdjs.FinalMenuCode.condition0IsTrue_0 = {val:false};
gdjs.FinalMenuCode.condition1IsTrue_0 = {val:false};


gdjs.FinalMenuCode.eventsList0x6b0bf4 = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("ScoreGoal"));
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
}

}


{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("ScoreGoal"));
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.FinalMenuCode.eventsList0x6b0bf4
gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDURLButtonObjects2Objects = Hashtable.newFrom({"URLButton": gdjs.FinalMenuCode.GDURLButtonObjects2});gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDURLButtonObjects1Objects = Hashtable.newFrom({"URLButton": gdjs.FinalMenuCode.GDURLButtonObjects1});gdjs.FinalMenuCode.eventsList0x67e6bc = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://withkoji.com/", runtimeScene);
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x67e6bc
gdjs.FinalMenuCode.eventsList0x69415c = function(runtimeScene) {

{

gdjs.FinalMenuCode.GDURLButtonObjects2.createFrom(runtimeScene.getObjects("URLButton"));

gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDURLButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalMenuCode.GDURLButtonObjects2 */
gdjs.FinalMenuCode.GDURLTextObjects2.createFrom(runtimeScene.getObjects("URLText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDURLButtonObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLButtonObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDURLButtonObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLButtonObjects2[i].setScale(1);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDURLTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLTextObjects2[i].setCharacterSize(20);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDURLTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDURLTextObjects2[i].getWidth()) / 2);
}
}}

}


{

gdjs.FinalMenuCode.GDURLButtonObjects1.createFrom(runtimeScene.getObjects("URLButton"));

gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDURLButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalMenuCode.GDURLButtonObjects1 */
gdjs.FinalMenuCode.GDURLTextObjects1.createFrom(runtimeScene.getObjects("URLText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDURLButtonObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLButtonObjects1[i].setScale(1.2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDURLTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLTextObjects1[i].setCharacterSize(20 * 1.2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDURLTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDURLTextObjects1[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.FinalMenuCode.eventsList0x67e6bc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalMenuCode.eventsList0x69415c
gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDPlayAgainButtonObjects2Objects = Hashtable.newFrom({"PlayAgainButton": gdjs.FinalMenuCode.GDPlayAgainButtonObjects2});gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDPlayAgainButtonObjects1Objects = Hashtable.newFrom({"PlayAgainButton": gdjs.FinalMenuCode.GDPlayAgainButtonObjects1});gdjs.FinalMenuCode.eventsList0x6a7204 = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x6a7204
gdjs.FinalMenuCode.eventsList0x6cc9dc = function(runtimeScene) {

{

gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.createFrom(runtimeScene.getObjects("PlayAgainButton"));

gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDPlayAgainButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalMenuCode.GDPlayAgainButtonObjects2 */
gdjs.FinalMenuCode.GDPlayAgainTextObjects2.createFrom(runtimeScene.getObjects("PlayAgainText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainButtonObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainButtonObjects2[i].setScale(1);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainTextObjects2[i].setCharacterSize(20);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDPlayAgainTextObjects2[i].getWidth()) / 2);
}
}}

}


{

gdjs.FinalMenuCode.GDPlayAgainButtonObjects1.createFrom(runtimeScene.getObjects("PlayAgainButton"));

gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDPlayAgainButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalMenuCode.GDPlayAgainButtonObjects1 */
gdjs.FinalMenuCode.GDPlayAgainTextObjects1.createFrom(runtimeScene.getObjects("PlayAgainText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainButtonObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainButtonObjects1[i].setScale(1.2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainTextObjects1[i].setCharacterSize(20 * 1.2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDPlayAgainTextObjects1[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.FinalMenuCode.eventsList0x6a7204(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalMenuCode.eventsList0x6cc9dc
gdjs.FinalMenuCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinalMenuCode.eventsList0x6b0bf4(runtimeScene);} //End of subevents
}

}


{


{
gdjs.FinalMenuCode.GDFinalTextObjects1.createFrom(runtimeScene.getObjects("FinalText"));
gdjs.FinalMenuCode.GDThanksTextObjects1.createFrom(runtimeScene.getObjects("ThanksText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDThanksTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDThanksTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDThanksTextObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDFinalTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDFinalTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDFinalTextObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDFinalTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDFinalTextObjects1[i].setTextAlignment("center");
}
}}

}


{


{
gdjs.FinalMenuCode.GDURLButtonObjects1.createFrom(runtimeScene.getObjects("URLButton"));
gdjs.FinalMenuCode.GDURLTextObjects1.createFrom(runtimeScene.getObjects("URLText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDURLButtonObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLButtonObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDURLTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDURLTextObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDURLButtonObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLButtonObjects1[i].setColor("136;234;108");
}
}}

}


{


{
gdjs.FinalMenuCode.GDPlayAgainButtonObjects1.createFrom(runtimeScene.getObjects("PlayAgainButton"));
gdjs.FinalMenuCode.GDPlayAgainTextObjects1.createFrom(runtimeScene.getObjects("PlayAgainText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainButtonObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainButtonObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDPlayAgainTextObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainButtonObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainButtonObjects1[i].setColor("42;76;185");
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainTextObjects1[i].setColor("255;255;255");
}
}}

}


{


{
gdjs.FinalMenuCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDBackgroundObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDBackgroundObjects1[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDBackgroundObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("URLButton"); }gdjs.FinalMenuCode.eventsList0x69415c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("URLButton"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("PlayAgainButton"); }gdjs.FinalMenuCode.eventsList0x6cc9dc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("PlayAgainButton"); }
}


{



}


}; //End of gdjs.FinalMenuCode.eventsList0xb4be0


gdjs.FinalMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalMenuCode.GDPrincipalPanelObjects1.length = 0;
gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length = 0;
gdjs.FinalMenuCode.GDPrincipalPanelObjects3.length = 0;
gdjs.FinalMenuCode.GDFinalTextObjects1.length = 0;
gdjs.FinalMenuCode.GDFinalTextObjects2.length = 0;
gdjs.FinalMenuCode.GDFinalTextObjects3.length = 0;
gdjs.FinalMenuCode.GDBackgroundObjects1.length = 0;
gdjs.FinalMenuCode.GDBackgroundObjects2.length = 0;
gdjs.FinalMenuCode.GDBackgroundObjects3.length = 0;
gdjs.FinalMenuCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length = 0;
gdjs.FinalMenuCode.GDPlayAgainButtonObjects3.length = 0;
gdjs.FinalMenuCode.GDURLButtonObjects1.length = 0;
gdjs.FinalMenuCode.GDURLButtonObjects2.length = 0;
gdjs.FinalMenuCode.GDURLButtonObjects3.length = 0;
gdjs.FinalMenuCode.GDPlayAgainTextObjects1.length = 0;
gdjs.FinalMenuCode.GDPlayAgainTextObjects2.length = 0;
gdjs.FinalMenuCode.GDPlayAgainTextObjects3.length = 0;
gdjs.FinalMenuCode.GDURLTextObjects1.length = 0;
gdjs.FinalMenuCode.GDURLTextObjects2.length = 0;
gdjs.FinalMenuCode.GDURLTextObjects3.length = 0;
gdjs.FinalMenuCode.GDThanksTextObjects1.length = 0;
gdjs.FinalMenuCode.GDThanksTextObjects2.length = 0;
gdjs.FinalMenuCode.GDThanksTextObjects3.length = 0;

gdjs.FinalMenuCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['FinalMenuCode'] = gdjs.FinalMenuCode;

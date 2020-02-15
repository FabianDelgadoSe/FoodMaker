gdjs.FinalMenuCode = {};
gdjs.FinalMenuCode.GDPrincipalPanelObjects1= [];
gdjs.FinalMenuCode.GDPrincipalPanelObjects2= [];
gdjs.FinalMenuCode.GDPrincipalPanelObjects3= [];
gdjs.FinalMenuCode.GDPrincipalPanelObjects4= [];
gdjs.FinalMenuCode.GDFinalTextObjects1= [];
gdjs.FinalMenuCode.GDFinalTextObjects2= [];
gdjs.FinalMenuCode.GDFinalTextObjects3= [];
gdjs.FinalMenuCode.GDFinalTextObjects4= [];
gdjs.FinalMenuCode.GDBackgroundObjects1= [];
gdjs.FinalMenuCode.GDBackgroundObjects2= [];
gdjs.FinalMenuCode.GDBackgroundObjects3= [];
gdjs.FinalMenuCode.GDBackgroundObjects4= [];
gdjs.FinalMenuCode.GDPlayAgainButtonObjects1= [];
gdjs.FinalMenuCode.GDPlayAgainButtonObjects2= [];
gdjs.FinalMenuCode.GDPlayAgainButtonObjects3= [];
gdjs.FinalMenuCode.GDPlayAgainButtonObjects4= [];
gdjs.FinalMenuCode.GDURLButtonObjects1= [];
gdjs.FinalMenuCode.GDURLButtonObjects2= [];
gdjs.FinalMenuCode.GDURLButtonObjects3= [];
gdjs.FinalMenuCode.GDURLButtonObjects4= [];
gdjs.FinalMenuCode.GDPlayAgainTextObjects1= [];
gdjs.FinalMenuCode.GDPlayAgainTextObjects2= [];
gdjs.FinalMenuCode.GDPlayAgainTextObjects3= [];
gdjs.FinalMenuCode.GDPlayAgainTextObjects4= [];
gdjs.FinalMenuCode.GDURLTextObjects1= [];
gdjs.FinalMenuCode.GDURLTextObjects2= [];
gdjs.FinalMenuCode.GDURLTextObjects3= [];
gdjs.FinalMenuCode.GDURLTextObjects4= [];
gdjs.FinalMenuCode.GDThanksTextObjects1= [];
gdjs.FinalMenuCode.GDThanksTextObjects2= [];
gdjs.FinalMenuCode.GDThanksTextObjects3= [];
gdjs.FinalMenuCode.GDThanksTextObjects4= [];

gdjs.FinalMenuCode.conditionTrue_0 = {val:false};
gdjs.FinalMenuCode.condition0IsTrue_0 = {val:false};
gdjs.FinalMenuCode.condition1IsTrue_0 = {val:false};
gdjs.FinalMenuCode.conditionTrue_1 = {val:false};
gdjs.FinalMenuCode.condition0IsTrue_1 = {val:false};
gdjs.FinalMenuCode.condition1IsTrue_1 = {val:false};


gdjs.FinalMenuCode.eventsList0x777d74 = function(runtimeScene) {

{


{
/* Reuse gdjs.FinalMenuCode.GDBackgroundObjects2 */
{for(var i = 0, len = gdjs.FinalMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDBackgroundObjects2[i].setWidth((gdjs.FinalMenuCode.GDBackgroundObjects2[i].getWidth()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightFactor")));
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDBackgroundObjects2[i].setHeight((gdjs.FinalMenuCode.GDBackgroundObjects2[i].getHeight()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightFactor")));
}
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x777d74
gdjs.FinalMenuCode.eventsList0x760bac = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalMenuCode.conditionTrue_1 = gdjs.FinalMenuCode.condition0IsTrue_0;
gdjs.FinalMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8449908);
}
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
gdjs.FinalMenuCode.GDBackgroundObjects2.createFrom(runtimeScene.getObjects("Background"));
{runtimeScene.getVariables().get("HeightFactor").setNumber(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / (( gdjs.FinalMenuCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDBackgroundObjects2[0].getHeight()));
}
{ //Subevents
gdjs.FinalMenuCode.eventsList0x777d74(runtimeScene);} //End of subevents
}

}


{


{
gdjs.FinalMenuCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDBackgroundObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDBackgroundObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDBackgroundObjects1[i].setY(0);
}
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x760bac
gdjs.FinalMenuCode.eventsList0x6cec1c = function(runtimeScene) {

{


{
gdjs.FinalMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPrincipalPanelObjects2[i].setColor("250;250;250");
}
}}

}


{


{
gdjs.FinalMenuCode.GDURLButtonObjects2.createFrom(runtimeScene.getObjects("URLButton"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDURLButtonObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLButtonObjects2[i].setColor("136;234;108");
}
}}

}


{


{
gdjs.FinalMenuCode.GDURLTextObjects2.createFrom(runtimeScene.getObjects("URLText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDURLTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLTextObjects2[i].setColor("0;0;0");
}
}}

}


{


{
gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.createFrom(runtimeScene.getObjects("PlayAgainButton"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainButtonObjects2[i].setColor("42;76;185");
}
}}

}


{


{
gdjs.FinalMenuCode.GDPlayAgainTextObjects2.createFrom(runtimeScene.getObjects("PlayAgainText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainTextObjects2[i].setColor("255;255;255");
}
}}

}


{


{
gdjs.FinalMenuCode.GDThanksTextObjects2.createFrom(runtimeScene.getObjects("ThanksText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDThanksTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDThanksTextObjects2[i].setColor("0;0;0");
}
}}

}


{


{
gdjs.FinalMenuCode.GDFinalTextObjects1.createFrom(runtimeScene.getObjects("FinalText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDFinalTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDFinalTextObjects1[i].setColor("0;0;0");
}
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x6cec1c
gdjs.FinalMenuCode.eventsList0x7a29cc = function(runtimeScene) {

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


}; //End of gdjs.FinalMenuCode.eventsList0x7a29cc
gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDURLButtonObjects2Objects = Hashtable.newFrom({"URLButton": gdjs.FinalMenuCode.GDURLButtonObjects2});gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDURLButtonObjects1Objects = Hashtable.newFrom({"URLButton": gdjs.FinalMenuCode.GDURLButtonObjects1});gdjs.FinalMenuCode.eventsList0x729b24 = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://withkoji.com/", runtimeScene);
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x729b24
gdjs.FinalMenuCode.eventsList0x7a3b6c = function(runtimeScene) {

{

gdjs.FinalMenuCode.GDURLButtonObjects2.createFrom(runtimeScene.getObjects("URLButton"));

gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDURLButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalMenuCode.GDURLButtonObjects2 */
gdjs.FinalMenuCode.GDURLTextObjects2.createFrom(runtimeScene.getObjects("URLText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDURLButtonObjects2.length ;i < len;++i) {
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
gdjs.FinalMenuCode.eventsList0x729b24(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalMenuCode.eventsList0x7a3b6c
gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDPlayAgainButtonObjects2Objects = Hashtable.newFrom({"PlayAgainButton": gdjs.FinalMenuCode.GDPlayAgainButtonObjects2});gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDPlayAgainButtonObjects1Objects = Hashtable.newFrom({"PlayAgainButton": gdjs.FinalMenuCode.GDPlayAgainButtonObjects1});gdjs.FinalMenuCode.eventsList0x804fac = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x804fac
gdjs.FinalMenuCode.eventsList0x72970c = function(runtimeScene) {

{

gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.createFrom(runtimeScene.getObjects("PlayAgainButton"));

gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalMenuCode.mapOfGDgdjs_46FinalMenuCode_46GDPlayAgainButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalMenuCode.GDPlayAgainButtonObjects2 */
gdjs.FinalMenuCode.GDPlayAgainTextObjects2.createFrom(runtimeScene.getObjects("PlayAgainText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length ;i < len;++i) {
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
gdjs.FinalMenuCode.eventsList0x804fac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalMenuCode.eventsList0x72970c
gdjs.FinalMenuCode.eventsList0x7c3e1c = function(runtimeScene) {

{


{
gdjs.FinalMenuCode.GDURLButtonObjects2.createFrom(runtimeScene.getObjects("URLButton"));
gdjs.FinalMenuCode.GDURLTextObjects2.createFrom(runtimeScene.getObjects("URLText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDURLButtonObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLButtonObjects2[i].setWidth((( gdjs.FinalMenuCode.GDURLTextObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDURLTextObjects2[0].getWidth()) * 1.30);
}
}}

}


{


{
gdjs.FinalMenuCode.GDPlayAgainButtonObjects1.createFrom(runtimeScene.getObjects("PlayAgainButton"));
gdjs.FinalMenuCode.GDPlayAgainTextObjects1.createFrom(runtimeScene.getObjects("PlayAgainText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainButtonObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainButtonObjects1[i].setWidth((( gdjs.FinalMenuCode.GDPlayAgainTextObjects1.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPlayAgainTextObjects1[0].getWidth()) * 1.30);
}
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x7c3e1c
gdjs.FinalMenuCode.eventsList0x6c8734 = function(runtimeScene) {

{


{
gdjs.FinalMenuCode.GDPrincipalPanelObjects3.createFrom(gdjs.FinalMenuCode.GDPrincipalPanelObjects2);

{for(var i = 0, len = gdjs.FinalMenuCode.GDPrincipalPanelObjects3.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPrincipalPanelObjects3[i].setHeight((gdjs.FinalMenuCode.GDPrincipalPanelObjects3[i].getWidth()) * 0.6);
}
}}

}


{


{
/* Reuse gdjs.FinalMenuCode.GDPrincipalPanelObjects2 */
{for(var i = 0, len = gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPrincipalPanelObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDPrincipalPanelObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPrincipalPanelObjects2[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 0.25);
}
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x6c8734
gdjs.FinalMenuCode.eventsList0x75f294 = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("WidthPanel")) >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.85;
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalMenuCode.GDPrincipalPanelObjects2 */
{for(var i = 0, len = gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPrincipalPanelObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.9);
}
}
{ //Subevents
gdjs.FinalMenuCode.eventsList0x6c8734(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalMenuCode.eventsList0x75f294
gdjs.FinalMenuCode.eventsList0x7833b4 = function(runtimeScene) {

{


{
/* Reuse gdjs.FinalMenuCode.GDURLButtonObjects2 */
gdjs.FinalMenuCode.GDURLTextObjects2.createFrom(runtimeScene.getObjects("URLText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDURLTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLTextObjects2[i].setY((( gdjs.FinalMenuCode.GDURLButtonObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDURLButtonObjects2[0].getPointY("")) - ((( gdjs.FinalMenuCode.GDURLButtonObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDURLButtonObjects2[0].getHeight()) / 2) + (((( gdjs.FinalMenuCode.GDURLButtonObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDURLButtonObjects2[0].getHeight()) - (gdjs.FinalMenuCode.GDURLTextObjects2[i].getHeight())) / 2));
}
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x7833b4
gdjs.FinalMenuCode.eventsList0x6c2d24 = function(runtimeScene) {

{


{
/* Reuse gdjs.FinalMenuCode.GDPlayAgainButtonObjects2 */
gdjs.FinalMenuCode.GDPlayAgainTextObjects2.createFrom(runtimeScene.getObjects("PlayAgainText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainTextObjects2[i].setY((( gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPlayAgainButtonObjects2[0].getPointY("")) - ((( gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPlayAgainButtonObjects2[0].getHeight()) / 2) + (((( gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPlayAgainButtonObjects2[0].getHeight()) - (gdjs.FinalMenuCode.GDPlayAgainTextObjects2[i].getHeight())) / 2));
}
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x6c2d24
gdjs.FinalMenuCode.eventsList0x6b36f4 = function(runtimeScene) {

{


{
/* Reuse gdjs.FinalMenuCode.GDThanksTextObjects1 */
{for(var i = 0, len = gdjs.FinalMenuCode.GDThanksTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDThanksTextObjects1[i].setScale(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ThanksSize")));
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDThanksTextObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDThanksTextObjects1[i].setScale(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ThanksSize")));
}
}}

}


}; //End of gdjs.FinalMenuCode.eventsList0x6b36f4
gdjs.FinalMenuCode.eventsList0x78088c = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalMenuCode.conditionTrue_1 = gdjs.FinalMenuCode.condition0IsTrue_0;
gdjs.FinalMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7874452);
}
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
gdjs.FinalMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{runtimeScene.getVariables().get("WidthPanel").setNumber((( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getWidth()));
}
{ //Subevents
gdjs.FinalMenuCode.eventsList0x75f294(runtimeScene);} //End of subevents
}

}


{


{
gdjs.FinalMenuCode.GDURLButtonObjects2.createFrom(runtimeScene.getObjects("URLButton"));
{runtimeScene.getVariables().get("URLButtonSize").setNumber((( gdjs.FinalMenuCode.GDURLButtonObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDURLButtonObjects2[0].getWidth()));
}{runtimeScene.getVariables().get("URLButtonSize").setNumber((( gdjs.FinalMenuCode.GDURLButtonObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDURLButtonObjects2[0].getWidth()));
}}

}


{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalMenuCode.conditionTrue_1 = gdjs.FinalMenuCode.condition0IsTrue_0;
gdjs.FinalMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7132628);
}
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
gdjs.FinalMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
gdjs.FinalMenuCode.GDThanksTextObjects2.createFrom(runtimeScene.getObjects("ThanksText"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDThanksTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDThanksTextObjects2[i].setY((( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getPointY("")) + ((( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getHeight()) * 0.15));
}
}}

}


{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalMenuCode.conditionTrue_1 = gdjs.FinalMenuCode.condition0IsTrue_0;
gdjs.FinalMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7497988);
}
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
gdjs.FinalMenuCode.GDFinalTextObjects2.createFrom(runtimeScene.getObjects("FinalText"));
gdjs.FinalMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDFinalTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDFinalTextObjects2[i].setY((( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getPointY("")) + ((( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getHeight()) * 0.4));
}
}}

}


{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalMenuCode.conditionTrue_1 = gdjs.FinalMenuCode.condition0IsTrue_0;
gdjs.FinalMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7130076);
}
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
gdjs.FinalMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
gdjs.FinalMenuCode.GDURLButtonObjects2.createFrom(runtimeScene.getObjects("URLButton"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDURLButtonObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDURLButtonObjects2[i].setY((( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getPointY("")) + ((( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getHeight()) * 0.85));
}
}
{ //Subevents
gdjs.FinalMenuCode.eventsList0x7833b4(runtimeScene);} //End of subevents
}

}


{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalMenuCode.conditionTrue_1 = gdjs.FinalMenuCode.condition0IsTrue_0;
gdjs.FinalMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7004260);
}
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.createFrom(runtimeScene.getObjects("PlayAgainButton"));
gdjs.FinalMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPlayAgainButtonObjects2[i].setY(((( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getPointY("")) + (( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getHeight())) + (gdjs.FinalMenuCode.GDPlayAgainButtonObjects2[i].getHeight()) * 1.5);
}
}
{ //Subevents
gdjs.FinalMenuCode.eventsList0x6c2d24(runtimeScene);} //End of subevents
}

}


{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalMenuCode.conditionTrue_1 = gdjs.FinalMenuCode.condition0IsTrue_0;
gdjs.FinalMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7713684);
}
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
gdjs.FinalMenuCode.GDFinalTextObjects2.createFrom(runtimeScene.getObjects("FinalText"));
gdjs.FinalMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDFinalTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDFinalTextObjects2[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDFinalTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDFinalTextObjects2[i].setWrappingWidth((( gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects2[0].getWidth()));
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDFinalTextObjects2.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDFinalTextObjects2[i].setTextAlignment("center");
}
}}

}


{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalMenuCode.conditionTrue_1 = gdjs.FinalMenuCode.condition0IsTrue_0;
gdjs.FinalMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7737116);
}
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {
gdjs.FinalMenuCode.GDPrincipalPanelObjects1.createFrom(runtimeScene.getObjects("PrincipalPanel"));
gdjs.FinalMenuCode.GDThanksTextObjects1.createFrom(runtimeScene.getObjects("ThanksText"));
{runtimeScene.getVariables().get("ThanksSize").setNumber(((( gdjs.FinalMenuCode.GDPrincipalPanelObjects1.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDPrincipalPanelObjects1[0].getWidth()) * 0.9) / (( gdjs.FinalMenuCode.GDThanksTextObjects1.length === 0 ) ? 0 :gdjs.FinalMenuCode.GDThanksTextObjects1[0].getWidth()));
}
{ //Subevents
gdjs.FinalMenuCode.eventsList0x6b36f4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalMenuCode.eventsList0x78088c
gdjs.FinalMenuCode.eventsList0x6ade4c = function(runtimeScene) {

{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinalMenuCode.eventsList0x78088c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalMenuCode.eventsList0x6ade4c
gdjs.FinalMenuCode.eventsList0xb4be0 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.FinalMenuCode.eventsList0x760bac(runtimeScene);} //End of subevents
}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Colors"); }gdjs.FinalMenuCode.eventsList0x6cec1c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Colors"); }
}


{


gdjs.FinalMenuCode.condition0IsTrue_0.val = false;
{
gdjs.FinalMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FinalMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinalMenuCode.eventsList0x7a29cc(runtimeScene);} //End of subevents
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
}}

}


{



}


{


{
gdjs.FinalMenuCode.GDPrincipalPanelObjects1.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.FinalMenuCode.GDPrincipalPanelObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPrincipalPanelObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.FinalMenuCode.GDPrincipalPanelObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.FinalMenuCode.GDPrincipalPanelObjects1.length ;i < len;++i) {
    gdjs.FinalMenuCode.GDPrincipalPanelObjects1[i].setY(185);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("URLButton"); }gdjs.FinalMenuCode.eventsList0x7a3b6c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("URLButton"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("PlayAgainButton"); }gdjs.FinalMenuCode.eventsList0x72970c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("PlayAgainButton"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("ButtonSizes"); }gdjs.FinalMenuCode.eventsList0x7c3e1c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("ButtonSizes"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("CardSize"); }gdjs.FinalMenuCode.eventsList0x6ade4c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("CardSize"); }
}


}; //End of gdjs.FinalMenuCode.eventsList0xb4be0


gdjs.FinalMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalMenuCode.GDPrincipalPanelObjects1.length = 0;
gdjs.FinalMenuCode.GDPrincipalPanelObjects2.length = 0;
gdjs.FinalMenuCode.GDPrincipalPanelObjects3.length = 0;
gdjs.FinalMenuCode.GDPrincipalPanelObjects4.length = 0;
gdjs.FinalMenuCode.GDFinalTextObjects1.length = 0;
gdjs.FinalMenuCode.GDFinalTextObjects2.length = 0;
gdjs.FinalMenuCode.GDFinalTextObjects3.length = 0;
gdjs.FinalMenuCode.GDFinalTextObjects4.length = 0;
gdjs.FinalMenuCode.GDBackgroundObjects1.length = 0;
gdjs.FinalMenuCode.GDBackgroundObjects2.length = 0;
gdjs.FinalMenuCode.GDBackgroundObjects3.length = 0;
gdjs.FinalMenuCode.GDBackgroundObjects4.length = 0;
gdjs.FinalMenuCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.FinalMenuCode.GDPlayAgainButtonObjects2.length = 0;
gdjs.FinalMenuCode.GDPlayAgainButtonObjects3.length = 0;
gdjs.FinalMenuCode.GDPlayAgainButtonObjects4.length = 0;
gdjs.FinalMenuCode.GDURLButtonObjects1.length = 0;
gdjs.FinalMenuCode.GDURLButtonObjects2.length = 0;
gdjs.FinalMenuCode.GDURLButtonObjects3.length = 0;
gdjs.FinalMenuCode.GDURLButtonObjects4.length = 0;
gdjs.FinalMenuCode.GDPlayAgainTextObjects1.length = 0;
gdjs.FinalMenuCode.GDPlayAgainTextObjects2.length = 0;
gdjs.FinalMenuCode.GDPlayAgainTextObjects3.length = 0;
gdjs.FinalMenuCode.GDPlayAgainTextObjects4.length = 0;
gdjs.FinalMenuCode.GDURLTextObjects1.length = 0;
gdjs.FinalMenuCode.GDURLTextObjects2.length = 0;
gdjs.FinalMenuCode.GDURLTextObjects3.length = 0;
gdjs.FinalMenuCode.GDURLTextObjects4.length = 0;
gdjs.FinalMenuCode.GDThanksTextObjects1.length = 0;
gdjs.FinalMenuCode.GDThanksTextObjects2.length = 0;
gdjs.FinalMenuCode.GDThanksTextObjects3.length = 0;
gdjs.FinalMenuCode.GDThanksTextObjects4.length = 0;

gdjs.FinalMenuCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['FinalMenuCode'] = gdjs.FinalMenuCode;

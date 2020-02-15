gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDYourBrandLogoObjects1= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects2= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects3= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects4= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects5= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects6= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects3= [];
gdjs.MainMenuCode.GDPlayButtonObjects4= [];
gdjs.MainMenuCode.GDPlayButtonObjects5= [];
gdjs.MainMenuCode.GDPlayButtonObjects6= [];
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDBackgroundObjects3= [];
gdjs.MainMenuCode.GDBackgroundObjects4= [];
gdjs.MainMenuCode.GDBackgroundObjects5= [];
gdjs.MainMenuCode.GDBackgroundObjects6= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects1= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects2= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects3= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects4= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects5= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects6= [];
gdjs.MainMenuCode.GDGameTextObjects1= [];
gdjs.MainMenuCode.GDGameTextObjects2= [];
gdjs.MainMenuCode.GDGameTextObjects3= [];
gdjs.MainMenuCode.GDGameTextObjects4= [];
gdjs.MainMenuCode.GDGameTextObjects5= [];
gdjs.MainMenuCode.GDGameTextObjects6= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects1= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects2= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects3= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects4= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects5= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects6= [];
gdjs.MainMenuCode.GDDebugObjects1= [];
gdjs.MainMenuCode.GDDebugObjects2= [];
gdjs.MainMenuCode.GDDebugObjects3= [];
gdjs.MainMenuCode.GDDebugObjects4= [];
gdjs.MainMenuCode.GDDebugObjects5= [];
gdjs.MainMenuCode.GDDebugObjects6= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};
gdjs.MainMenuCode.conditionTrue_1 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_1 = {val:false};


gdjs.MainMenuCode.eventsList0x778364 = function(runtimeScene) {

{


{
gdjs.MainMenuCode.GDBackgroundObjects4.createFrom(runtimeScene.getObjects("Background"));
{runtimeScene.getVariables().get("HeightFactor").setNumber(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / (( gdjs.MainMenuCode.GDBackgroundObjects4.length === 0 ) ? 0 :gdjs.MainMenuCode.GDBackgroundObjects4[0].getHeight()));
}}

}


{


{
gdjs.MainMenuCode.GDBackgroundObjects3.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects3[i].setWidth((gdjs.MainMenuCode.GDBackgroundObjects3[i].getWidth()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightFactor")));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects3[i].setHeight((gdjs.MainMenuCode.GDBackgroundObjects3[i].getHeight()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightFactor")));
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x778364
gdjs.MainMenuCode.eventsList0x777d74 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7832516);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("SceneWidth").setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}{runtimeScene.getVariables().get("SceneHeight").setNumber(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
{ //Subevents
gdjs.MainMenuCode.eventsList0x778364(runtimeScene);} //End of subevents
}

}


{


{
gdjs.MainMenuCode.GDBackgroundObjects2.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDBackgroundObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setY(0);
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x777d74
gdjs.MainMenuCode.eventsList0x77903c = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7835964);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDYourBrandLogoObjects2.createFrom(runtimeScene.getObjects("YourBrandLogo"));
{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects2[i].setHeight(250);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects2[i].setWidth(250);
}
}}

}


{


{
gdjs.MainMenuCode.GDYourBrandLogoObjects1.createFrom(runtimeScene.getObjects("YourBrandLogo"));
{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDYourBrandLogoObjects1[i].getWidth()) / 2);
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x77903c
gdjs.MainMenuCode.eventsList0x8003bc = function(runtimeScene) {

{


{

{ //Subevents
gdjs.MainMenuCode.eventsList0x777d74(runtimeScene);} //End of subevents
}

}


{


{
gdjs.MainMenuCode.GDGameTextObjects2.createFrom(runtimeScene.getObjects("GameText"));
gdjs.MainMenuCode.GDPlayButtonObjects2.createFrom(runtimeScene.getObjects("PlayButton"));
gdjs.MainMenuCode.GDPlayButtonTextObjects2.createFrom(runtimeScene.getObjects("PlayButtonText"));
gdjs.MainMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGameTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGameTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDGameTextObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPrincipalPanelObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


{

{ //Subevents
gdjs.MainMenuCode.eventsList0x77903c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainMenuCode.eventsList0x8003bc
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects2});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});gdjs.MainMenuCode.eventsList0x7798b4 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x7798b4
gdjs.MainMenuCode.eventsList0x6b8b7c = function(runtimeScene) {

{

gdjs.MainMenuCode.GDPlayButtonObjects2.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects2 */
gdjs.MainMenuCode.GDPlayButtonTextObjects2.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].setScale(1.3);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setCharacterSize(30);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].getWidth()) / 2);
}
}}

}


{

gdjs.MainMenuCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects1 */
gdjs.MainMenuCode.GDPlayButtonTextObjects1.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects1[i].setScale(1.5);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects1[i].setCharacterSize(30 * 1.2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPlayButtonTextObjects1[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0x7798b4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainMenuCode.eventsList0x6b8b7c
gdjs.MainMenuCode.eventsList0x69d29c = function(runtimeScene) {

{


{
gdjs.MainMenuCode.GDPlayButtonObjects3.createFrom(runtimeScene.getObjects("PlayButton"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects3[i].setColor("0;0;0");
}
}}

}


{


{
gdjs.MainMenuCode.GDPlayButtonTextObjects3.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects3[i].setColor("250;250;250");
}
}}

}


{


{
gdjs.MainMenuCode.GDGameTextObjects3.createFrom(runtimeScene.getObjects("GameText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDGameTextObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGameTextObjects3[i].setColor("0;0;0");
}
}}

}


{


{
gdjs.MainMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects2[i].setColor("255;255;255");
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x69d29c
gdjs.MainMenuCode.eventsList0x7d5f04 = function(runtimeScene) {

{


{
gdjs.MainMenuCode.GDPlayButtonObjects3.createFrom(runtimeScene.getObjects("PlayButton"));
gdjs.MainMenuCode.GDPlayButtonTextObjects3.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects3[i].setWidth((( gdjs.MainMenuCode.GDPlayButtonTextObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonTextObjects3[0].getWidth()) * 1.30);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects3[i].setHeight((( gdjs.MainMenuCode.GDPlayButtonTextObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonTextObjects3[0].getHeight()) * 1.30);
}
}}

}


{


{
}

}


}; //End of gdjs.MainMenuCode.eventsList0x7d5f04
gdjs.MainMenuCode.eventsList0x77a934 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightPanel")) >= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 0.85;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDPrincipalPanelObjects5.createFrom(gdjs.MainMenuCode.GDPrincipalPanelObjects4);

{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects5.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects5[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 0.85);
}
}}

}


{


{
/* Reuse gdjs.MainMenuCode.GDPrincipalPanelObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects4[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPrincipalPanelObjects4[i].getHeight()) / 2);
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x77a934
gdjs.MainMenuCode.eventsList0x77b134 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ButtonPlaySize")) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameTittleSize"));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDPlayButtonObjects5.createFrom(runtimeScene.getObjects("PlayButton"));
gdjs.MainMenuCode.GDPrincipalPanelObjects5.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects5.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects5[i].setWidth((( gdjs.MainMenuCode.GDPlayButtonObjects5.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonObjects5[0].getWidth()) * 1.30);
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ButtonPlaySize")) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameTittleSize")));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDGameTextObjects5.createFrom(runtimeScene.getObjects("GameText"));
gdjs.MainMenuCode.GDPrincipalPanelObjects5.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects5.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects5[i].setWidth((( gdjs.MainMenuCode.GDGameTextObjects5.length === 0 ) ? 0 :gdjs.MainMenuCode.GDGameTextObjects5[0].getWidth()) * 1.30);
}
}}

}


{


{
}

}


}; //End of gdjs.MainMenuCode.eventsList0x77b134
gdjs.MainMenuCode.eventsList0x77b954 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("WidthPanel")) >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.7;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDPrincipalPanelObjects4.createFrom(gdjs.MainMenuCode.GDPrincipalPanelObjects3);

{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects4[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.7);
}
}}

}


{


{
/* Reuse gdjs.MainMenuCode.GDPrincipalPanelObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects3[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPrincipalPanelObjects3[i].getWidth()) / 2);
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x77b954
gdjs.MainMenuCode.eventsList0x77a824 = function(runtimeScene) {

{


{
gdjs.MainMenuCode.GDPrincipalPanelObjects4.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{runtimeScene.getVariables().get("HeightPanel").setNumber((( gdjs.MainMenuCode.GDPrincipalPanelObjects4.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPrincipalPanelObjects4[0].getHeight()));
}
{ //Subevents
gdjs.MainMenuCode.eventsList0x77a934(runtimeScene);} //End of subevents
}

}


{


{
gdjs.MainMenuCode.GDGameTextObjects4.createFrom(runtimeScene.getObjects("GameText"));
gdjs.MainMenuCode.GDPlayButtonObjects4.createFrom(runtimeScene.getObjects("PlayButton"));
{runtimeScene.getVariables().get("ButtonPlaySize").setNumber((( gdjs.MainMenuCode.GDPlayButtonObjects4.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonObjects4[0].getWidth()));
}{runtimeScene.getVariables().get("GameTittleSize").setNumber((( gdjs.MainMenuCode.GDGameTextObjects4.length === 0 ) ? 0 :gdjs.MainMenuCode.GDGameTextObjects4[0].getWidth()));
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.condition0IsTrue_1.val = false;
gdjs.MainMenuCode.condition1IsTrue_1.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameTittleSize")) > 250;
if( gdjs.MainMenuCode.condition0IsTrue_1.val ) {
    gdjs.MainMenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MainMenuCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ButtonPlaySize")) > 250;
if( gdjs.MainMenuCode.condition1IsTrue_1.val ) {
    gdjs.MainMenuCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0x77b134(runtimeScene);} //End of subevents
}

}


{


{
gdjs.MainMenuCode.GDPrincipalPanelObjects3.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{runtimeScene.getVariables().get("WidthPanel").setNumber((( gdjs.MainMenuCode.GDPrincipalPanelObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPrincipalPanelObjects3[0].getWidth()));
}
{ //Subevents
gdjs.MainMenuCode.eventsList0x77b954(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainMenuCode.eventsList0x77a824
gdjs.MainMenuCode.eventsList0x80ac5c = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0x77a824(runtimeScene);} //End of subevents
}

}


{



}


}; //End of gdjs.MainMenuCode.eventsList0x80ac5c
gdjs.MainMenuCode.eventsList0x6b5264 = function(runtimeScene) {

{


{
gdjs.MainMenuCode.GDPrincipalPanelObjects3.createFrom(runtimeScene.getObjects("PrincipalPanel"));
gdjs.MainMenuCode.GDYourBrandLogoObjects3.createFrom(runtimeScene.getObjects("YourBrandLogo"));
{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects3[i].setWidth((( gdjs.MainMenuCode.GDPrincipalPanelObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPrincipalPanelObjects3[0].getWidth()) * 0.75);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects3[i].setHeight((gdjs.MainMenuCode.GDYourBrandLogoObjects3[i].getWidth()));
}
}}

}


{


{
gdjs.MainMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
gdjs.MainMenuCode.GDYourBrandLogoObjects2.createFrom(runtimeScene.getObjects("YourBrandLogo"));
{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects2[i].setY((( gdjs.MainMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPrincipalPanelObjects2[0].getPointY("")) + (((( gdjs.MainMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPrincipalPanelObjects2[0].getWidth()) - (gdjs.MainMenuCode.GDYourBrandLogoObjects2[i].getWidth())) / 2));
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x6b5264
gdjs.MainMenuCode.eventsList0x7c2334 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7849468);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDPlayButtonObjects2.createFrom(runtimeScene.getObjects("PlayButton"));
gdjs.MainMenuCode.GDPlayButtonTextObjects2.createFrom(runtimeScene.getObjects("PlayButtonText"));
gdjs.MainMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].setY(((( gdjs.MainMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPrincipalPanelObjects2[0].getPointY("")) + (( gdjs.MainMenuCode.GDPrincipalPanelObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPrincipalPanelObjects2[0].getHeight())) - ((gdjs.MainMenuCode.GDPlayButtonObjects2[i].getHeight()) * 2));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setY((( gdjs.MainMenuCode.GDPlayButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonObjects2[0].getPointY("")) - ((( gdjs.MainMenuCode.GDPlayButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonObjects2[0].getHeight()) / 2) + (((( gdjs.MainMenuCode.GDPlayButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonObjects2[0].getHeight()) - (gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].getHeight())) / 2));
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7850164);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDGameTextObjects1.createFrom(runtimeScene.getObjects("GameText"));
gdjs.MainMenuCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));
{for(var i = 0, len = gdjs.MainMenuCode.GDGameTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGameTextObjects1[i].setY((( gdjs.MainMenuCode.GDPlayButtonObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonObjects1[0].getPointY("")) - ((gdjs.MainMenuCode.GDGameTextObjects1[i].getHeight()) * 3));
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x7c2334
gdjs.MainMenuCode.eventsList0x80a97c = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Colors"); }gdjs.MainMenuCode.eventsList0x69d29c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Colors"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("ButtonSize"); }gdjs.MainMenuCode.eventsList0x7d5f04(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("ButtonSize"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("CardSize"); }gdjs.MainMenuCode.eventsList0x80ac5c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("CardSize"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("YourBrandLogoSize&Position"); }gdjs.MainMenuCode.eventsList0x6b5264(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("YourBrandLogoSize&Position"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("PlayButtonSize&Position"); }gdjs.MainMenuCode.eventsList0x7c2334(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("PlayButtonSize&Position"); }
}


}; //End of gdjs.MainMenuCode.eventsList0x80a97c
gdjs.MainMenuCode.eventsList0xb4be0 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Set Scene"); }gdjs.MainMenuCode.eventsList0x8003bc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Set Scene"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("PlayButton"); }gdjs.MainMenuCode.eventsList0x6b8b7c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("PlayButton"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("ResponsiveUI"); }gdjs.MainMenuCode.eventsList0x80a97c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("ResponsiveUI"); }
}


}; //End of gdjs.MainMenuCode.eventsList0xb4be0


gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDYourBrandLogoObjects1.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects2.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects3.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects4.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects5.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects6.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects5.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects6.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects5.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects6.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects1.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects2.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects3.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects4.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects5.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects6.length = 0;
gdjs.MainMenuCode.GDGameTextObjects1.length = 0;
gdjs.MainMenuCode.GDGameTextObjects2.length = 0;
gdjs.MainMenuCode.GDGameTextObjects3.length = 0;
gdjs.MainMenuCode.GDGameTextObjects4.length = 0;
gdjs.MainMenuCode.GDGameTextObjects5.length = 0;
gdjs.MainMenuCode.GDGameTextObjects6.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects5.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects6.length = 0;
gdjs.MainMenuCode.GDDebugObjects1.length = 0;
gdjs.MainMenuCode.GDDebugObjects2.length = 0;
gdjs.MainMenuCode.GDDebugObjects3.length = 0;
gdjs.MainMenuCode.GDDebugObjects4.length = 0;
gdjs.MainMenuCode.GDDebugObjects5.length = 0;
gdjs.MainMenuCode.GDDebugObjects6.length = 0;

gdjs.MainMenuCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['MainMenuCode'] = gdjs.MainMenuCode;

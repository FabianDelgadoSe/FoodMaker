gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDYourBrandLogoObjects1= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects2= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects3= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects4= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects3= [];
gdjs.MainMenuCode.GDPlayButtonObjects4= [];
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDBackgroundObjects3= [];
gdjs.MainMenuCode.GDBackgroundObjects4= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects1= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects2= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects3= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects4= [];
gdjs.MainMenuCode.GDGameTextObjects1= [];
gdjs.MainMenuCode.GDGameTextObjects2= [];
gdjs.MainMenuCode.GDGameTextObjects3= [];
gdjs.MainMenuCode.GDGameTextObjects4= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects1= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects2= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects3= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects4= [];
gdjs.MainMenuCode.GDDebugObjects1= [];
gdjs.MainMenuCode.GDDebugObjects2= [];
gdjs.MainMenuCode.GDDebugObjects3= [];
gdjs.MainMenuCode.GDDebugObjects4= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};
gdjs.MainMenuCode.conditionTrue_1 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_1 = {val:false};


gdjs.MainMenuCode.eventsList0x740aa4 = function(runtimeScene) {

{


{
gdjs.MainMenuCode.GDBackgroundObjects2.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setX(0);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setY(0);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{


{
gdjs.MainMenuCode.GDGameTextObjects2.createFrom(runtimeScene.getObjects("GameText"));
gdjs.MainMenuCode.GDPlayButtonTextObjects2.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGameTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGameTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDGameTextObjects2[i].getWidth()) / 2);
}
}}

}


{


{
gdjs.MainMenuCode.GDYourBrandLogoObjects1.createFrom(runtimeScene.getObjects("YourBrandLogo"));
{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects1[i].setWidth(300);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects1[i].setHeight(300);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDYourBrandLogoObjects1[i].getWidth()) / 2);
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x740aa4
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects2});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});gdjs.MainMenuCode.eventsList0x6ce784 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x6ce784
gdjs.MainMenuCode.eventsList0x6d844c = function(runtimeScene) {

{

gdjs.MainMenuCode.GDPlayButtonObjects2.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects2 */
gdjs.MainMenuCode.GDPlayButtonTextObjects2.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].setScale(1.4);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setCharacterSize(35);
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
    gdjs.MainMenuCode.GDPlayButtonObjects1[i].setScale(1.6);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects1[i].setCharacterSize(35 * 1.2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPlayButtonTextObjects1[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0x6ce784(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainMenuCode.eventsList0x6d844c
gdjs.MainMenuCode.eventsList0x6cedd4 = function(runtimeScene) {

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
    gdjs.MainMenuCode.GDPrincipalPanelObjects2[i].setColor("0;0;0");
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x6cedd4
gdjs.MainMenuCode.eventsList0x6c6554 = function(runtimeScene) {

{


{
gdjs.MainMenuCode.GDPlayButtonObjects3.createFrom(runtimeScene.getObjects("PlayButton"));
gdjs.MainMenuCode.GDPlayButtonTextObjects3.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects3[i].setWidth((( gdjs.MainMenuCode.GDPlayButtonTextObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonTextObjects3[0].getWidth()) * 1.30);
}
}}

}


{


{
}

}


}; //End of gdjs.MainMenuCode.eventsList0x6c6554
gdjs.MainMenuCode.eventsList0x6c6cc4 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ButtonPlaySize")) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameTittleSize"));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDPlayButtonObjects3.createFrom(runtimeScene.getObjects("PlayButton"));
gdjs.MainMenuCode.GDPrincipalPanelObjects3.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects3[i].setWidth((( gdjs.MainMenuCode.GDPlayButtonObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonObjects3[0].getWidth()) * 1.30);
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ButtonPlaySize")) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameTittleSize")));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDGameTextObjects2.createFrom(runtimeScene.getObjects("GameText"));
gdjs.MainMenuCode.GDPrincipalPanelObjects2.createFrom(runtimeScene.getObjects("PrincipalPanel"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPrincipalPanelObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPrincipalPanelObjects2[i].setWidth((( gdjs.MainMenuCode.GDGameTextObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDGameTextObjects2[0].getWidth()) * 1.30);
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x6c6cc4
gdjs.MainMenuCode.eventsList0x6c6944 = function(runtimeScene) {

{


{
gdjs.MainMenuCode.GDGameTextObjects3.createFrom(runtimeScene.getObjects("GameText"));
gdjs.MainMenuCode.GDPlayButtonObjects3.createFrom(runtimeScene.getObjects("PlayButton"));
{runtimeScene.getVariables().get("ButtonPlaySize").setNumber((( gdjs.MainMenuCode.GDPlayButtonObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDPlayButtonObjects3[0].getWidth()));
}{runtimeScene.getVariables().get("GameTittleSize").setNumber((( gdjs.MainMenuCode.GDGameTextObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDGameTextObjects3[0].getWidth()));
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.condition0IsTrue_1.val = false;
gdjs.MainMenuCode.condition1IsTrue_1.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameTittleSize")) > 300;
if( gdjs.MainMenuCode.condition0IsTrue_1.val ) {
    gdjs.MainMenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MainMenuCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ButtonPlaySize")) > 300;
if( gdjs.MainMenuCode.condition1IsTrue_1.val ) {
    gdjs.MainMenuCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0x6c6cc4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainMenuCode.eventsList0x6c6944
gdjs.MainMenuCode.eventsList0x6c6874 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0x6c6944(runtimeScene);} //End of subevents
}

}


{



}


}; //End of gdjs.MainMenuCode.eventsList0x6c6874
gdjs.MainMenuCode.eventsList0x6ced24 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Colors"); }gdjs.MainMenuCode.eventsList0x6cedd4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Colors"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("ButtonSize"); }gdjs.MainMenuCode.eventsList0x6c6554(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("ButtonSize"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("CardSize"); }gdjs.MainMenuCode.eventsList0x6c6874(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("CardSize"); }
}


}; //End of gdjs.MainMenuCode.eventsList0x6ced24
gdjs.MainMenuCode.eventsList0xb4be0 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Set Scene"); }gdjs.MainMenuCode.eventsList0x740aa4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Set Scene"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("PlayButton"); }gdjs.MainMenuCode.eventsList0x6d844c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("PlayButton"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("ResponsiveUI"); }gdjs.MainMenuCode.eventsList0x6ced24(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("ResponsiveUI"); }
}


}; //End of gdjs.MainMenuCode.eventsList0xb4be0


gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDYourBrandLogoObjects1.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects2.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects3.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects1.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects2.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects3.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects4.length = 0;
gdjs.MainMenuCode.GDGameTextObjects1.length = 0;
gdjs.MainMenuCode.GDGameTextObjects2.length = 0;
gdjs.MainMenuCode.GDGameTextObjects3.length = 0;
gdjs.MainMenuCode.GDGameTextObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects4.length = 0;
gdjs.MainMenuCode.GDDebugObjects1.length = 0;
gdjs.MainMenuCode.GDDebugObjects2.length = 0;
gdjs.MainMenuCode.GDDebugObjects3.length = 0;
gdjs.MainMenuCode.GDDebugObjects4.length = 0;

gdjs.MainMenuCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['MainMenuCode'] = gdjs.MainMenuCode;

gdjs.InstructionsCode = {};
gdjs.InstructionsCode.repeatCount3 = 0;

gdjs.InstructionsCode.repeatIndex3 = 0;

gdjs.InstructionsCode.GDBackgroundObjects1= [];
gdjs.InstructionsCode.GDBackgroundObjects2= [];
gdjs.InstructionsCode.GDBackgroundObjects3= [];
gdjs.InstructionsCode.GDInstructionsObjects1= [];
gdjs.InstructionsCode.GDInstructionsObjects2= [];
gdjs.InstructionsCode.GDInstructionsObjects3= [];
gdjs.InstructionsCode.GDStartTimerObjects1= [];
gdjs.InstructionsCode.GDStartTimerObjects2= [];
gdjs.InstructionsCode.GDStartTimerObjects3= [];
gdjs.InstructionsCode.GDContinueObjects1= [];
gdjs.InstructionsCode.GDContinueObjects2= [];
gdjs.InstructionsCode.GDContinueObjects3= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition3IsTrue_0 = {val:false};
gdjs.InstructionsCode.conditionTrue_1 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition3IsTrue_1 = {val:false};


gdjs.InstructionsCode.eventsList0x6d8704 = function(runtimeScene) {

}; //End of gdjs.InstructionsCode.eventsList0x6d8704
gdjs.InstructionsCode.eventsList0x6c4744 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) <= 0;
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDStartTimerObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDStartTimerObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDStartTimerObjects1[i].setString("GO");
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDStartTimerObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDStartTimerObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.InstructionsCode.GDStartTimerObjects1[i].getWidth()) / 2);
}
}}

}


}; //End of gdjs.InstructionsCode.eventsList0x6c4744
gdjs.InstructionsCode.eventsList0x6c5434 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition1IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7099868);
}
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "startGame");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}}

}


{


gdjs.InstructionsCode.repeatCount3 = 1;
for(gdjs.InstructionsCode.repeatIndex3 = 0;gdjs.InstructionsCode.repeatIndex3 < gdjs.InstructionsCode.repeatCount3;++gdjs.InstructionsCode.repeatIndex3) {

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "startGame");
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val)
{
{runtimeScene.getVariables().getFromIndex(2).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "startGame");
}}
}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == -(1);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.InstructionsCode.GDStartTimerObjects1.createFrom(runtimeScene.getObjects("StartTimer"));
{for(var i = 0, len = gdjs.InstructionsCode.GDStartTimerObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDStartTimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDStartTimerObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDStartTimerObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.InstructionsCode.GDStartTimerObjects1[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.InstructionsCode.eventsList0x6c4744(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.InstructionsCode.eventsList0x6c5434
gdjs.InstructionsCode.eventsList0x6c4cd4 = function(runtimeScene) {

{


{
gdjs.InstructionsCode.GDContinueObjects1.createFrom(runtimeScene.getObjects("Continue"));
gdjs.InstructionsCode.GDInstructionsObjects1.createFrom(runtimeScene.getObjects("Instructions"));
{for(var i = 0, len = gdjs.InstructionsCode.GDContinueObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDContinueObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.InstructionsCode.GDContinueObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDInstructionsObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.InstructionsCode.GDInstructionsObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDInstructionsObjects1[i].setTextAlignment("center");
}
}}

}


}; //End of gdjs.InstructionsCode.eventsList0x6c4cd4
gdjs.InstructionsCode.eventsList0x6c50f4 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
gdjs.InstructionsCode.condition2IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.InstructionsCode.condition1IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition2IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7131228);
}
}}
}
if (gdjs.InstructionsCode.condition2IsTrue_0.val) {
gdjs.InstructionsCode.GDContinueObjects2.createFrom(runtimeScene.getObjects("Continue"));
gdjs.InstructionsCode.GDInstructionsObjects2.createFrom(runtimeScene.getObjects("Instructions"));
{for(var i = 0, len = gdjs.InstructionsCode.GDInstructionsObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDInstructionsObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDContinueObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDContinueObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "InGame", false);
}}

}


}; //End of gdjs.InstructionsCode.eventsList0x6c50f4
gdjs.InstructionsCode.eventsList0x6cd6fc = function(runtimeScene) {

{


{
gdjs.InstructionsCode.GDInstructionsObjects2.createFrom(runtimeScene.getObjects("Instructions"));
{for(var i = 0, len = gdjs.InstructionsCode.GDInstructionsObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDInstructionsObjects2[i].setColor("250;250;250");
}
}}

}


{


{
gdjs.InstructionsCode.GDStartTimerObjects2.createFrom(runtimeScene.getObjects("StartTimer"));
{for(var i = 0, len = gdjs.InstructionsCode.GDStartTimerObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDStartTimerObjects2[i].setColor("250;250;250");
}
}}

}


{


{
gdjs.InstructionsCode.GDContinueObjects1.createFrom(runtimeScene.getObjects("Continue"));
{for(var i = 0, len = gdjs.InstructionsCode.GDContinueObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDContinueObjects1[i].setColor("250;250;250");
}
}}

}


}; //End of gdjs.InstructionsCode.eventsList0x6cd6fc
gdjs.InstructionsCode.eventsList0xb4be0 = function(runtimeScene) {

{


{
gdjs.InstructionsCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.InstructionsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBackgroundObjects1[i].setX(0);
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBackgroundObjects1[i].setY(0);
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBackgroundObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Generic Start"); }gdjs.InstructionsCode.eventsList0x6c5434(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Generic Start"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Set Scene"); }gdjs.InstructionsCode.eventsList0x6c4cd4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Set Scene"); }
}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InstructionsCode.eventsList0x6c50f4(runtimeScene);} //End of subevents
}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Frederic_Lardon_feat_Laura_Palme_-_08_-_Dans_la_flute_chiante.mp3", true, 15, 1);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Colors"); }gdjs.InstructionsCode.eventsList0x6cd6fc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Colors"); }
}


}; //End of gdjs.InstructionsCode.eventsList0xb4be0


gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDBackgroundObjects1.length = 0;
gdjs.InstructionsCode.GDBackgroundObjects2.length = 0;
gdjs.InstructionsCode.GDBackgroundObjects3.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects3.length = 0;
gdjs.InstructionsCode.GDStartTimerObjects1.length = 0;
gdjs.InstructionsCode.GDStartTimerObjects2.length = 0;
gdjs.InstructionsCode.GDStartTimerObjects3.length = 0;
gdjs.InstructionsCode.GDContinueObjects1.length = 0;
gdjs.InstructionsCode.GDContinueObjects2.length = 0;
gdjs.InstructionsCode.GDContinueObjects3.length = 0;

gdjs.InstructionsCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['InstructionsCode'] = gdjs.InstructionsCode;

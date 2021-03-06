#target photoshop;
app.bringToFront();

/**
 * Crop Canvas Function from https://stackoverflow.com/a/48242624
 * Crops the canvas by x number of pixels equally from all sides.
 * @param {Number} [amountOfPixels=0] - Number of pixels to crop.
 */
 function cropCanvas(amountOfPixels) {
    var document = app.activeDocument; // Assumes a document is active.
    amountOfPixels = amountOfPixels || 0; // Defaults to zero.

    // Obtain height and width of canvas.
    var canvasWidth = document.width.value;
    var canvasHeight = document.height.value;

    // Define the new bounds.
    var newBounds = [
        amountOfPixels,
        amountOfPixels,
        canvasWidth - amountOfPixels,
        canvasHeight - amountOfPixels
    ];

    // Crop the canvas. 
    document.crop(newBounds);
}

main(); //call the main function



function main(){
var Folders =[];
var topLevel = Folder.selectDialog ("Please select folder to process"); // select top folder
if(topLevel == null) return;                                            //if cancelled quit
var outputFolder = Folder.selectDialog ("Please select output folder"); // select output folder 
// var outputFolder = Folder(outputFolderSelect + "/processed/" );
Folders = FindAllFolders(topLevel, Folders);  // call function FindAllFolders
Folders.unshift(topLevel);  // add topLevel folder to beginning the array


var folder_list = new File(outputFolder + '/folder_list.txt');
var completed_folders = new File(outputFolder + '/completed_folders.txt');

    // // If folder_list.txt doesn't exist, then create it
    // if (!folder_list.exists)
    // {
    // // folder_list.create();
    // folder_list.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
    // folder_list.open('w');
    // folder_list.writeln(Folders);
    // folder_list.close();
    // };

    // If completed_folders.txt doesn't exist, then create it and also make a text file includng all folders (for a quick size comparison to gauge progress)
    if (!completed_folders.exists)
    {
    // completed_folders.create();
    completed_folders.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
    folder_list.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
    folder_list.open('w');
    folder_list.writeln(Folders);
    folder_list.close();
    };

for(var z=0; z < Folders.length; z++){// loop through all subfolders

    completed_folders.open('r');
    var cf_string = completed_folders.read(); //completed_folders.txt into string
    completed_folders.close();

    var index = cf_string.indexOf(Folders[z]);
    if(index == -1){ //if the current folder isn't found, process the files in this folder
        var fileList = Folders[z].getFiles(/\.(jpg|png)$/i); //get a list of all JPG or PNG images in this subfolder

    folderReg = new RegExp(/[^\/]+$/m); //This returns the last folder in the file path (aka current directory)

    for(var a=0; a < fileList.length; a++)
        {//loop through all files in folder; 1 at a time
            var docref= app.open(fileList[a]);//open file
            var doc = app.activeDocument; // get a reference to the current (active) document and store it in a variable named "doc"

            //Specify output directory
            // var outputFolder = Folder(topLevel + "/processed/" + folderReg.exec(Folders[z]));
            var outFolder = Folder(outputFolder + "/processed/" + folderReg.exec(Folders[z]));
            if(!outFolder.exists) outFolder.create();


            //----------Initial Resizing to lower processing time---------------//
            var fWidth = 1024;
            var fHeight = 1024;

            // do the resizing.  if height < width (landscape) resize based on width.  otherwise, resize based on height
            if (doc.height < doc.width)
            {
                // Invoke the `cropCanvas` function passing
                // in the `amountOfPixels` value.
                cropCanvas(156);
                doc.resizeImage(null,UnitValue(fWidth,"px"),null,ResampleMethod.BICUBIC);
            }
            else {
                cropCanvas(156);
                doc.resizeImage(null,UnitValue(fHeight,"px"),null,ResampleMethod.BICUBIC);
            }

            // Skip processing if image is already square
            if ((doc.width/doc.height) != 1) {
            
            var Name = fileList[a].name.replace(/\.[^\.]+$/, ''); //regex to get rid of file extension

            var idDplc = charIDToTypeID( "Dplc" );
            var desc1916 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref23 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref23.putEnumerated( idLyr, idOrdn, idTrgt );
            desc1916.putReference( idnull, ref23 );
            var idVrsn = charIDToTypeID( "Vrsn" );
            desc1916.putInteger( idVrsn, 5 );
        executeAction( idDplc, desc1916, DialogModes.NO );

        /* https://forums.adobe.com/message/6424562#6424562 */


        // Save the current ruler units and set to pixels
        var savedRuler = app.preferences.rulerUnits;
        app.preferences.rulerUnits = Units.PIXELS;
        
        //var backgroundC = new SolidColor();
        //    backgroundC.rgb.red = 255;
        //    backgroundC.rgb.green = 255;
        //    backgroundC.rgb.blue = 255;
        //    backgroundColor = backgroundC;
        
        

        //compares the width & height to see which one is larger 
        doc.resizeCanvas(Math.max(doc.width,doc.height),Math.max(doc.width,doc.height), AnchorPosition.MIDDLECENTER);

        var idsetd = charIDToTypeID( "setd" );
            var desc290 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref2 = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idfsel = charIDToTypeID( "fsel" );
                ref2.putProperty( idChnl, idfsel );
            desc290.putReference( idnull, ref2 );
            var idT = charIDToTypeID( "T   " );
                var ref3 = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idTrsp = charIDToTypeID( "Trsp" );
                ref3.putEnumerated( idChnl, idChnl, idTrsp );
            desc290.putReference( idT, ref3 );
        executeAction( idsetd, desc290, DialogModes.NO );

        var idInvs = charIDToTypeID( "Invs" );
        executeAction( idInvs, undefined, DialogModes.NO );

        var idslct = charIDToTypeID( "slct" );
            var desc591 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref4 = new ActionReference();
                var idworkspace = stringIDToTypeID( "workspace" );
                ref4.putName( idworkspace, "3D" );
            desc591.putReference( idnull, ref4 );
            var idIdnt = charIDToTypeID( "Idnt" );
            desc591.putInteger( idIdnt, -722 );
            var iddontRecord = stringIDToTypeID( "dontRecord" );
            desc591.putBoolean( iddontRecord, true );
            var idforceNotify = stringIDToTypeID( "forceNotify" );
            desc591.putBoolean( idforceNotify, true );
        executeAction( idslct, desc591, DialogModes.NO );

        var idcafWorkspace = stringIDToTypeID( "cafWorkspace" );
            var desc593 = new ActionDescriptor();
            var idcafSamplingRegion = stringIDToTypeID( "cafSamplingRegion" );
            var idcafSamplingRegion = stringIDToTypeID( "cafSamplingRegion" );
            var idcafSamplingRegionAuto = stringIDToTypeID( "cafSamplingRegionAuto" );
            desc593.putEnumerated( idcafSamplingRegion, idcafSamplingRegion, idcafSamplingRegionAuto );
            var idcafSampleAllLayers = stringIDToTypeID( "cafSampleAllLayers" );
            desc593.putBoolean( idcafSampleAllLayers, false );
            var idcafColorAdaptationLevel = stringIDToTypeID( "cafColorAdaptationLevel" );
            var idcafColorAdaptationLevel = stringIDToTypeID( "cafColorAdaptationLevel" );
            var idcafColorAdaptationDefault = stringIDToTypeID( "cafColorAdaptationDefault" );
            desc593.putEnumerated( idcafColorAdaptationLevel, idcafColorAdaptationLevel, idcafColorAdaptationDefault );
            var idcafRotationAmount = stringIDToTypeID( "cafRotationAmount" );
            var idcafRotationAmount = stringIDToTypeID( "cafRotationAmount" );
            var idcafRotationAmountNone = stringIDToTypeID( "cafRotationAmountNone" );
            desc593.putEnumerated( idcafRotationAmount, idcafRotationAmount, idcafRotationAmountNone );
            var idcafScale = stringIDToTypeID( "cafScale" );
            desc593.putBoolean( idcafScale, false );
            var idcafMirror = stringIDToTypeID( "cafMirror" );
            desc593.putBoolean( idcafMirror, false );
            var idcafOutput = stringIDToTypeID( "cafOutput" );
            var idcafOutput = stringIDToTypeID( "cafOutput" );
            var idcafOutputToCurrentLayer = stringIDToTypeID( "cafOutputToCurrentLayer" );
            desc593.putEnumerated( idcafOutput, idcafOutput, idcafOutputToCurrentLayer );
        executeAction( idcafWorkspace, desc593, DialogModes.NO );

        var idsetd = charIDToTypeID( "setd" );
            var desc596 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref5 = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idfsel = charIDToTypeID( "fsel" );
                ref5.putProperty( idChnl, idfsel );
            desc596.putReference( idnull, ref5 );
            var idT = charIDToTypeID( "T   " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idNone = charIDToTypeID( "None" );
            desc596.putEnumerated( idT, idOrdn, idNone );
        executeAction( idsetd, desc596, DialogModes.NO );

// var idhostFocusChanged = stringIDToTypeID( "hostFocusChanged" );
//     var desc597 = new ActionDescriptor();
//     var idactive = stringIDToTypeID( "active" );
//     desc597.putBoolean( idactive, false );
//     var iddontRecord = stringIDToTypeID( "dontRecord" );
//     desc597.putBoolean( iddontRecord, true );
//     var idforceNotify = stringIDToTypeID( "forceNotify" );
//     desc597.putBoolean( idforceNotify, true );
// executeAction( idhostFocusChanged, desc597, DialogModes.NO );

        }
else{};// if image is square, skip

    // Restore the ruler units
    app.preferences.rulerUnits = savedRuler;

    var saveFile = File(outFolder + "/" + fileList[a].name);
    SaveJPEG(saveFile,8);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);  

    } //end filelist loop
    completed_folders.open("a"); //append current folder to completed_folders.txt
    completed_folders.write(Folders[z] + "\n");
    completed_folders.close();
    } //end of processing files in current folder
    // var cf_array = cf_string.split('\n')


    

} //end subfolders loop


   

}; //end main function

function FindAllFolders( srcFolderStr, destArray) {
    var fileFolderArray = Folder( srcFolderStr ).getFiles();
    for ( var i = 0; i < fileFolderArray.length; i++ ) {
      var fileFoldObj = fileFolderArray[i];
      if ( fileFoldObj instanceof File ) {   
      } else {
            destArray.push( Folder(fileFoldObj) );  // add new items to the end of an array
            FindAllFolders( fileFoldObj.toString(), destArray );
      }
    }
    return destArray;
}

function SaveJPEG(saveFile, jpegQuality){
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = jpegQuality; 
activeDocument.saveAs(saveFile, jpgSaveOptions, true,Extension.LOWERCASE);
};





// var idTrnf = charIDToTypeID( "Trnf" );
//     var desc1872 = new ActionDescriptor();
//     var idnull = charIDToTypeID( "null" );
//         var ref21 = new ActionReference();
//         var idLyr = charIDToTypeID( "Lyr " );
//         var idOrdn = charIDToTypeID( "Ordn" );
//         var idTrgt = charIDToTypeID( "Trgt" );
//         ref21.putEnumerated( idLyr, idOrdn, idTrgt );
//     desc1872.putReference( idnull, ref21 );
//     var idFTcs = charIDToTypeID( "FTcs" );
//     var idQCSt = charIDToTypeID( "QCSt" );
//     var idQcsa = charIDToTypeID( "Qcsa" );
//     desc1872.putEnumerated( idFTcs, idQCSt, idQcsa );
//     var idOfst = charIDToTypeID( "Ofst" );
//         var desc1873 = new ActionDescriptor();
//         var idHrzn = charIDToTypeID( "Hrzn" );
//         var idPxl = charIDToTypeID( "#Pxl" );
//         desc1873.putUnitDouble( idHrzn, idPxl, 0.000000 );
//         var idVrtc = charIDToTypeID( "Vrtc" );
//         var idPxl = charIDToTypeID( "#Pxl" );
//         desc1873.putUnitDouble( idVrtc, idPxl, 0.000000 );
//     var idOfst = charIDToTypeID( "Ofst" );
//     desc1872.putObject( idOfst, idOfst, desc1873 );
//     var idWdth = charIDToTypeID( "Wdth" );
//     var idPrc = charIDToTypeID( "#Prc" );
//     var percent = (((Math.min(doc.width,doc.height))/(Math.max(doc.width,doc.height)))+1)*100;
//     desc1872.putUnitDouble( idWdth, idPrc, percent );
//     var idIntr = charIDToTypeID( "Intr" );
//     var idIntp = charIDToTypeID( "Intp" );
//     var idBcbc = charIDToTypeID( "Bcbc" );
//     desc1872.putEnumerated( idIntr, idIntp, idBcbc );
//     var idcontentAware = stringIDToTypeID( "contentAware" );
//     desc1872.putBoolean( idcontentAware, true );
//     var idAmnt = charIDToTypeID( "Amnt" );
//     desc1872.putDouble( idAmnt, 100.000000 );
// executeAction( idTrnf, desc1872, DialogModes.NO );


// function ContentAwareResizeLayer(W, H) {
//     var idTrnf = charIDToTypeID( "Trnf" );
//         var desc2 = new ActionDescriptor();
//         var idnull = charIDToTypeID( "null" );
//             var ref1 = new ActionReference();
//             var idLyr = charIDToTypeID( "Lyr " );
//             var idOrdn = charIDToTypeID( "Ordn" );
//             var idTrgt = charIDToTypeID( "Trgt" );
//             ref1.putEnumerated( idLyr, idOrdn, idTrgt );
//         desc2.putReference( idnull, ref1 );
//         var idFTcs = charIDToTypeID( "FTcs" );
//         var idQCSt = charIDToTypeID( "QCSt" );
//         var idQcsa = charIDToTypeID( "Qcsa" );
//         desc2.putEnumerated( idFTcs, idQCSt, idQcsa );
//         var idOfst = charIDToTypeID( "Ofst" );
//             var desc3 = new ActionDescriptor();
//             var idHrzn = charIDToTypeID( "Hrzn" );
//             var idPxl = charIDToTypeID( "#Pxl" );
//             desc3.putUnitDouble( idHrzn, idPxl, 0.000000 );
//             var idVrtc = charIDToTypeID( "Vrtc" );
//             var idPxl = charIDToTypeID( "#Pxl" );
//             desc3.putUnitDouble( idVrtc, idPxl, 0.000000 );
//         var idOfst = charIDToTypeID( "Ofst" );
//         desc2.putObject( idOfst, idOfst, desc3 );
//         var idWdth = charIDToTypeID( "Wdth" );
//         // var idPrc = charIDToTypeID( "#Prc" );
//         var idPxl = charIDToTypeID( "#Pxl" );
//         desc2.putUnitDouble( idWdth, idPxl, W);
//         var idHght = charIDToTypeID( "Hght" );
//         // var idPrc = charIDToTypeID( "#Prc" );
//         desc2.putUnitDouble( idHght, idPxl, H);
//         var idLnkd = charIDToTypeID( "Lnkd" );
//         desc2.putBoolean( idLnkd, true );
//         var idcontentAware = stringIDToTypeID( "contentAware" );
//         desc2.putBoolean( idcontentAware, true );
//         var idskinTone = stringIDToTypeID( "skinTone" );
//         desc2.putBoolean( idskinTone, dlg.ProtectSkin.value );
//         //var idChnN = charIDToTypeID( "ChnN" );      
//         //desc2.putString( idChnN, "Alpha 1" );
//         var idAmnt = charIDToTypeID( "Amnt" );
//         desc2.putDouble( idAmnt, 100.000000 );
//     executeAction( idTrnf, desc2, DialogModes.NO );
//     }




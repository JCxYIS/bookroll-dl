/*
    Author: JCxYIS
    2020/05/10
*/

// 獲取圖片位置
var rootpath = window.bookroll.serverData.ePubFilePath + window.bookroll.pages.mediaFilesName + "/";
var imgCount = window.bookroll.pages.totalpage;
console.log("根目錄位置: "+rootpath);
console.log("頁數: "+imgCount);

// 製作下載選單
document.body.innerHTML = "<h3>Bookroll 下載選單 by JCxYIS</h3>  ";
var link = document.createElement('a');
for(var i = 0; i < imgCount; i+=10)
{
    // ++
    link = document.createElement('a');
    link.innerHTML = "下載 "+(i+1)+" 到 "+(i+10<imgCount?i+10:imgCount)+" 頁<br>";
    link.setAttribute('startPageIndex', i);
    $(link).click( function(){ DoDownload(this) } );
    document.body.appendChild(link);
}

// 下載func
function DoDownload(event)
{
    // 獲取起始頁
    var startPageIndex = parseInt( $(event).attr('startPageIndex') );
    console.log("下載：起始頁="+startPageIndex);

    // DLsite
    var tmplink = document.createElement('a');
    tmplink.setAttribute('download', null);
    document.body.appendChild(tmplink);
    for (var i = startPageIndex; i < startPageIndex+10 && i < imgCount; i++)
    {
        tmplink.setAttribute('href', rootpath+"images/out_" + (i + 1) + ".jpg");
        tmplink.setAttribute('download', "Page_"+(i+1));
        tmplink.click();
    }
}
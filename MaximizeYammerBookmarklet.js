(function(){
    var $left = $('#column-one'), 
        $content = $('#column-two'),
        $headerContainer = $content.find('.page-header-container'),
        $header = $headerContainer.find('.page-header'),
        $info = $headerContainer.find('.filecollab-group-header-basics'),
        $main = $('#main-column'),
        $right = $('#column-two .yj-selector-right-sidebar'),
        $toggle = $left.add($info).add($right),
        $nav = $('#column-two .filecollab-action-bar-with-tabs'),
        $icon = $('#column-two a.avatar');
    
    if (!$left.is(':visible')) { 
        $info.find('.thumbnail').prepend($icon);
        $icon.css({ float:'', marginLeft:'', padding:'' });
        $icon.add($icon.children('img')).css({ height:'', width:'' });
        $content.add($headerContainer).add($header).add($main).css({ float:'', padding:'', width:'' });
        $toggle.show();
        return;
    }
    
    $toggle.hide();
    $nav.prepend($icon.css({ float:'left', marginLeft:'-10px', padding:'4px' }));
    $icon.add($icon.children('img')).css({ height:'32px', width:'32px' });
    $content.add($headerContainer).add($header).add($main).css({ float:'none', padding:0, width:'100%' });
})()

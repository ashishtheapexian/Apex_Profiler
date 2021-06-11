/*!
 * apex-Profiler - Oracle APEX plugin
 * @author Ashish Sahay
 * @version v1.0.0
 * @version v2.0.0
 * @link https://github.com/ashishtheapexian/apex_profiler.git
 * @license MIT
 */
/*
 * ChageLog:
 * v1.0.0 -  - Initial Release
 */

var apex_profiler = function () {
	
	
	var utility = {
		 debug: {
            info: function(p_Message) {
                apex.debug.info(p_Message);
            },
            error: function(p_Message) {
               console.error(p_Message);
            }
	},	
	draw : function (pElement, pData,ConfigJSON, p_hide_left_btn, p_hide_right_btn){
		
		var defaults ={ 
		isActiveColor: "#F44336",
		isInctiveColor: "#F4bc36", 
		panelHeight: "216px", 
		panelWIdth: "401px", 
		marginRight: "0px", 
		marginTop: "48px"
		};
		
		try {
                l_ConfigJSON = JSON.parse(ConfigJSON)
            } catch (defaults) {
                console.error("In valid Setup JSON"), console.error(defaults), console.error(ConfigJSON)
			}
		
		 // l_ConfigJSON = JSON.parse(ConfigJSON);
		var l_image;
		var l_user_logo;
		var fname;
		var lname;
		var edit_profile;
		var l_email;
		var l_org_name;
		var l_designation;
		var l_left_button_lable;
		var l_right_button_lable;
		var l_leftButton_hot;
		var l_leftButton_icon_pos
		var l_leftButton_icon
		var l_rightButton_hot;
		var l_rightButton_icon_pos
		var l_rightButton_icon;
		var l_left_link;
		var l_leftButtonHot;
		var l_leftButtonIconPos;
		var l_rightButtonIconPos; 
		var lOrgLabel;
		var lEditProfileLabel;
		$.each(pData ,function(index, data){
			l_image = data.IMAGE_SRC;
			l_user_logo = data.USER_LOGO;
			fname = data.FIRST_NAME;
			lname = data.LAST_NAME;
			edit_profile = data.EDIT_LINK_SRC;
			l_email = data.EMAIL;
			l_org_name = data.ORG_NAME;
			l_designation = data.DESIGNATION;
			l_left_button_lable = data.LEFT_BUTTON_LABEL;
			l_right_button_lable = data.RIGHT_BUTTON_LABEL;
			l_leftButton_hot = data.LEFTBUTTON_HOT;
			l_leftButton_icon_pos = data.LEFTBUTTON_ICON_POS;
			l_leftButton_icon = data.LEFT_BTN_ICON;
			l_rightButton_hot = data.rightButton_hot;
			l_rightButton_icon_pos = data.rightButton_icon_pos;
			l_rightButton_icon = data.RIGHT_BTN_ICON;
			l_left_link = "'"+ data.LEFT_BUTTON_LINK +"'";
			l_right_link = "'" + data.RIGHT_BUTTON_LINK + "'";
			l_leftButtonHot = data.LEFT_BUTTON_HOT == 'true' ? 'hot':'';
			l_rightButtonHot = data.RIGHT_BUTTON_HOT == 'true' ?'hot' :'';
			l_leftButtonIconPos = data.LEFT_BTN_ICON_POS;
			l_rightButtonIconPos = data.RIGHT_BTN_ICON_POS;
			lOrgLabel = data.ORG_LABEL;
			lEditProfileLabel = data.EDIT_LINK_LABEL;
		}); 
	var wrapper =$('<div id="UniqueIdForProfile" class="t-DialogRegion js-modal js-draggable js-resizable js-dialog-size480x320  js-regionDialog ui-dialog-content ui-widget-content" style="width: '+l_ConfigJSON.panelWIdth+';position: fixed;top: '+l_ConfigJSON.marginTop+';right: '+l_ConfigJSON.marginRight+'; min-height: 0px; max-height: none; z-index:99999999999999; height: '+l_ConfigJSON.panelHeight+' !important;" aria-live="polite">  </div>');
	
	var region = $('<div class="t-DialogRegion-body js-regionDialog-body" style="bottom: 64px;"></div>');
	
	var l_catch = $('<div id="report_21436805043055766701_catch"> </div>');
	
	var l_header_accountDialog = $('<div id="accountMenu_menu" class="a-Header-accountDialog" tabindex="-1"></div>');
	var l_Menu_content = $('<div class="a-MediaBlock a-Menu-content"></div>');
	
	var l_Menu_graphic  = $('<div class="a-MediaBlock-graphic"></div>');
	var head_span = $('<span class="a-Header-userPhoto a-Header-userPhoto--large"></span>');
	
	var l_img  = $('<img src="'+l_image+'" height="64" width="64" class="a-Header-photo" alt="Profile image for user '+fname+'">');
	$(head_span).append(l_img);
	$(l_Menu_graphic).append(head_span);
	var edit_profile_link =$('<a href="'+edit_profile+'" class="a-Header-accountDialog-editProfile a-Menu-item a-Menu-label" id="EDIT_PROFILE_LINK">'+lEditProfileLabel+'</a>');
	
	$(l_Menu_graphic).append(edit_profile_link);
	$(l_Menu_content).append(l_Menu_graphic);

		
	
	var mediaBlock = $('<div class="a-MediaBlock-content">');
	var Menu_label = $('<div class="a-Menu-label a-Menu-item" tabindex="-1">');
	var l_name = $('<span class="a-Header-dialogText a-Header-dialogName">'+fname+' '  +lname +'</span>');
	var l_email = $('<span class="a-Header-dialogText a-Header-dialogUsername">'+l_email+'</span>');
	
	$(Menu_label).append(l_name);
	$(Menu_label).append(l_email);
	
	var l_manu_label_2 = $('<div class="a-Menu-label a-Menu-item" tabindex="-1"></div>');
	var l_span = $('<span class="a-Header-dialogLabel">'+lOrgLabel+'</span>');
                
	var dialog_val = $('<span class="a-Header-dialogValue">'+l_org_name+'</span>');
	
	$(l_manu_label_2).append(l_span);
	$(l_manu_label_2).append(dialog_val);
	
	var l_role = $('<div class="a-Menu-label a-Menu-item" tabindex="-1"></div>');
	var l_role_label =$('<span class="a-Header-dialogLabel">Role</span>');
	var l_role_val   = $('<span class="a-Header-dialogValue">'+ l_designation+'</span>');
	
	$(mediaBlock).append(Menu_label);
	$(mediaBlock).append(l_manu_label_2);
	$(mediaBlock).append(l_role_val);
	
	$(l_Menu_content).append(mediaBlock);
	$(l_header_accountDialog).append(l_Menu_content);
	$(l_catch).append(l_header_accountDialog);
	$(region).append(l_catch);
	$(wrapper).append(region);
	
	var l_Btn_container = $('<div class="t-DialogRegion-buttons js-regionDialog-buttons"></div>');
	var l_BtnDialogRegion  = $('<div class="t-ButtonRegion t-ButtonRegion--dialogRegion"></div>');
	 
	 function getBtn(pBtnNumber,pIconPos, pLink, pLabel,pHot,pButton_icon, p_hide_left_btn, p_hide_right_btn ){
			var l_BtnRegionCol = $('<div class="t-ButtonRegion-col t-ButtonRegion-col--'+pBtnNumber+'">');
			var l_BtnRegion = $('<div class="t-ButtonRegion-buttons"></div>');
			var l_btnCode = $('<button onclick="apex.navigation.redirect('+pLink+');" class="t-Button t-Button--'+pHot+'" type="button" id="">');
			var l_BtnLabel = $('<span class="t-Button-label">'+pLabel+'</span>');
			var l_BtnIconCode = $('<span class="t-Icon t-Icon--'+pIconPos+' fa '+pButton_icon+'" aria-hidden="true"></span>');
			
			
			if (pIconPos =='left') {
				$(l_BtnLabel).prepend(l_BtnIconCode);
			} else {
				$(l_BtnLabel).append(l_BtnIconCode);
			}
			
			$(l_btnCode).append(l_BtnLabel);
			
			$(l_BtnRegion).append(l_btnCode);
			$(l_BtnRegionCol).append(l_BtnRegion);
			
			return l_BtnRegionCol;
	 }
	 
	 var l_BtnWrap = $('<div class="t-ButtonRegion-wrap"></div>');
	 
	 if (p_hide_left_btn == 'N')
	 {
	$(l_BtnWrap).append(getBtn('left',l_leftButtonIconPos, l_left_link, l_left_button_lable,l_leftButtonHot,l_leftButton_icon));
	 }
	 if (p_hide_right_btn == 'N'){
	$(l_BtnWrap).append(getBtn('right',l_rightButtonIconPos, l_right_link, l_right_button_lable,l_rightButtonHot,l_rightButton_icon));
	 }
	$(l_BtnDialogRegion).append(l_BtnWrap);
	 $(l_Btn_container).append(l_BtnDialogRegion);
	 
	$(wrapper).append(l_Btn_container);
	$('body').append(wrapper);
 
 $('#UniqueIdForProfile').hide();
 $('.'+ pElement).addClass('not-active')
 //$('.not-active').css('background',l_ConfigJSON.isInctiveColor);
	$( "."+pElement ).css('background-image', 'url(' + l_user_logo + ')');

$( "."+pElement ).bind( "click", function() {
	if ($(this).hasClass('not-active') ) {
		
		$(this).addClass('open-box');
		//$('.open-box').css('background',l_ConfigJSON.isActiveColor);
		
		 $(this).removeClass('not-active');
	}
	else {
		$(this).addClass('not-active');
		 $(this).removeClass('open-box');
		 //$('.not-active').css('background',l_ConfigJSON.isInctiveColor);
	}

   $('#UniqueIdForProfile').toggle();

});

	
	}};
	
	/*var da=this;
    apex.debug.log('apex-Profiler.init',da);
    var l_hideLeftBtn = da.action.attribute06;
	var l_hideRightBtn = da.action.attribute07;
    */
	
return {
    /* Init Function*/
    initialize: function (pElementClass,pItems, p_Ajax_Identifier,ConfigJSON, p_hide_left_btn, p_hide_right_btn) {

					apex.server.plugin(p_Ajax_Identifier,
					{pageItems: pItems}					,
					{
						success: function (pData) {
							var tableData = pData.row;
							utility.draw(pElementClass, tableData,ConfigJSON, p_hide_left_btn, p_hide_right_btn );
						},
						error: function (p_Ajax_Identifier) {
							console.error("Error while try to load data!");
						},
						dataType: "json"
					});

}} }();

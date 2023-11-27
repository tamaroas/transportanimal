$(document).ready(function() {
 function updtMeansTransportFillRetrieval(typeaction,paysvalue){
    
    $.post(
        ajaxurl,{
        action: 'update_list',
        formule:$("#typeExpedition").val(),
        moyen:$("#meansOfTransport").val(), 
        pays:paysvalue,
        current_language:$("#current_language").val(),
        typeaction:typeaction
        
    },function(a){
        $("#retraitLieuAero").html(a);
    });
} 
function updateformule(formtypes,paysvalue){
    
    $.post(
        ajaxurl,
        {
        action: 'update_list',
        formule:$("#typeExpedition").val(),
        moyen:$("#meansOfTransport").val(), 
        pays:paysvalue,
        current_language:$("#current_language").val(),        
        typeaction:"formule",
        formtype:formtypes,
        
        },
        function(a){
        $("#depotLieuAero").html(a);
        }
    );
    //updtMeansTransportFillRetrieval("formule retrait lieu");
}
function dateMaj(){
    try{
        var a=new Date,b=$("#date_enl").val(),c=b.substring(0,2),e=b.substring(3,5),f=b.substring(6,10),d=new Date;d.setDate(c);d.setMonth(e-1);d.setYear(f);10<=b.length&&a.setDate(d.getDate()+5);$("#retraitLieuDate2").datepicker("option","minDate",a);$("#input_liv_date2").datepicker("option","minDate",a);$("#date_liv").val(a.getDate()+"/"+(a.getMonth()+1)+"/"+(a.getYear()+1900))
    }catch(g){
        alert(g.message)
    }
};

function calculateSum(idchamp){
    var sum=0;
    
    $("input[name^='"+idchamp+"']").each(function(){
        if(!isNaN(this.value)&&this.value.length!=0){
            sum+=parseFloat(this.value);
           
        }
    });
    //$("#sum").html(sum.toFixed(2));
    return sum;
}

//récupérer le coeficiant
function getCoef(){
        var a=167;

        if("Fret maritime"==$("#meansOfTransport").val()||"Seafreight"==$("#meansOfTransport").val())
            a=1E3;
        else{ 
            if("Fret routier"==$("#meansOfTransport").val()||"Road freight"==$("#meansOfTransport").val())                
                a=250;
            }   
     return a        
}
//Mise à jour du calcule
function majCalcul(){
    //var a=$("input[name^='poid_']").sum(),a=a.toFixed(2);
    var a=calculateSum('poid_'),a=a.toFixed(2);
    
    $("#poidtotal").val(a);
    
    //a=$("input[name^='volume_']").sum();
    a=calculateSum('volume_');
    a=a.toFixed(3);
    $("#volumetotal").val(a);
    a=$("#volumetotal").val()*getCoef();
    a=a.toFixed(2);
    $("#poidvolumetotal").val(a)
}
if ($('.datepickerbdm').length){
	$.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );
	$.datepicker.formatDate( "dd/mm/yy", new Date( ) );
	
	$( ".datepickerbdm" ).datepicker({
		closeText: 'Fermer',
		prevText: 'Précédent',
		nextText: 'Suivant',
		currentText: 'Aujourd\'hui',
		monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
		monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
		dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
		dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
		dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
		weekHeader: 'Sem.',				
		dateFormat:'dd/mm/yy',
		showOn: "button",
		buttonImage: siteurl+"/wp-content/themes/BdmTheme/images/calendar.png",
		buttonImageOnly: true,
		buttonText: "Date"	,
    onSelect: function () { 
        if ($(this).val() != '') {
            $("#input_liv_date2").datepicker('option', 'minDate', $(this).val());
        }
      },
    onClose: function () {
        if ($(this).val() == '') {
            $("#input_liv_date2").datepicker('option', 'minDate', null);
        }
      }    
		});
}
if ($('.datepickerbdmen').length){
	$.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );
	$.datepicker.formatDate( "dd/mm/yy", new Date( ) );
	/*$( ".selector" ).datepicker({
altField: "#actualDate"
});*/
	$( ".datepickerbdmen" ).datepicker({
		closeText: 'Fermer',
		prevText: 'Précédent',
		nextText: 'Suivant',
		currentText: 'Aujourd\'hui',
		monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
		monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
		dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
		dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
		dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
		weekHeader: 'Sem.',				
		dateFormat:'dd/mm/yy',
		showOn: "button",
		buttonImage: siteurl+"/wp-content/themes/BdmTheme/images/calendar.png",
		buttonImageOnly: true,
		buttonText: "Date"
		});
}
        if (($('#formtype').length > 0 && ($("#formtype").val()=="calculateur" )) || ($('#formtypeface').length > 0 && ($("#formtypeface").val()=="calculateur" ))) {
			var longueur=largeur=hauteur=0;
			var tcage=new Array(); 
			 //0=longueur;1=largeur;2=hauteur;3=name;
				tcage[0]=new Array(54,41,39,"t1");
				tcage[1]=new Array(69,51,49,"t2");
				tcage[2]=new Array(82,56,59,"t3");
				tcage[3]=new Array(92,61,66,"t4"); 
				tcage[4]=new Array(102,69,77,"t5"); 
				tcage[5]=new Array(122,81,89,"t6 / 7");
				$('.contacterair').hide();
				$('.mensurations').hide(); 
				$('.CDimention').hide();
			$('#calculer').click(function() {	
				if($('.neztype:checked').val()=="undefined" || !$('#longueur').val()|| !$('#hauteur').val()|| !$('#largeur').val()){
					
					return false;
				}
				// let hPatt = $('#hPatt');
				//
				// // longueur=parseInt($('#longueur').val())+10;
				// // largeur=parseInt($('#largeur').val())*2;
                // hauteur=parseInt($('#hauteur').val())+10;
                // longueur=parseInt($('#longueur').val());
				// largeur=parseInt($('#largeur').val());
				// // hauteur=parseInt($('#hauteur').val());
				// if($('.neztype:checked').val()=="oui"){
				// 	longueur=parseInt(longueur)+5;
				// 	largeur=parseInt(largeur)+5;
				// 	hauteur=parseInt(hauteur)+10;
				// }
                let noze_spe = false;
                let hPatt = parseFloat($('#hPatt').val());
                hauteur = parseInt($('#hauteur').val()) + 10;
                longueur = parseInt($('#longueur').val()) + (hPatt / 2);
                largeur = parseInt($('#largeur').val()) * 2;
                // hauteur=parseInt($('#hauteur').val());
                if ($('.neztype:checked').val() == "oui") {
                    // longueur = parseInt(longueur) + 5;
                    // largeur = parseInt(largeur) + 5;
                    // hauteur = parseInt(hauteur) + 10;
                    noze_spe = true;
                }

				//console.log("longueur : "+longueur);
				//console.log("largeur : "+largeur);
				//console.log("hauteur : "+hauteur);
				oldtv = new Array(-1,-1,-1,"");
                let my_i = -1;
                    for (var i = 0; i <= 5; i = i + 1) {
                    //console.log("-------------longueur oldtv avant : "+oldtv[0]);
                        console.log('noze spe', noze_spe, 'i', i);
                    if (oldtv[0] != -1) {
                        if (tcage[i][0] >= longueur && tcage[i][0] <= oldtv[0])
                            if (tcage[i][1] >= largeur && tcage[i][1] <= oldtv[1])
                                if (tcage[i][1] >= hauteur && tcage[i][2] <= oldtv[2]) {
                                    oldtv = tcage[i];
                                    console.log('noze spe yeahh', noze_spe, 'i', i);
                                    my_i = i;
                                    if (i < 5 && noze_spe) {
                                        $('#cagetypeindice').val(i + 2);
                                    } else {
                                        $('#cagetypeindice').val(i + 1);
                                    }
                                }
                    } else {
                        if (tcage[i][0] >= longueur && tcage[i][1] >= largeur && tcage[i][2] >= hauteur) {
                            oldtv = tcage[i];
                            my_i = i;
                            console.log('noze spe yeahh', noze_spe, 'i', i);
                            if (i < 5 && noze_spe) {
                                $('#cagetypeindice').val(i + 2);
                            } else {
                                $('#cagetypeindice').val(i + 1);
                            }
                        }
                    }
                    //console.log("indice tableau : "+i+"    longueur cage en cour : "+tcage[i][0]+"    longueur oldtv après : "+oldtv[0]);
                }
				
				if(oldtv[0]==-1){
					$('.mensurations').attr("style", "display: none !important"); 
					$('.CDimention').hide();
					$('.contacterair').show();
				}else{
				    if (my_i < 5 && noze_spe) {
                        oldtv = tcage[my_i + 1];
                    }
				    $('.contacterair').hide();
					$('.mensurations').show(); 
					$('.CDimention').show();
					$('.dimensionscage').html(longueur+" x "+largeur+" x "+hauteur);
					$('.nomcage').html(oldtv[3]);
					$('.dimention3').html(oldtv[0]);
					$('.dimention2').html(oldtv[1]);
                    $('.dimention1').html(oldtv[2]);
                    $('.dimentionText3').html(oldtv[0]);
					$('.dimentionText2').html(oldtv[1]);
					$('.dimentionText1').html(oldtv[2]);				}
				return false;
			                
			});
		   $('#calculer').on('click',function(){
            $('.fancybox-inner').animate({scrollTop: $("#scrollTobasCalcul").offset().top}, 300);
           });
		}	
        if ($('#formtype').length > 0 && ($("#formtype").val()=="reservation" )) {
			$('.fancybox').fancybox({
				scrolling : 'yes',
				autoSize   : false,
				height:'645px',
				width:'80%',
				afterShow : function() {
					scrollTop = $(window).scrollTop();//582px //$(document).
				
					var htop=scrollTop+10;
					setTimeout(function(){
						$(".fancybox-opened").css('top',htop);
					},100)
					
				},

			beforeClose : function() {										
					var datadims= $('.dimensionscage').html();
					var arrdims = datadims.split('x');
					
					//$('#animal_hauteur_dim').val(parseInt(arrdims[2]));
					$('#animal_hauteur_caisse').val(parseInt(arrdims[2]));
					
					//$('#largeur_dim').val(parseInt(arrdims[1]));
					$('#largeur_caisse').val(parseInt(arrdims[1]));
					
					//$('#longueur_dim').val(parseInt(arrdims[0]));
					$('#longueur_caisse').val(parseInt(arrdims[0]));
					
          $('.mensurations').hide();
          $('.CDimention').hide();
				}  	
			});
        $('.hasDatepicker').live("click",function(){
             $(this).datepicker("show");
    
         }); 			
	
			 $('input:radio[name=etape_choix]').filter('[value="Dépôt"]').prop('checked', true);
			 $('input:radio[name=etape_choix]').filter('[value="Drop off"]').prop('checked', true);
			  $("#prise_info").hide();
			  
			          //cacher et afficher la durée selon la valeur de garde l'animal
        $('input:radio[name=etape_choix]').change(function() {
            if($(this).val()=="Dépôt" || $(this).val()=="Drop off"){
                $("#depots_info").show();
				$("#prise_info").hide();
            }else{
                $("#depots_info").hide();
				$("#prise_info").show();
            }
            }); 
			
			$('#reference').change(function() {	
			
				$.post(
					ajaxurl,{
					action: 'reference_email',
					reference:$("#reference").val(),

					},function(a){
					$("#e_mail").val(a);
				});
			});			
		}	
        if ($('#formtype').length > 0 && ($("#formtype").val()=="devis depuis la france" || $("#formtype").val()=="devis vers la france")) {

			$('.fancybox').fancybox({
				scrolling : 'yes',
				autoSize   : false,
				height:'580px',
				width:'80%',
				afterShow : function() {
					scrollTop = $(window).scrollTop();//582px //$(document).
				
					var htop=scrollTop+15;
					setTimeout(function(){
						$(".fancybox-opened").css('top',htop);
					},100)
					
				},
			beforeClose : function() {
					$('#cage_'+ $('#animalid').val()+' option[value="'+$('#cagetypeindice').val()+'"]').attr("selected","selected");
					$("select[name^='cage_']").trigger("change");
					$('#uniform-cage_'+ $('#animalid').val()+' span').html($('#cage_'+ $('#animalid').val()+' option[value="'+$('#cagetypeindice').val()+'"]').html());
					
				}  	
			});
        $('.hasDatepicker').live("click",function(){
             $(this).datepicker("show");
    
         }); 				
         $('.calculer_dimensions').live("click",function(){
             $('#animalid').val($(this).attr("rel"));
    
         }); 			

        var indice=0;    
        $('#cage_1 option').each(function() {
            if(indice>0)
            $(this).val(indice);indice++;
        });    
        
        if($("#formtype").val()=="devis depuis la france"){
            updateformule($("#formtype").val(),$("#retraitLieuPays").val()); 
        }    
        if($("#formtype").val()=="devis vers la france"){            
            updtMeansTransportFillRetrieval("lieu pays","FR"); //"FR" au lieu de "FRANCE", sinon les aéroport ne se chargent pas au lancement de la page
        }            
         $("#div2_Enlevement").hide();
         $("#div3_Livraison").hide();
         $(".dureep").hide();
         $(".indication").hide();
         //$("#dialog2").hide();
         
         
         $('#howDidYouFindUs').change(function() {
             //afficher et cacher les inputs selon le choix de la formule
             /* if($("#howDidYouFindUs").val() != "Autre" && $("#howDidYouFindUs").val() != "OTHERS"){
                     $(".indication").hide();
                }else{
                     $(".indication").show();                  
                }  */  
              if($("#howDidYouFindUs").val() == "" ){ 
                     $(".indication").hide();
                }else{
                     $(".indication").show();                 
                }               
          }); 
  
        var airFreightLabel = 'Air Freight';
        var roadFreightLabel = 'Road Freight';
        if($('body').hasClass('fr')){
          airFreightLabel =  'Fret aérien';
          roadFreightLabel =  'Fret routier';
        }
         //$('#formule option[value=PREMIUM]').attr('selected', 'selected'); 
         $('#typeExpedition').change(function() {
             
             //afficher et cacher les inputs selon le choix de la formule
                if($("#typeExpedition").val() == "ECO"){
                  
                    $("#div2_Enlevement").hide();
                    $("#div3_Livraison").hide();
                    $("#div2_Depot").show();
                    $("#div3_Retrait").show();          
                  if($("#formtype").val()!="devis depuis la france")
                    updtMeansTransportFillRetrieval("lieu pays","FR");            
                    
                }             
                if ($("#typeExpedition").val() == "EASY") {
                        
                        //date enlèvement
                        $('#input_enlv_date1').parent('span').parent('p').hide();
                        
                        $("#div2_Enlevement").show();
                        $("#div3_Retrait").show();                         
                        $("#div3_Livraison").hide();
                        $("#div2_Depot").hide();

                        if($("#formtype").val()=="devis depuis la france"){
                            $("#uniform-input_enlv_pays").html("FRANCE");
                            $("#input_enlv_pays").val("FRANCE");
                            $("#input_enlv_pays_hidden").val("FRANCE");
                            $("#input_enlv_pays").attr("disabled", true);
                         }
                        if($("#formtype").val()!="devis depuis la france"){            
                            updtMeansTransportFillRetrieval("lieu pays","FR"); 
                        }                   
                }
                if ($("#typeExpedition").val() == "EASY +" || $("#typeExpedition").val() == "PREMIUM" || $("#typeExpedition").val() == "EURONATIONAL") {
                        
                        //date enlèvement
                        $('#input_enlv_date1').parent('span').parent('p').show();
                        
                        $("#div2_Enlevement").show();
                        $("#div3_Livraison").show();
                        $("#div2_Depot").hide();
                        $("#div3_Retrait").hide();       
                        if($("#formtype").val()=="devis depuis la france"){
                            $("#uniform-input_enlv_pays").html("FRANCE");    
                            $("#input_enlv_pays").val("FRANCE");
							$("#input_enlv_pays_hidden").val("FRANCE");
                            $("#input_enlv_pays").attr("disabled", true);
                        }
                        if($("#formtype").val()=="devis vers la france"){
                            $("#uniform-input_liv_pays").html("FRANCE");
                            $("#input_liv_pays").val("FRANCE");
                            $("#input_liv_pays_hidden").val("FRANCE");
                             $("#input_liv_pays").attr("disabled", true);
                        }
                }

                if ($("#typeExpedition").val() == "EURONATIONAL") 
                {
                       $('#meansOfTransport').html('<option value="Fret routier">'+roadFreightLabel+'</option>');  

                      //seulement les pays d'europe pour EURONATIONAL!
                      var europeCountries = ['AL','AD','AT','BY','BE','BA','BG','HR','CY','CZ','DK','EE','FO','FI','FR','DE',
                      'GI','GR','HU','IS','IE','IT','LV','LI','LT','LU','MK','MT','MD','MC','NL','NO','PL','PT','RO','RU','SM',
                      'RS','SK','SI','ES','SE','CH','UA','GB','VA','RS','IM','RS','ME'];
                      $('#input_liv_pays option').hide();
                      $('#input_enlv_pays option').hide();
                      for (var key in europeCountries){
                        //console.log('#input_liv_pays option[value='+europeCountries[key]+']');
                        $('#input_liv_pays option[value='+europeCountries[key]+']').show();
                        $('#input_enlv_pays option[value='+europeCountries[key]+']').show();
                      }
                      
                }else
                {
                  //tous les pays pour les autres formules que EURONATIONAL !
                  $('#input_liv_pays option').show();
                  $('#input_enlv_pays option').show();
                  
                	$('#meansOfTransport').html('<option value="Fret aérien">'+airFreightLabel+'</option>'); /*<option value="Fret routier">Fret routier</option>*/
                }
                
                $('#meansOfTransport option:first').click();//auto-selection de la premiere valeur du select "moyen de transport"
                
                updateformule($("#formtype").val(),$("#retraitLieuPays").val());
                
        });
        
        //MAJ auto du moyen de transport au chargement
        if($('#typeExpedition').val() == 'EURONATIONAL')
          $('#meansOfTransport').html('<option value="Fret routier">'+roadFreightLabel+'</option>');  
        else
          $('#meansOfTransport').html('<option value="Fret aérien">'+airFreightLabel+'</option>'); 

        //cacher et afficher la durée selon la valeur de garde l'animal
        $('.garde').change(function() {
            if($(this).val()=="oui" || $(this).val()=="yes"){
                $(".dureep").show();
            }else{
                $(".dureep").hide();
            }
            });                
 var counter=1;           
////////////////////////////////////////////////////////////////////////////

//Dupliquer les champs de la zone Animal
$("#btn_generer").click(function(){
    if(6<=counter)
        $("#dialog2").dialog("open");
    else{
        counter++;
        $("#total_hidden").val(counter);
        // var aqq=$("<div id='div_"+counter+"' class='div_generer' style='display:none;'> <h3>Animal "+counter+"</h3>"+LABEL_POID+"(kg)</td><td><input type='text' id='poid_"+counter+"' name='poid_"+counter+"' value='' class='required number' title=' *'/></td><td>"+ LABEL_AGE+""+LABEL_AGE2+"</td><td><input type='text' id='age_"+counter+"' name='age_"+counter+"' value='' class='required number' title=' *'/></td></tr><tr><td colspan='3'>"+LABEL_PASSPORT+"</td><td><label class='hand' for='passport_"+counter+"-oui'>"+SELECT_PASSPORT1+"<input class='small' type='radio' id='passport_"+counter+"-oui' name='passport_"+counter+"' value='oui' /></label><label class='hand' for='passport_"+counter+"-non'>"+SELECT_PASSPORT2+"<input class='small' type='radio' id='passport_"+ counter+"-non' name='passport_"+counter+"' value='non' checked='checked'/></label></td></tr><tr><td colspan='3'>"+LABEL_RACE+"</td><td><input type='text' id='race_"+counter+"' name='race_"+counter+"' value='' class='long required' title=' *'/></td></tr><tr><td colspan='3'>"+LABEL_CAGE+"</td><td><select class='required' title=' *' id='cage_"+counter+"' name='cage_"+counter+"'>"+SELECT_CAGE+"</select><input type='hidden' id='volume_"+counter+"' name='volume_"+counter+"'/></td></tr></table> </div>"); 
        if($("#current_language").val()=="en"){
            var a = $('<div id="div_'+counter+'" class="div_generer"><h3>Pet '+counter+'</h3><p><label for="poid_'+counter+'">Weight(kg) *</label><br><span class="wpcf7-form-control-wrap poid_'+counter+'"><input type="text" name="poid_'+counter+'" value="" class="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number isnumber" id="poid_'+counter+'" aria-required="true" aria-invalid="false"></span> </p><p><label for="age">Age(ans) *</label><br><span class="wpcf7-form-control-wrap age_'+counter+'"><input type="text" name="age_'+counter+'" value="" class="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number isnumber " id="age_'+counter+'" aria-required="true" aria-invalid="false"></span> </p><p><label for="type-race">Pet type and breed *</label><br><span class="wpcf7-form-control-wrap race_'+counter+'"><input type="text" name="race_'+counter+'" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required race_'+counter+'" id="race_'+counter+'" aria-required="true" aria-invalid="false"></span> </p><p><label for="dimension-cage">Cage dimension *</label><span class="wpcf7-form-control-wrap cage_'+counter+'"><select class="required valid" title=" *" id="cage_'+counter+'" name="cage_'+counter+'"><option>---</option><option value="1">Cage 1: 54x41x39 cm</option><option value="2">Cage 2: 69x51x49 cm</option><option value="3">Cage 3: 82x56x59 cm</option><option value="4">Cage 4: 92x61x66 cm</option><option value="5">Cage 5: 102x69x77 cm</option><option value="6">Cage 7: 122x81x89 cm</option></select></span><a class="calculer_dimensions fancybox" href="#inline1" title="Calculator" rel="'+counter+'">Calculate the dimensions of the cage</a><input type="hidden" id="volume_'+counter+'" name="volume_'+counter+'" /><input type="hidden" id="cagename_'+counter+'" name="cagename_'+counter+'" /></p></div>');
        }else{
            var a = $('<div id="div_'+counter+'" class="div_generer"><h3>Animal '+counter+'</h3><p><label for="poid_'+counter+'">Poid(kg) *</label><br><span class="wpcf7-form-control-wrap poid_'+counter+'"><input type="text" name="poid_'+counter+'" value="" class="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number isnumber" id="poid_'+counter+'" aria-required="true" aria-invalid="false"></span> </p><p><label for="age">Age(ans) *</label><br><span class="wpcf7-form-control-wrap age_'+counter+'"><input type="text" name="age_'+counter+'" value="" class="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number isnumber " id="age_'+counter+'" aria-required="true" aria-invalid="false"></span> </p><p><label for="type-race">Type et race de l\'animal *</label><br><span class="wpcf7-form-control-wrap race_'+counter+'"><input type="text" name="race_'+counter+'" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required race_'+counter+'" id="race_'+counter+'" aria-required="true" aria-invalid="false"></span> </p><p><label for="dimension-cage">Dimension de la cage *</label><span class="wpcf7-form-control-wrap cage_'+counter+'"><select class="required valid" title=" *" id="cage_'+counter+'" name="cage_'+counter+'"><option>---</option><option value="1">Cage 1: 54x41x39 cm</option><option value="2">Cage 2: 69x51x49 cm</option><option value="3">Cage 3: 82x56x59 cm</option><option value="4">Cage 4: 92x61x66 cm</option><option value="5">Cage 5: 102x69x77 cm</option><option value="6">Cage 7: 122x81x89 cm</option></select></span><a class="calculer_dimensions fancybox" href="#inline1" title="Calculator" rel="'+counter+'">Calculer les dimensions de la cage</a><input type="hidden" id="volume_'+counter+'" name="volume_'+counter+'" /><input type="hidden" id="cagename_'+counter+'" name="cagename_'+counter+'" /></p></div>');
        }
        $("#div_colis_generer").append(a);
        $("#div_"+counter+"").show("blind",{});
		//$('#cage_'+counter).uniform();
		$uniformed = $(".div_generer ").find("input, textarea, select, button, a.uniformTest");
		$uniformed.uniform();
		 $( ".isnumber" ).spinner();
    }
});            

//supprimer le dernier animal

$("#btn_sup").click(function(){1<counter&&($("#div_"+counter+"").hide("blind",{}),$("#div_"+counter+"").remove(),counter--,$("#total_hidden").val(counter),majCalcul())});


//Mise à jour du calcule au changement du dimenssion de la cage
$("select[name^='cage_']").live("change",function(){
    var a=$(this).attr("name").length;
    var b=$(this).attr("name").indexOf("_");
    a=$(this).attr("name").substring(b+1,a);
   $("#cagename_"+a).val($("#cage_"+a+" option:selected").text());
    b=$("#cage_"+a).val();
    
    c=0;
    1==b?c=84240:2==b?c=172431:3==b?c=270928:4==b?c=358800:5==b?c=527850:6==b&&(c=854800);
    
    c/=1E6;
    
    isNaN(c)||($("#volume_"+a).val(c),majCalcul())
});



//Calcul du poid total au changement des poids
$("input[name^='poid_']").live("keyup",function(){
    //var a=$("input[name^='poid_']").sum(),a=a.toFixed(2);
    var a=calculateSum('poid_'),a=a.toFixed(2);
    $("#poidtotal").val(a)
});
 
$("#depotLieuPays").change(function(){
	updateformule($("#formtype").val(),$("#depotLieuPays").val());
	$("#uniform-depotLieuAero span").html("---");
	});
$("#retraitLieuPays").change(function(){updtMeansTransportFillRetrieval("lieu pays",$("#retraitLieuPays").val())});

$("#meansOfTransport").change(function(){ updtMeansTransportFillRetrieval("transport",$("#retraitLieuPays").val())});


////////////////////////////////////////////////////////////////////////////            
/*
$("#retraitLieuDate2").change(function(){
    $("#input_liv_date2").val($("#retraitLieuDate2").val());
    $("#date_liv").val($("#retraitLieuDate2").val());
});
$("#input_liv_date2").change(function(){
    $("#retraitLieuDate2").val($("#input_liv_date2").val());
    $("#date_liv").val($("#input_liv_date2").val());
});
$("#input_enlv_ville").bind("keydown",function(a){
    a.keyCode===$.ui.keyCode.TAB&&$(this).data("autocomplete").menu.active&&a.preventDefault()}).autocomplete({
        source:ajaxurl, 
        minLength:2,
        select:function(a,b){
            $("#input_enlv_codepostal").val(b.item.cp);
            this.value=b.item.ville;
            $("#input_enlv_codepostal").effect("highlight",{},500);
            return!1
        }
    });*/
/*	$("#input_enlv_codepostal").tokenInput(ajaxurl+"?action=cp_list&queryParam=cp",{method:"post",queryParam:"cp"});*/
/*$("#input_enlv_codepostal").bind("keydown",function(a){
    a.keyCode===$.ui.keyCode.TAB&&$(this).data("autocomplete").menu.active&&a.preventDefault()}).autocomplete({
        source:function (request, response) {
			$.post(ajaxurl,{action: 'cp_list',cp:$("#input_enlv_codepostal").val()}, request, response);
			},
        minLength:2,
        select:function(a,b){
            $("#input_enlv_ville").val(b.item.ville);
            this.value=b.item.cp;
            $("#input_enlv_ville").effect("highlight", {},500);
            return!1
        },
      open: function() {
        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }		
    });*/
  
    function log( message ) {
      $( "<div>" ).text( message ).prependTo( "#log" );
      $( "#log" ).scrollTop( 0 );
    }
    
























if ($('#input_enlv_pays_hidden').val() == 'FRANCE') {
    $( "#input_enlv_ville" ).autocomplete({
      source: function( request, response ) {
		  
        $.ajax({
          url: siteurl+"/cp.php",
          dataType: "jsonp",
          data: {
            q: request.term,
			ville : 1
          },
          success: function( data ) {
            response( data );
          }
        });
      },
      minLength: 3,
      select: function( event, ui ) {
		  $("#input_enlv_codepostal").val(ui.item.id);
		  this.value=ui.item.label;
		return!1
		  
		  
      },
      open: function() {
        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }
    });
};
















if ($('#input_liv_pays_hidden').val() == 'FRANCE') {
    $( "#input_liv_ville" ).autocomplete({
		  			source: function( request, response ) {
			        $.ajax({
			          url: siteurl+"/cp.php",
			          dataType: "jsonp",
			          data: {
			            q: request.term,
						ville : 1
			          },
			          success: function( data ) {
			            response( data );
			          }
			        });
			      },
			      minLength: 3,
			      select: function( event, ui ) {
					  $("#input_liv_codepostal").val(ui.item.id);
					  this.value=ui.item.label;
					return!1
					  
			      },
			      open: function() {
			        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
			      },
			      close: function() {
			        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
			      }
    });

};














if ($('#input_enlv_pays_hidden').val() == 'FRANCE') {

    $( "#input_enlv_codepostal" ).autocomplete({
      source: function( request, response ) {
		  
        $.ajax({
          url: siteurl+"/cp.php",
          dataType: "jsonp",
          data: {
            q: request.term
          },
          success: function( data ) {
            response( data );
          }
        });
      },
      minLength: 3,
      select: function( event, ui ) {
		  $("#input_enlv_ville").val(ui.item.label);
		  this.value=ui.item.id;
		return!1
		  
		  
      },
      open: function() {
        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }
    });
};
 





















if ($('#input_liv_pays_hidden').val() == 'FRANCE') {
    $( "#input_liv_codepostal" ).autocomplete({
      source: function( request, response ) {
		  
        $.ajax({
          url: siteurl+"/cp.php",
          dataType: "jsonp",
          data: {
            q: request.term
          },
          success: function( data ) {
            response( data );
          }
        });
      },
      minLength: 3,
      select: function( event, ui ) {
		  $("#input_liv_ville").val(ui.item.label);
		  this.value=ui.item.id;
		return!1
		  
		  
      },
      open: function() {
        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }
    });
};














/*            
 $("#input_enlv_codepostal").change(function(){
     alert(ajaxurl+"?action=cp_list&queryParam=cp");
   $("#input_enlv_codepostal").tokenInput(ajaxurl+"?action=cp_list&queryParam=cp",{method:"post",queryParam:"cp"});  
 });
  */
     }
        //Hide the field initially
        $("#autre").hide();
 
        //Show the text field only when the third option is chosen - this doesn't
        $('#objet').change(function() {
                if ($("#objet").val() == "Autre") {
                        $("#autre").show();
                }
                else {
                        $("#autre").hide();
                }
        });
        
        //Hide the field initially
        $("#other").hide();
 
        //Show the text field only when the third option is chosen - this doesn't
        $('#subject').change(function() {
                if ($("#subject").val() == "Other") {
                        $("#other").show();
                }
                else {
                        $("#other").hide();
                }
        });      
        if($('input:radio[name=rappeler]').length > 0){
         $('input:radio[name=rappeler]').filter('[value=yes]').prop('checked', true);
         $('input:radio[name=rappeler]').filter('[value=oui]').prop('checked', true);
        }
        
		$(window).load(function() {
			if($('#formtype')[0])
			{
				if($('#formtype').val() == 'devis vers la france')
				{
					$('#retraitLieuPays').val('FR').change();
					//alert('ee');
					$('#retraitLieuPays').parents('p').hide();
				}
			}
		}); 
        
});

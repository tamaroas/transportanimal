jQuery(document).ready(function() {

	if(jQuery("#title").length > 0){
		jQuery("#title").attr("maxlength","80");	
	}
	
	/*


  
 jQuery('<div id="chars"></div>').insertAfter('#title')


var elem = jQuery("#chars");



// Qui sommes nous

if(jQuery("#title").size())
{
    jQuery("#title").limiter(140, elem);
}
 
jQuery.fn.extend( {

        limiter: function(limit, elem) {

            jQuery(this).on("keyup focus", function() {

                setCount(this, elem);

            });

            function setCount(srcc, elem) {

                var chars = srcc.value.length;

                if (chars > limit) {

                    srcc.value = srcc.value.substr(0, limit);

                    chars = limit;
                    console.log('limit')

                }

                elem.html( limit - chars );

            }

            setCount(jQuery(this)[0], elem);

        }

    });
*/
});
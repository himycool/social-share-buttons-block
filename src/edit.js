/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	withSelect
} = wp.data; // import { withSelect } from '@wordpress/data'
const { 
	IconButton, 
	Panel,
	PanelBody,
	TextControl,
	SelectControl,
	CheckboxControl,
	RadioControl,
	Placeholder,
	Toolbar, 
	withNotices } = wp.components; // import { IconButton, PanelBody, RangeControl, ToggleControl, Toolbar, withNotices } from '@wordpress/components';
const { Fragment } = wp.element; // import { Fragment } from '@wordpress/element';
const { 
	BlockControls,
	InspectorControls,
	BlockAlignmentToolbar,
	MediaUpload,
	AlignmentToolbar,
} = wp.blockEditor; // Import * from @wordpress/blockEditor 

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, isSelected, className, noticeOperations, noticeUI  } ) {
        
        const { url, title, align, width, height, contentAlign, id, currentPagePermalink, selectedSocialMediaChannels, showButtonIcon, showButtonText, socialMediaChannels } = attributes;
		const getCurrentPagePermalink = () => setAttributes( { currentPagePermalink: wp.data.select('core/editor').getPermalink() } ); getCurrentPagePermalink();
		const updateContentAlign = ( nextAlign ) => setAttributes( { contentAlign: nextAlign } );
		
		const capitalizeFirstLetter = (string) => { return string[0].toUpperCase() + string.slice(1); }
                
                const updateSelectedSocialMediaChannels = ( selectedSocialMediaChannel ) => { // if selectedChannel exists in selectedSocialMediaChannels remove it, otherwise add it
			
			
			const selectedSocialMediaChannelText = selectedSocialMediaChannel[0];
			
			const addSelectedChannelToArray = selectedSocialMediaChannels.concat( selectedSocialMediaChannelText ); // Avoided using .push because it mutates original 'selectedSocialMediaChannels' .NB: Also avoid .pop
			
			const showButton = {};
			showButton[ selectedSocialMediaChannelText ] = true;
			showButton[ 'selectedSocialMediaChannels' ] = addSelectedChannelToArray;
			
			const hideButton = {};
			hideButton[ selectedSocialMediaChannelText ] = false;
			hideButton[ 'selectedSocialMediaChannels' ] = selectedSocialMediaChannels;
			
			if( selectedSocialMediaChannels.includes( selectedSocialMediaChannelText ) ){  // Check whether selected social media channel exists in selectedSocialMediaChannels
				selectedSocialMediaChannels.splice( selectedSocialMediaChannels.indexOf( selectedSocialMediaChannelText ) , 1 ); // Remove selected social media channel from selectedSocialMediaChannels
				setAttributes( hideButton ); // Update attributes to hide button
			}else{

				// Add selected social media channel to selectedSocialMediaChannels using 'addSelectedChannelToArray' within 'showButton'
				
				setAttributes( showButton );  // Update attributes to show button
				
			}
			
		};
                
                const classes = classnames( 
			'bttn-primary', 
			'hms-social-share-buttons-settings'
		);
        
                const SocialShareButtons = ({socialMediaChannels}) => ( // loop through 'socialMediaChannels' and return selected 'SocialShareButtons'. <button> 'key' attribute is important!
			
			<Fragment>
				{socialMediaChannels.map(socialMediaChannel => (
					
					<Fragment>
					{ attributes[socialMediaChannel.name.toLowerCase()] &&
					<button 
						className={ classes + ' hms-social-share-buttons-'+socialMediaChannel.name.toLowerCase() }  
						key={ socialMediaChannel.name.toLowerCase() }
						onClick={ () => { ( socialMediaChannel.name === 'Print') ? socialMediaChannel.link : window.open( socialMediaChannel.link.replace("urlToShare", currentPagePermalink) , "_blank" ) } }>
							{ showButtonIcon && <i className={ socialMediaChannel.icon }></i> }
							{ showButtonText && __( '\u00A0 \u00A0' + socialMediaChannel.name ) }
					</button> 
					}
					</Fragment>
					
				))}
			</Fragment>	
			
		);
        
        const controls = ( // Set Block and Inspector Controls
			<Fragment>
			
				<BlockControls>
					<AlignmentToolbar
						value={ contentAlign }
						onChange={ updateContentAlign }
					/>
				</BlockControls>
				
				<InspectorControls>
				
					<PanelBody title={ __( 'Social Share Channels' ) }> 
						<SelectControl
							multiple
							label={ __( 'Select Social Media Channels' ) }
							value={ selectedSocialMediaChannels }
							onChange={ updateSelectedSocialMediaChannels }
							options={ socialMediaChannels.map(socialMediaChannel => {
				
											const label = __( ( socialMediaChannels.indexOf(socialMediaChannel) + 1 ) + '. ' + socialMediaChannel.name );
											const value = socialMediaChannel.name.toLowerCase();
											
											return { label, value }
											
										}) 
									}
							
						/>
					</PanelBody>
					
				</InspectorControls>
				
			</Fragment>
		);
		
		
		if ( ! selectedSocialMediaChannels.length ) { // Show placeholder if no selected Social Media Channels
			
			return ( 
				<Fragment>
					{ controls }
					<Placeholder
						icon="share"
						label="Please use the Block Inspector section to Select the Share Buttons you want to add here."
					/>
				</Fragment>
			);
			
		}
		
		return ( // Return Social Share Butons with selected block inspector settings and block controls. 
			<Fragment>
				{ controls }
				<div style={{ 'text-align': contentAlign }} >
					
					<SocialShareButtons socialMediaChannels={socialMediaChannels} /> 
					
				</div>
			</Fragment>
		);
        
}

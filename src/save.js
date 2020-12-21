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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes, className }) {
	const { url, title, align, width, height, contentAlign, id, currentPagePermalink, selectedSocialMediaChannels, showButtonIcon, showButtonText, socialMediaChannels } = attributes;
		
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
						onClick={ ( socialMediaChannel.name === 'Print') ? socialMediaChannel.link : "window.open('" + socialMediaChannel.link.replace('urlToShare', currentPagePermalink) + "', '_blank')" }>
							{ showButtonIcon && <i className={ socialMediaChannel.icon }></i> }
							{ showButtonText && __( '\u00A0 \u00A0' + socialMediaChannel.name ) }
					</button> 
					}
					</Fragment>
					
				))}
			</Fragment>	
			
		); 
		
		return (
			<div style={{ 'text-align': contentAlign }} >
					
				<SocialShareButtons socialMediaChannels={socialMediaChannels} />
				
			</div>
		);
}

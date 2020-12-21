/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

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
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

const blockAttributes = {
	title: {
		type: 'array',
		source: 'children',
		selector: 'p',
	},
	url: {
		type: 'string',
	},
	align: {
		type: 'string',
	},
	width: {
		type: 'number',
	},
	height: {
		type: 'number',
	},
	contentAlign: {
		type: 'string',
		default: 'center',
	},
	id: {
		type: 'number',
	},
	currentPagePermalink: {
		type: 'string',
	},
	selectedSocialMediaChannels: {
		type: 'array',
		default: [],
	},
	showButtonIcon: { 
		type: 'boolean',
		default: true,
	},
	showButtonText: {
		type: 'boolean',
		default: true,
	},
	facebook: {
		type: 'boolean',
		default: false,
	},
	twitter: {
		type: 'boolean',
		default: false,
	},
	messenger: {
		type: 'boolean',
		default: false,
	},
	linkedin: {
		type: 'boolean',
		default: false,
	},
	pinterest: {
		type: 'boolean',
		default: false,
	},
	reddit: {
		type: 'boolean',
		default: false,
	},
	email: {
		type: 'boolean',
		default: false,
	},
	gmail: {
		type: 'boolean',
		default: false,
	},
	yahoo: {
		type: 'boolean',
		default: false,
	},
	print: {
		type: 'boolean',
		default: false,
	},
	blogger: {
		type: 'boolean',
		default: false,
	},
	flipboard: {
		type: 'boolean',
		default: false,
	},
	whatsapp: {
		type: 'boolean',
		default: false,
	},
	telegram: {
		type: 'boolean',
		default: false,
	},
	wechat: {
		type: 'boolean',
		default: false,
	},
	socialMediaChannels: {
		type: 'array',
		default: [
			{
				name: 'Facebook',
				link: 'https://www.facebook.com/sharer.php?u=urlToShare',
				icon: 'fab fa-facebook-f'
			},
			{
				name: 'Twitter',
				link: 'https://twitter.com/intent/tweet?url=urlToShare',
				icon: 'fab fa-twitter'
			},
			{
				name: 'Messenger', 
				link: 'https://www.facebook.com/dialog/send?link=urlToShare&app_id=408838532975140&redirect_uri=urlToShare',
				icon: 'fab fa-facebook-messenger'
			},
			{
				name: 'Linkedin', 
				link: 'https://www.linkedin.com/shareArticle?url=urlToShare',
				icon: 'fab fa-linkedin-in'
			},
			{
				name: 'Pinterest',
				link: 'http://pinterest.com/pin/create/button/?url=urlToShare',
				icon: 'fab fa-pinterest-p'
			},
			{
				name: 'Reddit', 
				link: 'https://reddit.com/submit?url=urlToShare',
				icon: 'fab fa-reddit-alien'
			},
			{
				name: 'Email',
				link: 'mailto:?body=urlToShare',
				icon: 'fas fa-envelope'
			},
			{
				name: 'Gmail',
				link: 'https://mail.google.com/mail/?view=cm&body=urlToShare',
				icon: 'fas fa-envelope-square'
			},
			{
				name: 'Yahoo',
				link: 'http://compose.mail.yahoo.com/?body=urlToShare',
				icon: 'fab fa-yahoo'
			},
			{
				name: 'Print',
				link: 'window.print()' ,
				icon: 'fas fa-print'
			},
			{
				name: 'Blogger', 
				link: 'https://www.blogger.com/blog-this.g?u=urlToShare',
				icon: 'fab fa-blogger-b'
			},
			{
				name: 'Flipboard', 
				link: 'https://share.flipboard.com/bookmarklet/popout?v=2&url=urlToShare',
				icon: 'fab fa-flipboard'
			},
			{
				name: 'WhatsApp',
				link: 'https://web.whatsapp.com/send?text=urlToShare',
				icon: 'fab fa-whatsapp'
			},
			{
				name: 'Telegram',
				link: 'https://t.me/share/url?url=urlToShare', 
				icon: 'fab fa-telegram'
			},
			{
				name: 'WeChat',
				link: 'https://chart.apis.google.com/chart?cht=qr&chs=154x154&chld=Q%7C0&chl=urlToShare',
				icon: 'fab fa-weixin'
			}
		]
	}

};

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'create-block/social-share-buttons', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Social Share Buttons', 'social-share-buttons' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Social share button for article detail page – build step required.',
		'social-share-buttons'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'widgets',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'share',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
        
        example: {
		attributes: {
			facebook: true, twitter: true, linkedin: true, pinterest: true, reddit: true, gmail: true, yahoo: true, whatsapp:true, telegram: true,
			selectedSocialMediaChannels: [
				"facebook", "twitter", "linkedin", "pinterest", "reddit", "gmail", "yahoo", "whatsapp", "telegram"
			]	
		},
	},
        
        attributes: blockAttributes,  // Block attributes for editing in the block inspector.
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );

import schemapack from 'schemapack';


const blockMapSchema = [{
  key: "string",
  type: "string",
  characterList: [
    {
      entity: "string",
      style: ["string"]
    }
  ],
  data: "string",
  depth:'uint8'
}]
const entityMapSchema = [{
  type: "string",
  mutability: "string",
  data: {
    attributes: {"accept":"string","acceptCharset":"string","accessKey":"string","action":"string","allowFullScreen":"string","allowTransparency":"string","alt":"string","as":"string","async":"string","autoComplete":"string","autoPlay":"string","capture":"string","cellPadding":"string","cellSpacing":"string","charSet":"string","challenge":"string","checked":"string","cite":"string","classID":"string","className":"string","cols":"string","colSpan":"string","content":"string","contextMenu":"string","controls":"string","coords":"string","crossOrigin":"string","data":"string","dateTime":"string","default":"string","defer":"string","dir":"string","disabled":"string","download":"string","draggable":"string","encType":"string","form":"string","formAction":"string","formEncType":"string","formMethod":"string","formNoValidate":"string","formTarget":"string","frameBorder":"string","headers":"string","height":"string","hidden":"string","high":"string","href":"string","hrefLang":"string","htmlFor":"string","httpEquiv":"string","id":"string","inputMode":"string","integrity":"string","is":"string","keyParams":"string","keyType":"string","kind":"string","label":"string","lang":"string","list":"string","loop":"string","low":"string","manifest":"string","marginHeight":"string","marginWidth":"string","max":"string","maxLength":"string","media":"string","mediaGroup":"string","method":"string","min":"string","minLength":"string","multiple":"string","muted":"string","name":"string","nonce":"string","noValidate":"string","open":"string","optimum":"string","pattern":"string","placeholder":"string","playsInline":"string","poster":"string","preload":"string","profile":"string","radioGroup":"string","readOnly":"string","referrerPolicy":"string","rel":"string","required":"string","reversed":"string","role":"string","rows":"string","rowSpan":"string","sandbox":"string","scope":"string","scoped":"string","scrolling":"string","seamless":"string","selected":"string","shape":"string","size":"string","sizes":"string","slot":"string","span":"string","spellCheck":"string","src":"string","srcDoc":"string","srcLang":"string","srcSet":"string","start":"string","step":"string","style":"string","summary":"string","tabIndex":"string","target":"string","title":"string","type":"string","useMap":"string","value":"string","width":"string","wmode":"string","wrap":"string","about":"string","datatype":"string","inlist":"string","prefix":"string","property":"string","resource":"string","typeof":"string","vocab":"string","autoCapitalize":"string","autoCorrect":"string","autoSave":"string","color":"string","itemProp":"string","itemScope":"string","itemType":"string","itemID":"string","itemRef":"string","results":"string","security":"string","unselectable":"string"},
    style: {"alignContent":"string","alignItems":"string","alignSelf":"string","alignmentAdjust":"string","alignmentBaseline":"string","all":"string","alt":"string","animation":"string","animationDelay":"string","animationDirection":"string","animationDuration":"string","animationFillMode":"string","animationIterationCount":"string","animationName":"string","animationPlayState":"string","animationTimingFunction":"string","azimuth":"string","backfaceVisibility":"string","background":"string","backgroundAttachment":"string","backgroundClip":"string","backgroundColor":"string","backgroundImage":"string","backgroundOrigin":"string","backgroundPosition":"string","backgroundRepeat":"string","backgroundSize":"string","backgroundBlendMode":"string","baselineShift":"string","bleed":"string","bookmarkLabel":"string","bookmarkLevel":"string","bookmarkState":"string","border":"string","borderColor":"string","borderStyle":"string","borderWidth":"string","borderBottom":"string","borderBottomColor":"string","borderBottomStyle":"string","borderBottomWidth":"string","borderLeft":"string","borderLeftColor":"string","borderLeftStyle":"string","borderLeftWidth":"string","borderRight":"string","borderRightColor":"string","borderRightStyle":"string","borderRightWidth":"string","borderTop":"string","borderTopColor":"string","borderTopStyle":"string","borderTopWidth":"string","borderCollapse":"string","borderImage":"string","borderImageOutset":"string","borderImageRepeat":"string","borderImageSlice":"string","borderImageSource":"string","borderImageWidth":"string","borderRadius":"string","borderBottomLeftRadius":"string","borderBottomRightRadius":"string","borderTopLeftRadius":"string","borderTopRightRadius":"string","borderSpacing":"string","bottom":"string","boxDecorationBreak":"string","boxShadow":"string","boxSizing":"string","boxSnap":"string","breakAfter":"string","breakBefore":"string","breakInside":"string","bufferedRendering":"string","captionSide":"string","clear":"string","clearSide":"string","clip":"string","clipPath":"string","clipRule":"string","color":"string","colorAdjust":"string","colorCorrection":"string","colorInterpolation":"string","colorInterpolationFilters":"string","colorProfile":"string","colorRendering":"string","columnFill":"string","columnGap":"string","columnRule":"string","columnRuleColor":"string","columnRuleStyle":"string","columnRuleWidth":"string","columnSpan":"string","columns":"string","columnCount":"string","columnWidth":"string","contain":"string","content":"string","counterIncrement":"string","counterReset":"string","counterSet":"string","cue":"string","cueAfter":"string","cueBefore":"string","cursor":"string","direction":"string","display":"string","displayInside":"string","displayOutside":"string","displayExtras":"string","displayBox":"string","dominantBaseline":"string","elevation":"string","emptyCells":"string","enableBackground":"string","isolation":"string","fill":"string","fillOpacity":"string","fillRule":"string","filter":"string","float":"string","floatDeferColumn":"string","floatDeferPage":"string","floatOffset":"string","floatWrap":"string","flowInto":"string","flowFrom":"string","flex":"string","flexBasis":"string","flexGrow":"string","flexShrink":"string","flexFlow":"string","flexDirection":"string","flexWrap":"string","floodColor":"string","floodOpacity":"string","font":"string","fontFamily":"string","fontSize":"string","fontStretch":"string","fontStyle":"string","fontWeight":"string","fontFeatureSettings":"string","fontKerning":"string","fontLanguageOverride":"string","fontSizeAdjust":"string","fontSynthesis":"string","fontVariant":"string","fontVariantAlternates":"string","fontVariantCaps":"string","fontVariantEastAsian":"string","fontVariantLigatures":"string","fontVariantNumeric":"string","fontVariantPosition":"string","footnotePolicy":"string","glyphOrientationHorizontal":"string","glyphOrientationVertical":"string","grid":"string","gridAutoFlow":"string","gridAutoColumns":"string","gridAutoRows":"string","gridTemplate":"string","gridTemplateAreas":"string","gridTemplateColumns":"string","gridTemplateRows":"string","gridArea":"string","gridColumn":"string","gridColumnStart":"string","gridColumnEnd":"string","gridRow":"string","gridRowStart":"string","gridRowEnd":"string","hangingPunctuation":"string","height":"string","hyphenateCharacter":"string","hyphenateLimitChars":"string","hyphenateLimitLast":"string","hyphenateLimitLines":"string","hyphenateLimitZone":"string","hyphens":"string","icon":"string","imageOrientation":"string","imageResolution":"string","imageRendering":"string","ime":"string","imeAlign":"string","imeMode":"string","imeOffset":"string","imeWidth":"string","initialLetters":"string","inlineBoxAlign":"string","justifyContent":"string","justifyItems":"string","justifySelf":"string","kerning":"string","left":"string","letterSpacing":"string","lightingColor":"string","lineBoxContain":"string","lineBreak":"string","lineGrid":"string","lineHeight":"string","lineSlack":"string","lineSnap":"string","listStyle":"string","listStyleImage":"string","listStylePosition":"string","listStyleType":"string","margin":"string","marginBottom":"string","marginLeft":"string","marginRight":"string","marginTop":"string","marker":"string","markerEnd":"string","markerMid":"string","markerPattern":"string","markerSegment":"string","markerStart":"string","markerKnockoutLeft":"string","markerKnockoutRight":"string","markerSide":"string","marks":"string","marqueeDirection":"string","marqueePlayCount":"string","marqueeSpeed":"string","marqueeStyle":"string","mask":"string","maskImage":"string","maskRepeat":"string","maskPosition":"string","maskClip":"string","maskOrigin":"string","maskSize":"string","maskBox":"string","maskBoxOutset":"string","maskBoxRepeat":"string","maskBoxSlice":"string","maskBoxSource":"string","maskBoxWidth":"string","maskType":"string","maxHeight":"string","maxLines":"string","maxWidth":"string","minHeight":"string","minWidth":"string","mixBlendMode":"string","navDown":"string","navIndex":"string","navLeft":"string","navRight":"string","navUp":"string","objectFit":"string","objectPosition":"string","offsetAfter":"string","offsetBefore":"string","offsetEnd":"string","offsetStart":"string","opacity":"string","order":"string","orphans":"string","outline":"string","outlineColor":"string","outlineStyle":"string","outlineWidth":"string","outlineOffset":"string","overflow":"string","overflowX":"string","overflowY":"string","overflowStyle":"string","overflowWrap":"string","padding":"string","paddingBottom":"string","paddingLeft":"string","paddingRight":"string","paddingTop":"string","page":"string","pageBreakAfter":"string","pageBreakBefore":"string","pageBreakInside":"string","paintOrder":"string","pause":"string","pauseAfter":"string","pauseBefore":"string","perspective":"string","perspectiveOrigin":"string","pitch":"string","pitchRange":"string","playDuring":"string","pointerEvents":"string","position":"string","quotes":"string","regionFragment":"string","resize":"string","rest":"string","restAfter":"string","restBefore":"string","richness":"string","right":"string","rubyAlign":"string","rubyMerge":"string","rubyPosition":"string","scrollBehavior":"string","scrollSnapCoordinate":"string","scrollSnapDestination":"string","scrollSnapPointsX":"string","scrollSnapPointsY":"string","scrollSnapType":"string","shapeImageThreshold":"string","shapeInside":"string","shapeMargin":"string","shapeOutside":"string","shapePadding":"string","shapeRendering":"string","size":"string","speak":"string","speakAs":"string","speakHeader":"string","speakNumeral":"string","speakPunctuation":"string","speechRate":"string","stopColor":"string","stopOpacity":"string","stress":"string","stringSet":"string","stroke":"string","strokeDasharray":"string","strokeDashoffset":"string","strokeLinecap":"string","strokeLinejoin":"string","strokeMiterlimit":"string","strokeOpacity":"string","strokeWidth":"string","tabSize":"string","tableLayout":"string","textAlign":"string","textAlignAll":"string","textAlignLast":"string","textAnchor":"string","textCombineUpright":"string","textDecoration":"string","textDecorationColor":"string","textDecorationLine":"string","textDecorationStyle":"string","textDecorationSkip":"string","textEmphasis":"string","textEmphasisColor":"string","textEmphasisStyle":"string","textEmphasisPosition":"string","textEmphasisSkip":"string","textHeight":"string","textIndent":"string","textJustify":"string","textOrientation":"string","textOverflow":"string","textRendering":"string","textShadow":"string","textSizeAdjust":"string","textSpaceCollapse":"string","textSpacing":"string","textTransform":"string","textUnderlinePosition":"string","textWrap":"string","top":"string","touchAction":"string","transform":"string","transformBox":"string","transformOrigin":"string","transformStyle":"string","transition":"string","transitionDelay":"string","transitionDuration":"string","transitionProperty":"string","transitionTimingFunction":"string","unicodeBidi":"string","vectorEffect":"string","verticalAlign":"string","visibility":"string","voiceBalance":"string","voiceDuration":"string","voiceFamily":"string","voicePitch":"string","voiceRange":"string","voiceRate":"string","voiceStress":"string","voiceVolumn":"string","volume":"string","whiteSpace":"string","widows":"string","width":"string","willChange":"string","wordBreak":"string","wordSpacing":"string","wordWrap":"string","wrapFlow":"string","wrapThrough":"string","writingMode":"string","zIndex":"string"}
  }
}]
export default {
  blockMapSchema: schemapack.build(blockMapSchema,false),
  entityMapSchema: schemapack.build(entityMapSchema, false)
}

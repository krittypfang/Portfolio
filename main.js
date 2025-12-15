// main.js - เก็บ React Components และ UX Logic

const { useState, useEffect, useRef } = React;

// --- Icons ---
const Icon = ({ name, size = 24, className }) => {
    if (!window.lucide) return <span className={className}>Icon</span>;
    useEffect(() => { lucide.createIcons(); }, [name]);
    return <i data-lucide={name} className={className} width={size} height={size}></i>;
};

// --- Custom Hook for Carousel Scroll ---
const useCarouselScroll = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 1);
            setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
        }
    };

    useEffect(() => {
        checkScroll();
        const timer = setTimeout(checkScroll, 500);
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            clearTimeout(timer);
            if (el) el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (offset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return { scrollRef, canScrollLeft, canScrollRight, scroll };
};

// --- Modal ---
const JsonModal = ({ title, code, onClose }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(JSON.stringify(code, null, 2));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-slate-900 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                <div className="flex justify-between items-center p-4 border-b border-slate-700 bg-slate-800">
                    <h3 className="text-white font-bold flex items-center"><Icon name="code" size={20} className="mr-2 text-green-400" /> {title} - JSON Source</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-white"><Icon name="x" size={24} /></button>
                </div>
                <div className="flex-1 overflow-auto p-6 bg-[#0d1117] json-scroll">
                    <pre className="text-sm font-mono text-green-400 leading-relaxed whitespace-pre-wrap break-all">{JSON.stringify(code, null, 2)}</pre>
                </div>
                <div className="p-4 border-t border-slate-700 bg-slate-800 flex justify-end gap-3">
                    <button onClick={handleCopy} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition ${copied ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-200'}`}><Icon name={copied ? "check" : "copy"} size={16} className="mr-2" /> {copied ? "Copied!" : "Copy JSON"}</button>
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-slate-600 text-white text-sm font-medium hover:bg-slate-500">Close</button>
                </div>
            </div>
        </div>
    );
};

// --- Renderers ---
const LotteryFlexRenderer = ({ json }) => {
    if (!json || !json.body) return null;
    const mainContents = json.body?.contents?.[0]?.contents;
    if (!mainContents) return <div className="text-xs text-red-500">Error: Invalid JSON Structure</div>;

    const items = [0, 2, 4].map(idx => {
        const row = mainContents[idx];
        if (!row) return null;
        const iconUrl = row.contents?.[0]?.contents?.[0]?.url;
        const textBox = row.contents?.[1];
        const title = textBox?.contents?.[0]?.text || "";
        const sub = textBox?.contents?.[1]?.text || "";
        return { img: iconUrl, title, sub };
    }).filter(Boolean);

    return (
        <div className="bg-white w-full h-[500px] flex flex-col border border-slate-200 shadow-sm mx-auto overflow-hidden rounded-md">
            {json.header?.contents?.[0]?.url && (
                <div className="w-full h-[20] bg-slate-50 relative">
                     <img src={json.header.contents[0].url} className="w-full object-contain block" style={{aspectRatio: 20/3}} />
                </div>
            )}
            {json.hero && (
                <div className="relative w-full bg-black">
                    {json.hero.type === 'video' ? (
                        <div className="relative w-full" style={{aspectRatio: json.hero.aspectRatio ? json.hero.aspectRatio.replace(':','/') : '16/9'}}>
                            <img src={json.hero.altContent?.url || json.hero.previewUrl} className="w-full h-full object-cover opacity-90" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-300 group cursor-pointer">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-transform duration-300 group-hover:scale-110">
                                    <Icon name="play" size={25} className="text-white fill-white ml-1" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <img src={json.hero.url} className="w-full object-cover" style={{aspectRatio: json.hero.aspectRatio?.replace(':','/')}} />
                    )}
                </div>
            )}
            <div className="flex flex-col">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center p-4 gap-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer group">
                        <div className="w-[70px] h-[60px] flex-shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-green-200 transition-colors overflow-hidden">
                            <img src={item.img} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-lg text-slate-900 truncate leading-tight">{item.title}</h4>
                            <p className="text-sm text-slate-500 truncate mt-0.5">{item.sub}</p>
                        </div>
                        <div className="w-6 opacity-40 group-hover:opacity-100 transition-opacity">
                            <img src="https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_button/next.png" className="w-full" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="h-2 w-full" style={{ backgroundColor: json.footer?.backgroundColor || '#ff0200' }}></div>
        </div>
    );
};

const Type2CarouselRenderer = ({ json }) => {
    if (!json || json.type !== 'carousel') return null;
    const { scrollRef, canScrollLeft, canScrollRight, scroll } = useCarouselScroll();

    return (
        <div className="relative group/carousel w-full">
            <button 
                onClick={() => scroll(-310)}
                className={`absolute -left-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/50 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 hover:scale-110 transition-all duration-300
                    ${canScrollLeft ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <Icon name="chevron-left" size={28} />
            </button>

            <div ref={scrollRef} className="flex overflow-x-auto pb-4 gap-3 snap-x w-full hide-scroll pl-1 scroll-smooth">
                {json.contents.map((bubble, i) => {
                    return (
                        <div key={i} className="flex-shrink-0 snap-center rounded-xl overflow-hidden shadow-sm relative group cursor-pointer transition-transform hover:scale-[1.02]" style={{width: '300px', aspectRatio: '3/3.2'}}>
                            {bubble.hero && (
                                <img src={bubble.hero.url} className="w-full h-full object-cover" loading="lazy" />
                            )}
                            {/* ปรับ Padding เป็น p-6 */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                            </div>
                        </div>
                    )
                })}
            </div>

            <button 
                onClick={() => scroll(310)}
                className={`absolute -right-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/50 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 hover:scale-110 transition-all duration-300
                    ${canScrollRight ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <Icon name="chevron-right" size={28} />
            </button>
        </div>
    )
};

const Type3CarouselRenderer = ({ json }) => {
    if (!json || json.type !== 'carousel') return null;
    const { scrollRef, canScrollLeft, canScrollRight, scroll } = useCarouselScroll();

    // --- Helper Functions ---
    const findTexts = (node) => {
        if (!node) return [];
        if (node.type === 'text' && node.text && node.text.trim() !== '') return [node.text];
        if (node.contents && Array.isArray(node.contents)) {
            let texts = [];
            for (let c of node.contents) {
                texts = [...texts, ...findTexts(c)];
            }
            return texts;
        }
        return [];
    };

    const findImageUrl = (node) => {
        if (!node) return null;
        if (node.type === 'image') return node.url;
        if (node.contents && Array.isArray(node.contents)) {
            for (let c of node.contents) {
                const found = findImageUrl(c);
                if (found) return found;
            }
        }
        return null;
    };

    const findWhiteBoxes = (node) => {
        if (!node) return [];
        if (node.type === 'box' && node.backgroundColor === '#ffffff') return [node];
        if (node.contents && Array.isArray(node.contents)) {
            let boxes = [];
            for (let c of node.contents) {
                boxes = [...boxes, ...findWhiteBoxes(c)];
            }
            return boxes;
        }
        return [];
    };

    const findWarningText = (node) => {
        if (!node) return null;
        if (node.type === 'text' && node.position === 'absolute' && node.text.includes('ความเชื่อ')) return node.text;
        if (node.contents && Array.isArray(node.contents)) {
            for (let c of node.contents) {
                const found = findWarningText(c);
                if (found) return found;
            }
        }
        return null;
    };

    return (
        <div className="relative group/carousel w-full">
            <button 
                onClick={() => scroll(-280)} 
                className={`absolute -left-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/50 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 hover:scale-110 transition-all duration-300
                    ${canScrollLeft ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <Icon name="chevron-left" size={30} />
            </button>

            <div ref={scrollRef} className="flex overflow-x-auto pb-4 gap-3 snap-x w-full hide-scroll pl-1 scroll-smooth">
                {json.contents.map((bubble, i) => {
                    const isCover = i === 0;
                    if (isCover) {
                        const bodyContents = bubble.body.contents;
                        const heroImg = bubble.hero?.url;
                        const bgPatternUrl = bodyContents[0]?.url;
                        const titleImgUrl = bodyContents[2]?.url; 
                        const dateText = bodyContents[3]?.text;
                        const mascotUrl = bodyContents[4]?.url;
                        const bgGradient = bubble.body.background;
                        const gradientStyle = bgGradient ? { background: `linear-gradient(${bgGradient.angle}, ${bgGradient.startColor}, ${bgGradient.endColor})` } : {};

                        return (
                            <div key={i} className="flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative flex flex-col" style={{height: '320px', aspectRatio: '3/4'}}>
                                <div className="bg-white pt-2 pb-2 flex justify-center items-center h-[35px]">
                                    <img src={heroImg} className="w-[150px] object-contain" />
                                </div>
                                <div className="flex-1 relative overflow-hidden" style={gradientStyle}>
                                    <div className="relative w-full h-full">
                                        <img src={bgPatternUrl} className="absolute w-full h-full object-cover z-0" />
                                        <div className="relative w-full h-full flex flex-col items-center" style={{top: '-10px'}}>
                                            <img src={titleImgUrl} className="w-[85%] object-contain z-10 " />
                                            <div className="absolute w-full text-center z-20" style={{top: '70px'}}>
                                                <p className="text-[10px] font-bold text-white drop-shadow-md">ประจำงวดวันที่ 16 พฤศจิกายน 2568</p>
                                            </div>
                                            <img src={mascotUrl} className="absolute w-[60%] object-contain z-30 py-[80px]" style={{bottom: '-35px'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    const contentBoxes = findWhiteBoxes(bubble.body);
                    const warningText = findWarningText(bubble.body) || "";

                    if (contentBoxes.length === 0) return <div key={i} className="w-[260px] h-[420px] bg-red-50 flex items-center justify-center text-red-400">No Content</div>;

                    return (
                        <div key={i} className="flex-shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative flex flex-col" style={{height: '320px', aspectRatio: '3/4'}}>
                            <div className="flex-1 overflow-y-auto hide-scroll p-4 space-y-4">
                                {contentBoxes.map((contentBox, boxIdx) => {
                                    const innerContents = contentBox.contents || [];
                                    const headerBox = innerContents[0];
                                    let headerLogoUrl = null;
                                    let headerGradient = null;
                                    if (headerBox.type === 'image') {
                                        headerLogoUrl = headerBox.url;
                                    } else {
                                        headerLogoUrl = findImageUrl(headerBox);
                                        headerGradient = headerBox.background;
                                    }
                                    const headerStyle = headerGradient ? { background: `linear-gradient(${headerGradient.angle}, ${headerGradient.startColor}, ${headerGradient.endColor})` } : { backgroundColor: '#ffffff' };
                                    const restNodes = innerContents.slice(1);
                                    let allTexts = [];
                                    restNodes.forEach(n => { allTexts = [...allTexts, ...findTexts(n)]; });
                                    allTexts = allTexts.filter(t => t && t.trim().length > 0);
                                    const numbers = [];
                                    let labelText = "";
                                    allTexts.forEach(txt => {
                                        if (/^\d+$/.test(txt)) { numbers.push(txt); } else { labelText = txt; }
                                    });

                                    return (
                                        <div key={boxIdx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                                            {/* Header: ลด padding ล่าง (pb-0) */}
                                            <div className="p-3 pb-0 relative h-[60px] flex items-center justify-center overflow-hidden" style={headerStyle}>
                                                {headerLogoUrl ? <img src={headerLogoUrl} className={`${headerGradient ? 'w-[70%]' : 'w-full'} h-full object-contain relative z-10`} /> : null}
                                                {headerGradient && <div className="absolute inset-2 border border-white/20 rounded-lg pointer-events-none"></div>}
                                            </div>
                                            {/* Body: ลด padding บน (pt-0) เพื่อดึงเนื้อหาขึ้น */}
                                            <div className="px-4 pb-4 pt-0 flex flex-col items-center gap-1 bg-slate-50/50">
                                                <div className="flex w-full justify-center gap-4 px-2">
                                                    {numbers.slice(0, 2).map((t, idx) => (
                                                        <span key={idx} className="text-2xl font-bold text-slate-800 tracking-wider">{t}</span>
                                                    ))}
                                                </div>
                                                {numbers.length > 2 && <div className="w-1/2 h-[1px] bg-slate-200"></div>}
                                                <div className="flex w-full justify-center gap-2 px-2 flex-wrap">
                                                    {numbers.slice(2).map((t, idx) => (
                                                        <span key={idx} className="text-sm font-bold text-slate-600 bg-white px-1 rounded shadow-sm border border-slate-100 min-w-[20px] text-center">{t}</span>
                                                    ))}
                                                </div>
                                                {labelText && <span className="text-xs font-bold text-slate-600 mt-1">{labelText}</span>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="h-6 w-full relative">
                                {warningText && <p className="text-[9px] text-slate-400 absolute bottom-1 right-2 text-right w-full">{warningText}</p>}
                            </div>
                        </div>
                    );
                })}
            </div>

            <button 
                onClick={() => scroll(280)} 
                className={`absolute -right-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/50 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 hover:scale-110 transition-all duration-300
                    ${canScrollRight ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <Icon name="chevron-right" size={30} />
            </button>
        </div>
    );
};

const Type4StepRenderer = ({ json }) => {
    if (!json) return null;
    const headerRatio = json.header?.contents?.[0]?.aspectRatio 
        ? json.header.contents[0].aspectRatio.replace(':', '/') 
        : 'auto';

    const renderNode = (node, index) => {
        if (!node) return null;
        const key = index;

        let style = {
            flex: node.flex,
            width: node.width,
            height: node.height,
            backgroundColor: node.backgroundColor,
            borderRadius: node.cornerRadius,
            borderColor: node.borderColor,
            borderWidth: node.borderWidth,
        };

        if (node.paddingAll) style.padding = node.paddingAll;
        if (node.paddingTop) style.paddingTop = node.paddingTop;
        if (node.paddingBottom) style.paddingBottom = node.paddingBottom;
        if (node.paddingStart) style.paddingLeft = node.paddingStart;
        if (node.paddingEnd) style.paddingRight = node.paddingEnd;

        if (node.background && node.background.type === 'linearGradient') {
            style.background = `linear-gradient(${node.background.angle || '0deg'}, ${node.background.startColor}, ${node.background.endColor})`;
        }

        let positionClass = "relative ";
        if (node.position === 'absolute') {
            positionClass = "absolute ";
            if (node.offsetTop) style.top = node.offsetTop;
            if (node.offsetBottom) style.bottom = node.offsetBottom;
            if (node.offsetStart) style.left = node.offsetStart;
            if (node.offsetEnd) style.right = node.offsetEnd;
        }

        let marginClass = "";
        const marginMap = { xl: 'mt-4', lg: 'mt-3', md: 'mt-2', sm: 'mt-1', xs: 'mt-0.5' };
        if (node.margin && marginMap[node.margin]) marginClass = marginMap[node.margin];

        const isClickable = !!node.action;
        const ElementType = isClickable ? 'a' : 'div';
        
        const actionProps = isClickable ? {
            href: node.action.uri,
            target: '_blank',
            rel: 'noreferrer',
            className: 'cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95' 
        } : {};

        if (node.type === 'text') {
            style.color = node.color;
            let textClass = "break-words leading-tight ";
            const sizeMap = { xxs: 'text-[10px]', xs: 'text-xs', sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl', xxl: 'text-2xl', '3xl': 'text-3xl', '4xl': 'text-4xl', '5xl': 'text-5xl' };
            textClass += (sizeMap[node.size] || 'text-base') + " ";
            
            if (node.weight === 'bold') textClass += "font-bold ";
            if (node.style === 'italic') textClass += "italic ";
            if (node.decoration === 'underline') textClass += "underline ";
            
            if (node.wrap) {
                textClass += "text-left self-start ";
            } else if (node.color === '#ffffff' && node.weight === 'bold') {
                textClass += "text-center w-full h-full flex items-center justify-center "; 
                marginClass = ""; 
            } else {
                if (node.align === 'center') textClass += "text-center ";
                else if (node.align === 'end') textClass += "text-right ";
                
                if (node.gravity === 'center') textClass += "self-center ";
                if (node.gravity === 'bottom') textClass += "self-end ";
                if (node.gravity === 'top') textClass += "self-start ";
            }

            return (
                <ElementType key={key} style={style} className={`${positionClass} ${textClass} ${marginClass} ${actionProps.className || ''}`} {...actionProps}>
                    {node.text}
                </ElementType>
            );
        }

        if (node.type === 'box') {
            let boxClass = "flex ";
            boxClass += node.layout === 'horizontal' ? "flex-row " : "flex-col ";
            
            if (node.justifyContent === 'center') boxClass += "justify-center ";
            else if (node.justifyContent === 'flex-end') boxClass += "justify-end ";
            else if (node.justifyContent === 'space-between') boxClass += "justify-between ";
            
            if (node.alignItems === 'center') boxClass += "items-center ";
            else if (node.alignItems === 'flex-end') boxClass += "items-end ";
            else if (node.alignItems === 'flex-start') boxClass += "items-start ";
            
            const gapMap = { xs: 'gap-1', sm: 'gap-2', md: 'gap-3', lg: 'gap-4', xl: 'gap-5' };
            if (node.spacing && gapMap[node.spacing]) boxClass += gapMap[node.spacing] + " ";

            return (
                <ElementType key={key} style={style} className={`${positionClass} ${boxClass} ${marginClass} ${actionProps.className || ''}`} {...actionProps}>
                    {node.contents?.map((child, i) => renderNode(child, i))}
                </ElementType>
            );
        }

        if (node.type === 'image') {
            const imgStyle = { ...style, objectFit: node.aspectMode === 'cover' ? 'cover' : 'contain' };
            if (node.aspectRatio) imgStyle.aspectRatio = node.aspectRatio.replace(':', '/');
            
            let imgClass = "max-w-full block ";
            if (node.gravity === 'center') imgClass += "self-center ";
            
            if (isClickable) {
                 return (
                     <a key={key} {...actionProps} style={{ display: 'contents' }}>
                         <img src={node.url} style={imgStyle} className={`${positionClass} ${imgClass} ${marginClass} ${actionProps.className}`} />
                     </a>
                 )
            }
            return <img key={key} src={node.url} style={imgStyle} className={`${positionClass} ${imgClass} ${marginClass}`} />;
        }

        if (node.type === 'filler') return <div key={key} style={{flex: 1}} />;
        
        return null;
    };

    const headerStyle = {};
    if (json.header?.background?.type === 'linearGradient') {
        headerStyle.background = `linear-gradient(${json.header.background.angle}, ${json.header.background.startColor}, ${json.header.background.endColor})`;
    } else if (json.header?.backgroundColor) {
        headerStyle.backgroundColor = json.header.backgroundColor;
    }
    
    headerStyle.padding = 0; 
    headerStyle.height = 'auto'; 

    return (
        <div className="bg-white w-full h-[500px] border border-slate-200 shadow-sm rounded-md overflow-hidden flex flex-col">
            {json.header && (
                <div style={headerStyle} className="flex flex-col justify-center items-center relative flex-shrink-0 w-full">
                    {json.header.contents.map((c, i) => {
                        if (c.type === 'image') {
                            return <img key={i} src={c.url} className=" w-[200px] h-[45px] object-contain block" style={{aspectRatio:20/3}} />;
                        }
                        return renderNode(c, i);
                    })}
                </div>
            )}
            
            {json.hero && (
                <div className="relative w-full bg-black flex-shrink-0">
                    {json.hero.type === 'video' ? (
                        <div className="relative w-full" style={{aspectRatio: json.hero.aspectRatio ? json.hero.aspectRatio.replace(':','/') : '16/9'}}>
                            <img src={json.hero.altContent?.url || json.hero.previewUrl} className="w-full h-full object-cover opacity-90" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-300 group cursor-pointer">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-transform duration-300 group-hover:scale-110">
                                    <Icon name="play" size={25} className="text-white fill-white ml-1" />
                                </div>
                            </div>
                            {json.hero.action && (
                                <div className="absolute bottom-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center pointer-events-none z-10">
                                    {json.hero.action.label} <Icon name="chevron-right" size={14} className="ml-1" />
                                </div>
                            )}
                        </div>
                    ) : (
                        <img src={json.hero.url} className="w-full object-cover" style={{aspectRatio: json.hero.aspectRatio?.replace(':','/')}} />
                    )}
                </div>
            )}

            {json.body && (
                // ปรับ Padding ลดลงเพื่อให้เนื้อหาขยับขึ้น
                <div className="px-4 pb-4 pt-2 flex-1 hide-scroll">
                    {renderNode(json.body)}
                </div>
            )}

            {json.footer && (
                <div className="p-4 pt-2 pb-10 border-t border-slate-50 flex justify-center flex-shrink-0">
                    {renderNode(json.footer)}
                </div>
            )}
        </div>
    )
};

const Type5ProcessRenderer = ({ json }) => {
    if (!json) return null;
    const containerBox = json.body?.contents?.[0]; 
    if (!containerBox) return null;
    const stepsContainer = containerBox.contents?.find(c => c.type === "box" && c.layout === "horizontal");

    const renderStepCircle = (boxNode) => {
        if (!boxNode) return null;
        const innerCircle = boxNode.contents?.[0]?.contents?.[0]; 
        const circleStyle = {
            width: innerCircle?.width || '44px',
            height: innerCircle?.height || '44px',
            borderRadius: '50%',
            backgroundColor: innerCircle?.backgroundColor || 'transparent',
            border: innerCircle?.borderColor ? `${innerCircle.borderWidth || '1px'} solid ${innerCircle.borderColor}` : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        };
        const imgNode = innerCircle?.contents?.[0];
        const hasImage = imgNode?.type === 'image';
        const textNode = boxNode.contents?.[1];
        const labelText = textNode?.contents?.[0]?.text || textNode?.text || "";

        return (
            <div className="flex flex-col items-center relative z-10">
                <div style={circleStyle} className="shadow-sm">
                    {hasImage && <img src={imgNode.url} style={{width: imgNode.size || '20px'}} className="object-cover" />}
                    {!hasImage && <div className="w-2 h-2 rounded-full bg-white/20"></div>}
                </div>
                <span className="text-[10px] text-slate-600 mt-2 font-medium text-center max-w-[60px] leading-tight">{labelText}</span>
            </div>
        );
    };

    const steps = stepsContainer?.contents?.filter(c => c.type === "box" && c.layout === "vertical") || [];

    return (
        <div className="bg-[#f9f5f2] w-full border border-slate-200 shadow-sm rounded-md overflow-hidden flex flex-col">
            {json.hero && (
                <div className="relative w-full bg-black">
                    {json.hero.type === 'video' ? (
                        <div className="relative w-full" style={{aspectRatio: json.hero.aspectRatio ? json.hero.aspectRatio.replace(':','/') : '16/9'}}>
                            <img src={json.hero.altContent?.url || json.hero.previewUrl} className="w-full h-full object-cover opacity-90" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-300 group cursor-pointer ">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-transform duration-300 group-hover:scale-110">
                                    <Icon name="play" size={25} className="text-white fill-white ml-1" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <img src={json.hero.url} className="w-full object-cover" style={{aspectRatio: json.hero.aspectRatio?.replace(':','/')}} />
                    )}
                </div>
            )}
            <div className="p-6 relative min-h-[150px] flex flex-col items-center">
                <div className="absolute top-[45px] left-0 right-0 mx-auto w-[200px] h-[3px] z-0 rounded-full" 
                     style={{ background: 'linear-gradient(90deg, #EAEAEA, #c0c0c0, #ff0000)' }}>
                </div>
                <div className="flex justify-between w-full max-w-[280px] z-10 relative mt-2">
                     {steps.map((step, idx) => (
                         <React.Fragment key={idx}>
                             {renderStepCircle(step)}
                         </React.Fragment>
                     ))}
                </div>
            </div>
        </div>
    );
};

const Type6PortraitCarouselRenderer = ({ json }) => {
    if (!json || json.type !== 'carousel') return null;
    const { scrollRef, canScrollLeft, canScrollRight, scroll } = useCarouselScroll();

    return (
        <div className="relative group/carousel w-full">
            <button 
                onClick={() => scroll(-310)}
                className={`absolute -left-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/50 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 hover:scale-110 transition-all duration-300
                    ${canScrollLeft ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <Icon name="chevron-left" size={30} />
            </button>

            <div ref={scrollRef} className="flex overflow-x-auto pb-4 gap-3 snap-x w-full hide-scroll pl-1 scroll-smooth">
                {json.contents.map((bubble, i) => {
                    return (
                        <div key={i} className="flex-shrink-0 snap-center rounded-xl overflow-hidden shadow-sm relative group cursor-pointer transition-transform hover:scale-[1.02]" style={{height: '500px', aspectRatio: '1/2'}}>
                            {bubble.hero && (
                                <img src={bubble.hero.url} className="w-full h-full object-cover" loading="lazy" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                            </div>
                        </div>
                    )
                })}
            </div>

            <button 
                onClick={() => scroll(310)}
                className={`absolute -right-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/50 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 hover:scale-110 transition-all duration-300
                    ${canScrollRight ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <Icon name="chevron-right" size={30} />
            </button>
        </div>
    )
};

// --- Pages ---
const Navbar = ({ setPage, currentPage }) => (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent cursor-pointer" onClick={() => setPage('home')}>PORTFOLIO.</div>
        <div className="space-x-2 hidden md:block">
            {['home', 'flex', 'platform'].map(p => (
                <button key={p} onClick={() => setPage(p)} className={`px-4 py-2 rounded-full text-sm font-medium transition capitalize ${currentPage === p ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{p}</button>
            ))}
        </div>
    </nav>
);

const HomePage = ({ setPage }) => (
    <div className="min-h-screen flex flex-col justify-center items-center pt-20 px-4">
        <div className="text-center max-w-3xl animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wider mb-4">LINE TECHNOLOGY SPECIALIST</span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">สร้างประสบการณ์ <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Digital ที่ดีกว่า</span></h1>
            <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto">รวบรวมผลงานการออกแบบ Flex Message UX/UI และการวางระบบ Data Platform สำหรับการทำ CRM ที่มีประสิทธิภาพ</p>
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                <div onClick={() => setPage('flex')} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-10 -mt-10 transition group-hover:scale-110"></div>
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4 relative z-10"><Icon name="smartphone" /></div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 relative z-10">LINE Flex Messages</h3>
                    <p className="text-slate-500 relative z-10">รวม 6 ผลงานออกแบบ Flex Message ที่ตอบโจทย์ธุรกิจ</p>
                    <div className="mt-4 flex items-center text-green-600 font-semibold text-sm relative z-10 group-hover:translate-x-2 transition">ดูผลงาน <Icon name="arrow-right" size={16} className="ml-1" /></div>
                </div>
                <div onClick={() => setPage('platform')} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-10 -mt-10 transition group-hover:scale-110"></div>
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 relative z-10"><Icon name="database" /></div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 relative z-10">Broadcast Data Platform</h3>
                    <p className="text-slate-500 relative z-10">ระบบจัดการข้อมูลลูกค้า (CDP) เพื่อการบรอดแคสต์ที่แม่นยำ</p>
                    <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm relative z-10 group-hover:translate-x-2 transition">ดูระบบ <Icon name="arrow-right" size={16} className="ml-1" /></div>
                </div>
            </div>
        </div>
    </div>
);

const PlatformPage = ({ setPage }) => (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8 cursor-pointer text-slate-500 hover:text-blue-600 transition" onClick={() => setPage('home')}>
                <Icon name="arrow-left" size={20} className="mr-2" /> กลับหน้าหลัก
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <div><h2 className="text-4xl font-bold text-slate-900 mb-2">Broadcast Data Platform</h2><p className="text-slate-500">Architecture Design for Personalized Marketing</p></div>
                <span className="mt-4 md:mt-0 px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-full text-sm">System Version 2.0</span>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 mb-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center"><Icon name="activity" className="mr-2 text-blue-500" /> Data Flow Overview</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 relative">
                    <div className="flex flex-col items-center z-10 w-full md:w-1/3"><div className="w-full bg-slate-50 border-2 border-dashed border-slate-300 p-6 rounded-2xl text-center mb-4"><div className="flex justify-center space-x-4 text-slate-400 mb-3"><Icon name="globe" /> <Icon name="smartphone" /> <Icon name="shopping-cart" /></div><h4 className="font-bold text-slate-700">Data Sources</h4><p className="text-xs text-slate-500 mt-1">Web, App, POS, CRM</p></div></div>
                    <div className="hidden md:block text-slate-300"><Icon name="arrow-right" size={32} /></div>
                    <div className="flex flex-col items-center z-10 w-full md:w-1/3"><div className="w-full bg-blue-600 text-white p-6 rounded-2xl shadow-lg shadow-blue-200 text-center relative"><div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-md shadow-sm">Core Engine</div><Icon name="cpu" size={32} className="mx-auto mb-3 text-blue-200" /><h4 className="font-bold text-lg">CDP Engine</h4><p className="text-xs text-blue-200 mt-1">Segmentation & Personalization</p></div></div>
                    <div className="hidden md:block text-slate-300"><Icon name="arrow-right" size={32} /></div>
                    <div className="flex flex-col items-center z-10 w-full md:w-1/3"><div className="w-full bg-green-50 border border-green-200 p-6 rounded-2xl text-center"><Icon name="send" size={32} className="mx-auto mb-3 text-green-600" /><h4 className="font-bold text-green-800">LINE Broadcast</h4><p className="text-xs text-green-600 mt-1">Targeted Messages</p></div></div>
                </div>
            </div>
        </div>
    </div>
);

const FlexPage = ({ setPage }) => {
    const [selectedJson, setSelectedJson] = useState(null);

    // ใช้ flexItems จาก data.js ที่โหลดมาเป็น Global variable
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6">
            {selectedJson && <JsonModal title={selectedJson.title} code={selectedJson.jsonCode} onClose={() => setSelectedJson(null)} />}
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-8 cursor-pointer text-slate-500 hover:text-green-600" onClick={() => setPage('home')}>
                    <Icon name="arrow-left" size={20} className="mr-2" /> กลับหน้าหลัก
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">Flex Message Showcase</h2>
                <p className="text-slate-500 mb-10">รวมรูปแบบ JSON Message ดีไซน์พิเศษสำหรับธุรกิจ</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {flexItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all flex flex-col h-full">
                            <div className="bg-slate-200 p-4 flex justify-center items-start overflow-hidden">
                                <div className="w-full max-w-[300px]">
                                    {item.renderer === 'type1' && <LotteryFlexRenderer json={item.jsonCode} />}
                                    {item.renderer === 'type2' && <Type2CarouselRenderer json={item.jsonCode} />}
                                    {item.renderer === 'type3' && <Type3CarouselRenderer json={item.jsonCode} />}
                                    {item.renderer === 'type4' && <Type4StepRenderer json={item.jsonCode} />}
                                    {item.renderer === 'type5' && <Type5ProcessRenderer json={item.jsonCode} />}
                                    {item.renderer === 'type6' && <Type6PortraitCarouselRenderer json={item.jsonCode} />}
                                </div>
                            </div>
                            <div className="p-6 mt-auto">
                                <div className="flex justify-between items-start mb-3"><h3 className="text-xl font-bold text-slate-800 line-clamp-1">{item.title}</h3><span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded uppercase tracking-wide">{item.type}</span></div>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.desc}</p>
                                <button onClick={() => setSelectedJson(item)} className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 hover:border-red-600 hover:text-red-600 transition flex items-center justify-center"><Icon name="code" size={16} className="mr-2" /> ดูโค้ด JSON</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [page, setPage] = useState('home');
    useEffect(() => { window.scrollTo(0, 0); }, [page]);
    return (
        <div className="antialiased">
            <Navbar setPage={setPage} currentPage={page} />
            <main>
                {page === 'home' && <HomePage setPage={setPage} />}
                {page === 'flex' && <FlexPage setPage={setPage} />}
                {page === 'platform' && <PlatformPage setPage={setPage} />}
            </main>
            <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm"><p>© 2024 My Portfolio. Built with React & Tailwind CSS.</p></footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

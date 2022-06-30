// this is the code which will be injected into a given page...


const css = `
div.jsoneditor .jsoneditor-search input{height:auto;border:inherit}div.jsoneditor .jsoneditor-search input:focus{border:none!important;box-shadow:none!important}div.jsoneditor table{border-collapse:collapse;width:auto}div.jsoneditor td,div.jsoneditor th{padding:0;display:table-cell;text-align:left;vertical-align:inherit;border-radius:inherit}div.jsoneditor-field,div.jsoneditor-readonly,div.jsoneditor-value{border:1px solid transparent;min-height:16px;min-width:32px;padding:2px;margin:1px;word-wrap:break-word;float:left}div.jsoneditor-field p,div.jsoneditor-value p{margin:0}div.jsoneditor-value{word-break:break-word}div.jsoneditor-readonly{min-width:16px;color:grey}div.jsoneditor-empty{border-color:#d3d3d3;border-style:dashed;border-radius:2px}div.jsoneditor-field.jsoneditor-empty::after,div.jsoneditor-value.jsoneditor-empty::after{pointer-events:none;color:#d3d3d3;font-size:8pt}div.jsoneditor-field.jsoneditor-empty::after{content:"field"}div.jsoneditor-value.jsoneditor-empty::after{content:"value"}a.jsoneditor-value.jsoneditor-url,div.jsoneditor-value.jsoneditor-url{color:green;text-decoration:underline}a.jsoneditor-value.jsoneditor-url{display:inline-block;padding:2px;margin:2px}a.jsoneditor-value.jsoneditor-url:focus,a.jsoneditor-value.jsoneditor-url:hover{color:#ee422e}div.jsoneditor td.jsoneditor-separator{padding:3px 0;vertical-align:top;color:grey}div.jsoneditor-field.jsoneditor-highlight,div.jsoneditor-field[contenteditable=true]:focus,div.jsoneditor-field[contenteditable=true]:hover,div.jsoneditor-value.jsoneditor-highlight,div.jsoneditor-value[contenteditable=true]:focus,div.jsoneditor-value[contenteditable=true]:hover{background-color:#ffffab;border:1px solid #ff0;border-radius:2px}div.jsoneditor-field.jsoneditor-highlight-active,div.jsoneditor-field.jsoneditor-highlight-active:focus,div.jsoneditor-field.jsoneditor-highlight-active:hover,div.jsoneditor-value.jsoneditor-highlight-active,div.jsoneditor-value.jsoneditor-highlight-active:focus,div.jsoneditor-value.jsoneditor-highlight-active:hover{background-color:#fe0;border:1px solid #ffc700;border-radius:2px}div.jsoneditor-value.jsoneditor-string{color:green}div.jsoneditor-value.jsoneditor-array,div.jsoneditor-value.jsoneditor-object{min-width:16px;color:grey}div.jsoneditor-value.jsoneditor-number{color:#ee422e}div.jsoneditor-value.jsoneditor-boolean{color:#ff8c00}div.jsoneditor-value.jsoneditor-null{color:#004ed0}div.jsoneditor-value.jsoneditor-invalid{color:#000}div.jsoneditor-tree button.jsoneditor-button{width:24px;height:24px;padding:0;margin:0;border:none;cursor:pointer;background:transparent url(img/jsoneditor-icons.svg);border:none;}div.jsoneditor-mode-form tr.jsoneditor-expandable td.jsoneditor-tree,div.jsoneditor-mode-view tr.jsoneditor-expandable td.jsoneditor-tree{cursor:pointer}div.jsoneditor-tree button.jsoneditor-collapsed{background-position:0 -48px}div.jsoneditor-tree button.jsoneditor-expanded{background-position:0 -72px}div.jsoneditor-tree button.jsoneditor-contextmenu{background-position:-48px -72px}div.jsoneditor-tree button.jsoneditor-contextmenu.jsoneditor-selected,div.jsoneditor-tree button.jsoneditor-contextmenu:focus,div.jsoneditor-tree button.jsoneditor-contextmenu:hover,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu{background-position:-48px -48px}div.jsoneditor-tree :focus{outline:0}div.jsoneditor-tree button.jsoneditor-button:focus{background-color:#f5f5f5;outline:#e5e5e5 solid 1px}div.jsoneditor-tree button.jsoneditor-invisible{visibility:hidden;background:0 0}div.jsoneditor-tree div.jsoneditor-show-more{display:inline-block;padding:3px 4px;margin:2px 0;background-color:#e5e5e5;border-radius:3px;color:grey;font-family:arial,sans-serif;font-size:10pt}div.jsoneditor-tree div.jsoneditor-show-more a{display:inline-block;color:grey}div.jsoneditor-tree div.jsoneditor-show-more a:focus,div.jsoneditor-tree div.jsoneditor-show-more a:hover{color:#ee422e}div.jsoneditor-tree div.jsoneditor-color{display:inline-block;width:12px;height:12px;margin:4px;border:1px solid grey;cursor:pointer}div.jsoneditor div.jsoneditor-anchor .picker_wrapper.popup.popup_bottom{top:28px;left:-10px}div.jsoneditor-tree div.jsoneditor-date{background:#a1a1a1;color:#fff;font-family:arial,sans-serif;border-radius:3px;display:inline-block;padding:3px;margin:0 3px}div.jsoneditor{color:#1a1a1a;border:1px solid #3883fa;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;position:relative;padding:0;line-height:100%}div.jsoneditor-tree table.jsoneditor-tree{border-collapse:collapse;border-spacing:0;width:100%}div.jsoneditor-tree div.jsoneditor-tree-inner{padding-bottom:300px}div.jsoneditor-outer{position:static;width:100%;height:100%;margin:0;padding:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}div.jsoneditor-outer.has-nav-bar{margin-top:-26px;padding-top:26px}div.jsoneditor-outer.has-status-bar{margin-bottom:-26px;padding-bottom:26px}div.jsoneditor-outer.has-main-menu-bar{margin-top:-35px;padding-top:35px}div.jsoneditor-outer.has-nav-bar.has-main-menu-bar{margin-top:-61px;padding-top:61px}.ace-jsoneditor,textarea.jsoneditor-text{min-height:150px}div.jsoneditor-tree{width:100%;height:100%;position:relative;overflow:auto}textarea.jsoneditor-text{width:100%;height:100%;margin:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;outline-width:0;border:none;background-color:#fff;resize:none}tr.jsoneditor-highlight,tr.jsoneditor-selected{background-color:#d3d3d3}tr.jsoneditor-selected button.jsoneditor-contextmenu,tr.jsoneditor-selected button.jsoneditor-dragarea{visibility:hidden}tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea{visibility:visible}div.jsoneditor-tree button.jsoneditor-dragarea{background:url(img/jsoneditor-icons.svg) -72px -72px;cursor:move}div.jsoneditor-tree button.jsoneditor-dragarea:focus,div.jsoneditor-tree button.jsoneditor-dragarea:hover,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea{background-position:-72px -48px}div.jsoneditor td,div.jsoneditor th,div.jsoneditor tr{padding:0;margin:0}div.jsoneditor td{vertical-align:top}div.jsoneditor td.jsoneditor-tree{vertical-align:top}.jsoneditor-schema-error,div.jsoneditor td,div.jsoneditor textarea,div.jsoneditor th,div.jsoneditor-field,div.jsoneditor-value{font-family:"dejavu sans mono","droid sans mono",consolas,monaco,"lucida console","courier new",courier,monospace,sans-serif;font-size:10pt;color:#1a1a1a}.jsoneditor-schema-error{cursor:default;display:inline-block;height:24px;line-height:24px;position:relative;text-align:center;width:24px}div.jsoneditor-tree .jsoneditor-button.jsoneditor-schema-error{width:24px;height:24px;padding:0;margin:0 4px 0 0;background:url(img/jsoneditor-icons.svg) -168px -48px}.jsoneditor-text-errors tr.jump-to-line:hover{text-decoration:underline;cursor:pointer}.jsoneditor-schema-error .jsoneditor-popover{background-color:#4c4c4c;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.4);color:#fff;display:none;padding:7px 10px;position:absolute;width:200px;z-index:4}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-above{bottom:32px;left:-98px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-below{top:32px;left:-98px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-left{top:-7px;right:32px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-right{top:-7px;left:32px}.jsoneditor-schema-error .jsoneditor-popover:before{border-right:7px solid transparent;border-left:7px solid transparent;content:'';display:block;left:50%;margin-left:-7px;position:absolute}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-above:before{border-top:7px solid #4c4c4c;bottom:-7px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-below:before{border-bottom:7px solid #4c4c4c;top:-7px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-left:before{border-left:7px solid #4c4c4c;border-top:7px solid transparent;border-bottom:7px solid transparent;content:'';top:19px;right:-14px;left:inherit;margin-left:inherit;margin-top:-7px;position:absolute}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-right:before{border-right:7px solid #4c4c4c;border-top:7px solid transparent;border-bottom:7px solid transparent;content:'';top:19px;left:-14px;margin-left:inherit;margin-top:-7px;position:absolute}.jsoneditor-schema-error:focus .jsoneditor-popover,.jsoneditor-schema-error:hover .jsoneditor-popover{display:block;-webkit-animation:fade-in .3s linear 1,move-up .3s linear 1;-moz-animation:fade-in .3s linear 1,move-up .3s linear 1;-ms-animation:fade-in .3s linear 1,move-up .3s linear 1}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@-moz-keyframes fade-in{from{opacity:0}to{opacity:1}}@-ms-keyframes fade-in{from{opacity:0}to{opacity:1}}.jsoneditor .jsoneditor-validation-errors-container{max-height:130px;overflow-y:auto}.jsoneditor .jsoneditor-additional-errors{position:absolute;margin:auto;bottom:31px;left:calc(50% - 92px);color:grey;background-color:#ebebeb;padding:7px 15px;border-radius:8px}.jsoneditor .jsoneditor-additional-errors.visible{visibility:visible;opacity:1;transition:opacity 2s linear}.jsoneditor .jsoneditor-additional-errors.hidden{visibility:hidden;opacity:0;transition:visibility 0s 2s,opacity 2s linear}.jsoneditor .jsoneditor-text-errors{width:100%;border-collapse:collapse;border-top:1px solid gold}.jsoneditor .jsoneditor-text-errors td{padding:3px 6px;vertical-align:middle}.jsoneditor .jsoneditor-text-errors tr{background-color:#ffef8b}.jsoneditor .jsoneditor-text-errors tr.parse-error{background-color:#ee2e2e70}.jsoneditor-text-errors .jsoneditor-schema-error{border:none;width:24px;height:24px;padding:0;margin:0 4px 0 0;cursor:pointer}.jsoneditor-text-errors tr .jsoneditor-schema-error{background:url(img/jsoneditor-icons.svg) -168px -48px}.jsoneditor-text-errors tr.parse-error .jsoneditor-schema-error{background:url(img/jsoneditor-icons.svg) -25px 0}.fadein{-webkit-animation:fadein .3s;animation:fadein .3s;-moz-animation:fadein .3s;-o-animation:fadein .3s}@-webkit-keyframes fadein{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadein{0%{opacity:0}100%{opacity:1}}@keyframes fadein{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadein{0%{opacity:0}100%{opacity:1}}div.jsoneditor-contextmenu-root{position:relative;width:0;height:0}div.jsoneditor-contextmenu{position:absolute;box-sizing:content-box;z-index:99999}div.jsoneditor-contextmenu li,div.jsoneditor-contextmenu ul{box-sizing:content-box;position:relative}div.jsoneditor-contextmenu ul{position:relative;left:0;top:0;width:128px;background:#fff;border:1px solid #d3d3d3;box-shadow:2px 2px 12px rgba(128,128,128,.3);list-style:none;margin:0;padding:0}div.jsoneditor-contextmenu ul li button{position:relative;padding:0 4px 0 0;margin:0;width:128px;height:auto;border:none;cursor:pointer;color:#4d4d4d;background:0 0;font-size:10pt;font-family:arial,sans-serif;box-sizing:border-box;text-align:left}div.jsoneditor-contextmenu ul li button::-moz-focus-inner{padding:0;border:0}div.jsoneditor-contextmenu ul li button:focus,div.jsoneditor-contextmenu ul li button:hover{color:#1a1a1a;background-color:#f5f5f5;outline:0}div.jsoneditor-contextmenu ul li button.jsoneditor-default{width:96px}div.jsoneditor-contextmenu ul li button.jsoneditor-expand{float:right;width:32px;height:24px;border-left:1px solid #e5e5e5}div.jsoneditor-contextmenu div.jsoneditor-icon{position:absolute;top:0;left:0;width:24px;height:24px;border:none;padding:0;margin:0;background-image:url(img/jsoneditor-icons.svg)}div.jsoneditor-contextmenu ul li ul div.jsoneditor-icon{margin-left:24px}div.jsoneditor-contextmenu div.jsoneditor-text{padding:4px 0 4px 24px;word-wrap:break-word}div.jsoneditor-contextmenu div.jsoneditor-text.jsoneditor-right-margin{padding-right:24px}div.jsoneditor-contextmenu ul li button div.jsoneditor-expand{position:absolute;top:0;right:0;width:24px;height:24px;padding:0;margin:0 4px 0 0;background:url(img/jsoneditor-icons.svg) 0 -72px}div.jsoneditor-contextmenu div.jsoneditor-separator{height:0;border-top:1px solid #e5e5e5;padding-top:5px;margin-top:5px}div.jsoneditor-contextmenu button.jsoneditor-remove>div.jsoneditor-icon{background-position:-24px 0}div.jsoneditor-contextmenu button.jsoneditor-append>div.jsoneditor-icon{background-position:0 0}div.jsoneditor-contextmenu button.jsoneditor-insert>div.jsoneditor-icon{background-position:0 0}div.jsoneditor-contextmenu button.jsoneditor-duplicate>div.jsoneditor-icon{background-position:-48px 0}div.jsoneditor-contextmenu button.jsoneditor-sort-asc>div.jsoneditor-icon{background-position:-168px 0}div.jsoneditor-contextmenu button.jsoneditor-sort-desc>div.jsoneditor-icon{background-position:-192px 0}div.jsoneditor-contextmenu button.jsoneditor-transform>div.jsoneditor-icon{background-position:-216px 0}div.jsoneditor-contextmenu ul li button.jsoneditor-selected,div.jsoneditor-contextmenu ul li button.jsoneditor-selected:focus,div.jsoneditor-contextmenu ul li button.jsoneditor-selected:hover{color:#fff;background-color:#ee422e}div.jsoneditor-contextmenu ul li{overflow:hidden}div.jsoneditor-contextmenu ul li ul{display:none;position:relative;left:-10px;top:0;border:none;box-shadow:inset 0 0 10px rgba(128,128,128,.5);padding:0 10px;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-o-transition:all .3s ease-out;transition:all .3s ease-out}div.jsoneditor-contextmenu ul li ul li button{padding-left:24px;animation:all ease-in-out 1s}div.jsoneditor-contextmenu ul li ul li button:focus,div.jsoneditor-contextmenu ul li ul li button:hover{background-color:#f5f5f5}div.jsoneditor-contextmenu button.jsoneditor-type-string>div.jsoneditor-icon{background-position:-144px 0}div.jsoneditor-contextmenu button.jsoneditor-type-auto>div.jsoneditor-icon{background-position:-120px 0}div.jsoneditor-contextmenu button.jsoneditor-type-object>div.jsoneditor-icon{background-position:-72px 0}div.jsoneditor-contextmenu button.jsoneditor-type-array>div.jsoneditor-icon{background-position:-96px 0}div.jsoneditor-contextmenu button.jsoneditor-type-modes>div.jsoneditor-icon{background-image:none;width:6px}.jsoneditor-modal-overlay{position:absolute!important;background:#010101!important;opacity:.3!important}.jsoneditor-modal{position:absolute!important;max-width:95%!important;width:auto!important;border-radius:2px!important;padding:45px 15px 15px 15px!important;box-shadow:2px 2px 12px rgba(128,128,128,.3)!important;color:#4d4d4d;line-height:1.3em}.jsoneditor-modal.jsoneditor-modal-transform{width:600px!important}.jsoneditor-modal .pico-modal-header{position:absolute;box-sizing:border-box;top:0;left:0;width:100%;padding:0 10px;height:30px;line-height:30px;font-family:arial,sans-serif;font-size:11pt;background:#3883fa;color:#fff}.jsoneditor-modal table{width:100%}.jsoneditor-modal table td,.jsoneditor-modal table th{padding:5px 20px 5px 0;text-align:left;vertical-align:top;font-weight:400;color:#4d4d4d;line-height:32px}.jsoneditor-modal p:first-child{margin-top:0}.jsoneditor-modal a{color:#3883fa}.jsoneditor-modal table td.jsoneditor-modal-input{text-align:right;padding-right:0;white-space:nowrap}.jsoneditor-modal table td.jsoneditor-modal-actions{padding-top:15px}.jsoneditor-modal .pico-close{background:0 0!important;font-size:24px!important;top:7px!important;right:7px!important;color:#fff}.jsoneditor-modal #query,.jsoneditor-modal input,.jsoneditor-modal select,.jsoneditor-modal textarea{background:#fff;border:1px solid #d3d3d3;color:#4d4d4d;border-radius:3px;padding:4px}.jsoneditor-modal,.jsoneditor-modal #query,.jsoneditor-modal input,.jsoneditor-modal option,.jsoneditor-modal select,.jsoneditor-modal table td,.jsoneditor-modal table th,.jsoneditor-modal textarea{font-size:10.5pt;font-family:arial,sans-serif}.jsoneditor-modal #query,.jsoneditor-modal .jsoneditor-transform-preview{font-family:"dejavu sans mono","droid sans mono",consolas,monaco,"lucida console","courier new",courier,monospace,sans-serif;font-size:10pt}.jsoneditor-modal input[type=button],.jsoneditor-modal input[type=submit]{background:#f5f5f5;padding:4px 20px}.jsoneditor-modal input,.jsoneditor-modal select{cursor:pointer}.jsoneditor-modal input{padding:4px}.jsoneditor-modal input[type=text]{cursor:inherit}.jsoneditor-modal input[disabled]{background:#d3d3d3;color:grey}.jsoneditor-modal .jsoneditor-select-wrapper{position:relative;display:inline-block}.jsoneditor-modal .jsoneditor-select-wrapper:after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #666;position:absolute;right:8px;top:14px;pointer-events:none}.jsoneditor-modal select{padding:3px 24px 3px 10px;min-width:180px;max-width:350px;-webkit-appearance:none;-moz-appearance:none;appearance:none;text-indent:0;text-overflow:"";font-size:10pt;line-height:1.5em}.jsoneditor-modal select::-ms-expand{display:none}.jsoneditor-modal .jsoneditor-button-group input{padding:4px 10px;margin:0;border-radius:0;border-left-style:none}.jsoneditor-modal .jsoneditor-button-group input.jsoneditor-button-first{border-top-left-radius:3px;border-bottom-left-radius:3px;border-left-style:solid}.jsoneditor-modal .jsoneditor-button-group input.jsoneditor-button-last{border-top-right-radius:3px;border-bottom-right-radius:3px}.jsoneditor-modal .jsoneditor-button-group.jsoneditor-button-group-value-asc input.jsoneditor-button-asc,.jsoneditor-modal .jsoneditor-button-group.jsoneditor-button-group-value-desc input.jsoneditor-button-desc{background:#3883fa;border-color:#3883fa;color:#fff}.jsoneditor-modal #query,.jsoneditor-modal .jsoneditor-transform-preview{width:100%;box-sizing:border-box}.jsoneditor-modal .jsoneditor-transform-preview{background:#f5f5f5;height:200px}.jsoneditor-modal .jsoneditor-transform-preview.jsoneditor-error{color:#ee422e}.jsoneditor-modal .jsoneditor-jmespath-wizard{line-height:1.2em;width:100%;background:#ffffe0;border:1px solid #ffe99a;padding:0 10px 10px;border-radius:3px}.jsoneditor-modal .jsoneditor-jmespath-wizard-label{font-style:italic;margin:4px 0 2px 0}.jsoneditor-modal .jsoneditor-inline{position:relative;display:inline-block;width:100%;padding:2px}.jsoneditor-modal .jsoneditor-jmespath-filter{display:flex;flex-wrap:wrap}.jsoneditor-modal .jsoneditor-jmespath-filter-field{width:170px}.jsoneditor-modal .jsoneditor-jmespath-filter-relation{width:100px}.jsoneditor-modal .jsoneditor-jmespath-filter-value{min-width:100px;flex:1}.jsoneditor-modal .jsoneditor-jmespath-sort-field{width:170px}.jsoneditor-modal .jsoneditor-jmespath-sort-order{width:150px}.jsoneditor-modal .jsoneditor-jmespath-select-fields{width:100%}.jsoneditor-modal .selectr-selected{border-color:#d3d3d3;padding:4px 28px 4px 8px}.jsoneditor-modal .selectr-selected .selectr-tag{background-color:#3883fa;border-radius:5px}div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa}div.jsoneditor-menu>button,div.jsoneditor-menu>div.jsoneditor-modes>button{width:26px;height:26px;margin:2px;padding:0;border-radius:2px;border:1px solid transparent;background:transparent url(img/jsoneditor-icons.svg);color:#fff;opacity:.8;font-family:arial,sans-serif;font-size:10pt;float:left}div.jsoneditor-menu>button:hover,div.jsoneditor-menu>div.jsoneditor-modes>button:hover{background-color:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.4)}div.jsoneditor-menu>button:active,div.jsoneditor-menu>button:focus,div.jsoneditor-menu>div.jsoneditor-modes>button:active,div.jsoneditor-menu>div.jsoneditor-modes>button:focus{background-color:rgba(255,255,255,.3)}div.jsoneditor-menu>button:disabled,div.jsoneditor-menu>div.jsoneditor-modes>button:disabled{opacity:.5}div.jsoneditor-menu>button.jsoneditor-collapse-all{background-position:0 -96px}div.jsoneditor-menu>button.jsoneditor-expand-all{background-position:0 -120px}div.jsoneditor-menu>button.jsoneditor-sort{background-position:-120px -96px}div.jsoneditor-menu>button.jsoneditor-transform{background-position:-144px -96px}div.jsoneditor.jsoneditor-mode-form>div.jsoneditor-menu>button.jsoneditor-sort,div.jsoneditor.jsoneditor-mode-form>div.jsoneditor-menu>button.jsoneditor-transform,div.jsoneditor.jsoneditor-mode-view>div.jsoneditor-menu>button.jsoneditor-sort,div.jsoneditor.jsoneditor-mode-view>div.jsoneditor-menu>button.jsoneditor-transform{display:none}div.jsoneditor-menu>button.jsoneditor-undo{background-position:-24px -96px}div.jsoneditor-menu>button.jsoneditor-undo:disabled{background-position:-24px -120px}div.jsoneditor-menu>button.jsoneditor-redo{background-position:-48px -96px}div.jsoneditor-menu>button.jsoneditor-redo:disabled{background-position:-48px -120px}div.jsoneditor-menu>button.jsoneditor-compact{background-position:-72px -96px}div.jsoneditor-menu>button.jsoneditor-format{background-position:-72px -120px}div.jsoneditor-menu>button.jsoneditor-repair{background-position:-96px -96px}div.jsoneditor-menu>div.jsoneditor-modes{display:inline-block;float:left}div.jsoneditor-menu>div.jsoneditor-modes>button{background-image:none;width:auto;padding-left:6px;padding-right:6px}div.jsoneditor-menu>button.jsoneditor-separator,div.jsoneditor-menu>div.jsoneditor-modes>button.jsoneditor-separator{margin-left:10px}div.jsoneditor-menu a{font-family:arial,sans-serif;font-size:10pt;color:#fff;opacity:.8;vertical-align:middle}div.jsoneditor-menu a:hover{opacity:1}div.jsoneditor-menu a.jsoneditor-poweredBy{font-size:8pt;position:absolute;right:0;top:0;padding:10px}table.jsoneditor-search div.jsoneditor-results,table.jsoneditor-search input{font-family:arial,sans-serif;font-size:10pt;color:#1a1a1a;background:0 0}table.jsoneditor-search div.jsoneditor-results{color:#fff;padding-right:5px;line-height:24px;padding-top:2px}table.jsoneditor-search{position:absolute;right:4px;top:4px;border-collapse:collapse;border-spacing:0}table.jsoneditor-search div.jsoneditor-frame{border:1px solid transparent;background-color:#fff;padding:0 2px;margin:0}table.jsoneditor-search div.jsoneditor-frame table{border-collapse:collapse}table.jsoneditor-search input{width:120px;border:none;outline:0;margin:1px;line-height:20px}table.jsoneditor-search button{width:16px;height:24px;padding:0;margin:0;border:none;background:url(img/jsoneditor-icons.svg);vertical-align:top}table.jsoneditor-search button:hover{background-color:transparent}table.jsoneditor-search button.jsoneditor-refresh{width:18px;background-position:-99px -73px}table.jsoneditor-search button.jsoneditor-next{cursor:pointer;background-position:-124px -73px}table.jsoneditor-search button.jsoneditor-next:hover{background-position:-124px -49px}table.jsoneditor-search button.jsoneditor-previous{cursor:pointer;background-position:-148px -73px;margin-right:2px}table.jsoneditor-search button.jsoneditor-previous:hover{background-position:-148px -49px}div.jsoneditor div.autocomplete.dropdown{position:absolute;background:#fff;box-shadow:2px 2px 12px rgba(128,128,128,.3);border:1px solid #d3d3d3;z-index:100;overflow-x:hidden;overflow-y:auto;cursor:default;margin:0;padding-left:2pt;padding-right:5pt;text-align:left;outline:0;font-family:"dejavu sans mono","droid sans mono",consolas,monaco,"lucida console","courier new",courier,monospace,sans-serif;font-size:10pt}div.jsoneditor div.autocomplete.dropdown .item{color:#333}div.jsoneditor div.autocomplete.dropdown .item.hover{background-color:#ddd}div.jsoneditor div.autocomplete.hint{color:#aaa;top:4px;left:4px}div.jsoneditor-treepath{padding:0 5px;overflow:hidden}div.jsoneditor-treepath div.jsoneditor-contextmenu-root{position:absolute;left:0}div.jsoneditor-treepath span.jsoneditor-treepath-element{margin:1px;font-family:arial,sans-serif;font-size:10pt}div.jsoneditor-treepath span.jsoneditor-treepath-seperator{margin:2px;font-size:9pt;font-family:arial,sans-serif}div.jsoneditor-treepath span.jsoneditor-treepath-element:hover,div.jsoneditor-treepath span.jsoneditor-treepath-seperator:hover{cursor:pointer;text-decoration:underline}div.jsoneditor-statusbar{line-height:26px;height:26px;margin-top:-1px;color:grey;background-color:#ebebeb;border-top:1px solid #d3d3d3;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:10pt}div.jsoneditor-statusbar>.jsoneditor-curserinfo-label{margin:0 2px 0 4px}div.jsoneditor-statusbar>.jsoneditor-curserinfo-val{margin-right:12px}div.jsoneditor-statusbar>.jsoneditor-curserinfo-count{margin-left:4px}div.jsoneditor-statusbar>.jsoneditor-validation-error-icon{float:right;width:24px;height:24px;padding:0;margin-top:1px;background:url(img/jsoneditor-icons.svg) -168px -48px}div.jsoneditor-statusbar>.jsoneditor-validation-error-count{float:right;margin:0 4px 0 0}div.jsoneditor-statusbar>.jsoneditor-parse-error-icon{float:right;width:24px;height:24px;padding:0;margin:1px;background:url(img/jsoneditor-icons.svg) -25px 0}div.jsoneditor-navigation-bar{width:100%;height:26px;line-height:26px;padding:0;margin:0;border-bottom:1px solid #d3d3d3;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:grey;background-color:#ebebeb;overflow:hidden;font-family:arial,sans-serif;font-size:10pt}/*!
 * Selectr 2.4.0
 * https://github.com/Mobius1/Selectr
 *
 * Released under the MIT license
 */.selectr-container{position:relative}.selectr-container li{list-style:none}.selectr-hidden{position:absolute;overflow:hidden;clip:rect(0,0,0,0);width:1px;height:1px;margin:-1px;padding:0;border:0 none}.selectr-visible{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;z-index:11}.selectr-desktop.multiple .selectr-visible{display:none}.selectr-desktop.multiple.native-open .selectr-visible{top:100%;min-height:200px!important;height:auto;opacity:1;display:block}.selectr-container.multiple.selectr-mobile .selectr-selected{z-index:0}.selectr-selected{position:relative;z-index:1;box-sizing:border-box;width:100%;padding:7px 28px 7px 14px;cursor:pointer;border:1px solid #999;border-radius:3px;background-color:#fff}.selectr-selected::before{position:absolute;top:50%;right:10px;width:0;height:0;content:'';-o-transform:rotate(0) translate3d(0,-50%,0);-ms-transform:rotate(0) translate3d(0,-50%,0);-moz-transform:rotate(0) translate3d(0,-50%,0);-webkit-transform:rotate(0) translate3d(0,-50%,0);transform:rotate(0) translate3d(0,-50%,0);border-width:4px 4px 0 4px;border-style:solid;border-color:#6c7a86 transparent transparent}.selectr-container.native-open .selectr-selected::before,.selectr-container.open .selectr-selected::before{border-width:0 4px 4px 4px;border-style:solid;border-color:transparent transparent #6c7a86}.selectr-label{display:none;overflow:hidden;width:100%;white-space:nowrap;text-overflow:ellipsis}.selectr-placeholder{color:#6c7a86}.selectr-tags{margin:0;padding:0;white-space:normal}.has-selected .selectr-tags{margin:0 0 -2px}.selectr-tag{list-style:none;position:relative;float:left;padding:2px 25px 2px 8px;margin:0 2px 2px 0;cursor:default;color:#fff;border:medium none;border-radius:10px;background:#acb7bf none repeat scroll 0 0}.selectr-container.multiple.has-selected .selectr-selected{padding:5px 28px 5px 5px}.selectr-options-container{position:absolute;z-index:10000;top:calc(100% - 1px);left:0;display:none;box-sizing:border-box;width:100%;border-width:0 1px 1px;border-style:solid;border-color:transparent #999 #999;border-radius:0 0 3px 3px;background-color:#fff}.selectr-container.open .selectr-options-container{display:block}.selectr-input-container{position:relative;display:none}.selectr-clear,.selectr-input-clear,.selectr-tag-remove{position:absolute;top:50%;right:22px;width:20px;height:20px;padding:0;cursor:pointer;-o-transform:translate3d(0,-50%,0);-ms-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);border:medium none;background-color:transparent;z-index:11}.selectr-clear,.selectr-input-clear{display:none}.selectr-container.has-selected .selectr-clear,.selectr-input-container.active .selectr-input-clear{display:block}.selectr-selected .selectr-tag-remove{right:2px}.selectr-clear::after,.selectr-clear::before,.selectr-input-clear::after,.selectr-input-clear::before,.selectr-tag-remove::after,.selectr-tag-remove::before{position:absolute;top:5px;left:9px;width:2px;height:10px;content:' ';background-color:#6c7a86}.selectr-tag-remove::after,.selectr-tag-remove::before{top:4px;width:3px;height:12px;background-color:#fff}.selectr-clear:before,.selectr-input-clear::before,.selectr-tag-remove::before{-o-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.selectr-clear:after,.selectr-input-clear::after,.selectr-tag-remove::after{-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.selectr-input-container.active,.selectr-input-container.active .selectr-clear{display:block}.selectr-input{top:5px;left:5px;box-sizing:border-box;width:calc(100% - 30px);margin:10px 15px;padding:7px 30px 7px 9px;border:1px solid #999;border-radius:3px}.selectr-notice{display:none;box-sizing:border-box;width:100%;padding:8px 16px;border-top:1px solid #999;border-radius:0 0 3px 3px;background-color:#fff}.selectr-container.notice .selectr-notice{display:block}.selectr-container.notice .selectr-selected{border-radius:3px 3px 0 0}.selectr-options{position:relative;top:calc(100% + 2px);display:none;overflow-x:auto;overflow-y:scroll;max-height:200px;margin:0;padding:0}.selectr-container.notice .selectr-options-container,.selectr-container.open .selectr-input-container,.selectr-container.open .selectr-options{display:block}.selectr-option{position:relative;display:block;padding:5px 20px;list-style:outside none none;cursor:pointer;font-weight:400}.selectr-options.optgroups>.selectr-option{padding-left:25px}.selectr-optgroup{font-weight:700;padding:0}.selectr-optgroup--label{font-weight:700;margin-top:10px;padding:5px 15px}.selectr-match{text-decoration:underline}.selectr-option.selected{background-color:#ddd}.selectr-option.active{color:#fff;background-color:#5897fb}.selectr-option.disabled{opacity:.4}.selectr-option.excluded{display:none}.selectr-container.open .selectr-selected{border-color:#999 #999 transparent #999;border-radius:3px 3px 0 0}.selectr-container.open .selectr-selected::after{-o-transform:rotate(180deg) translate3d(0,50%,0);-ms-transform:rotate(180deg) translate3d(0,50%,0);-moz-transform:rotate(180deg) translate3d(0,50%,0);-webkit-transform:rotate(180deg) translate3d(0,50%,0);transform:rotate(180deg) translate3d(0,50%,0)}.selectr-disabled{opacity:.6}.has-selected .selectr-placeholder,.selectr-empty{display:none}.has-selected .selectr-label{display:block}.taggable .selectr-selected{padding:4px 28px 4px 4px}.taggable .selectr-selected::after{display:table;content:" ";clear:both}.taggable .selectr-label{width:auto}.taggable .selectr-tags{float:left;display:block}.taggable .selectr-placeholder{display:none}.input-tag{float:left;min-width:90px;width:auto}.selectr-tag-input{border:medium none;padding:3px 10px;width:100%;font-family:inherit;font-weight:inherit;font-size:inherit}.selectr-input-container.loading::after{position:absolute;top:50%;right:20px;width:20px;height:20px;content:'';-o-transform:translate3d(0,-50%,0);-ms-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);-o-transform-origin:50% 0 0;-ms-transform-origin:50% 0 0;-moz-transform-origin:50% 0 0;-webkit-transform-origin:50% 0 0;transform-origin:50% 0 0;-moz-animation:.5s linear 0s normal forwards infinite running spin;-webkit-animation:.5s linear 0s normal forwards infinite running spin;animation:.5s linear 0s normal forwards infinite running spin;border-width:3px;border-style:solid;border-color:#aaa #ddd #ddd;border-radius:50%}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0) translate3d(0,-50%,0);transform:rotate(0) translate3d(0,-50%,0)}100%{-webkit-transform:rotate(360deg) translate3d(0,-50%,0);transform:rotate(360deg) translate3d(0,-50%,0)}}@keyframes spin{0%{-webkit-transform:rotate(0) translate3d(0,-50%,0);transform:rotate(0) translate3d(0,-50%,0)}100%{-webkit-transform:rotate(360deg) translate3d(0,-50%,0);transform:rotate(360deg) translate3d(0,-50%,0)}}.selectr-container.open.inverted .selectr-selected{border-color:transparent #999 #999;border-radius:0 0 3px 3px}.selectr-container.inverted .selectr-options-container{border-width:1px 1px 0;border-color:#999 #999 transparent;border-radius:3px 3px 0 0;background-color:#fff}.selectr-container.inverted .selectr-options-container{top:auto;bottom:calc(100% - 1px)}.selectr-container ::-webkit-input-placeholder{color:#6c7a86;opacity:1}.selectr-container ::-moz-placeholder{color:#6c7a86;opacity:1}.selectr-container :-ms-input-placeholder{color:#6c7a86;opacity:1}.selectr-container ::placeholder{color:#6c7a86;opacity:1}


/*!
	console-panel
    A console panel within webpage to help in the following use-cases:
        * Get notification on console messages
        * Console logging on mobile and tablet devices
        * Console logging on Microsoft Edge / Internet Explorer (without opening native Developer Tools)
	https://github.com/webextensions/console-panel
	by Priyank Parashar (https://webextensions.org/)
	MIT License
*/

#console-panel .dev-tools-icon-container,
#console-panel .dev-tools-icon-container *,
#console-panel .dev-tools-console,
#console-panel .dev-tools-console * {
    font-family: monospace;
}

#console-panel .dev-tools-header,
#console-panel .dev-tools-header * {
    font-family: sans-serif;
}

#console-panel .dev-tools-icon-container {
    position: fixed;
    z-index: 2000000001;
}
#console-panel .dev-tools-icon-container-left-top,
#console-panel .dev-tools-icon-container-top-left {
    top: 20px;
    left: 20px;
}
#console-panel .dev-tools-icon-container-top-right,
#console-panel .dev-tools-icon-container-right-top {
    top: 20px;
    right: 20px;
}
#console-panel .dev-tools-icon-container-bottom-left,
#console-panel .dev-tools-icon-container-left-bottom {
    bottom: 20px;
    left: 20px;
}
#console-panel .dev-tools-icon-container-bottom-right,
#console-panel .dev-tools-icon-container-right-bottom {
    right: 20px;
    bottom: 20px;
}

#console-panel .dev-tools-icon {
    width: 32px;
    height: 32px;
    line-height: 35px;  /* Keeping height a little more than height, so that it looks better middle-aligned (since we are going to render numbers inside it) */
    border-radius: 999px;

    cursor: pointer;

    text-align: center;
    font-size: 14px;

    /* This may help in improving CPU usage for some of the animations */
    transform: translateZ(0);
}


#console-panel .dev-tools-icon.no-unread-messages {
    /* https://github.com/mozilla/gecko-dev/blob/7aef56cc4e682e5c99fcc282f30abbf8212efd50/devtools/client/definitions.js */
    /* chrome://devtools/skin/images/tool-webconsole.svg */
    background-image: url("data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljCiAgIC0gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcwogICAtIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uIC0tPgo8c3ZnIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImNvbnRleHQtZmlsbCAjMGIwYjBiIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogIDxwYXRoIGQ9Ik0xNCA0VjNIMnYxaDEyem0wIDF2OEgyVjVoMTJ6TTEgMy4wMDJDMSAyLjQ1IDEuNDUgMiAyLjAwNyAyaDExLjk4NkExLjAxIDEuMDEgMCAwIDEgMTUgMy4wMDJ2OS45OTZDMTUgMTMuNTUgMTQuNTUgMTQgMTMuOTkzIDE0SDIuMDA3QTEuMDEgMS4wMSAwIDAgMSAxIDEyLjk5OFYzLjAwMnoiLz4KICA8cGF0aCBkPSJNNC4wOSA3Ljg1OWwyLjA2MiAyLS4wMDYtLjcxMy0yLjA2MSAyLjA2MmEuNS41IDAgMCAwIC43MDcuNzA3bDIuMDYyLTIuMDYxYS41LjUgMCAwIDAtLjAwNi0uNzEzbC0yLjA2MS0yYS41LjUgMCAxIDAtLjY5Ny43MTh6Ii8+Cjwvc3ZnPg==");
    background-repeat: no-repeat;
    background-position: center center;

    opacity: 0.5;
}
#console-panel .dev-tools-icon.no-unread-messages:hover {
    opacity: 1;
}

#console-panel .dev-tools-icon                         {   background-color: #e7e7e7;  box-shadow: inset 0 0 15px 1px #979797; }
#console-panel .dev-tools-icon:hover                   {   background-color: #d0d0d0;                                              }
#console-panel .dev-tools-icon.found-something,
#console-panel .dev-tools-icon.found-log               {   background-color: #d3d3d3;  box-shadow: inset 0 0 15px 1px #777;    }
#console-panel .dev-tools-icon.found-something:hover,
#console-panel .dev-tools-icon.found-log:hover         {   background-color: #b9b9b9;                                              }
#console-panel .dev-tools-icon.found-info              {   background-color: #dad4dd;  box-shadow: inset 0 0 15px 1px #6e61bf; }
#console-panel .dev-tools-icon.found-info:hover        {   background-color: #cbb6d6;                                              }
#console-panel .dev-tools-icon.found-warn              {   background-color: #ffea83;  box-shadow: inset 0 0 15px 1px #f8981b; }
#console-panel .dev-tools-icon.found-warn:hover        {   background-color: #f9d626;                                              }
#console-panel .dev-tools-icon.found-error             {   background-color: #ffc5c5;  box-shadow: inset 0 0 15px 1px #ff5858; }
#console-panel .dev-tools-icon.found-error:hover       {   background-color: #fc9292;  box-shadow: inset 0 0 15px 1px #f00;    }

#console-panel .dev-tools-icon.found-error {
    /* Limiting the animation to 5 times. Otherwise, the CSS animation may cause high CPU usage. */
    animation: console-panel-animation-notify-error 3s 5;
}
@keyframes console-panel-animation-notify-error {
    50% {
        background-color: #ffa500;
        box-shadow: inset 0 0 15px 1px #f00;
    }
}

#console-panel .dev-tools-icon-container .strong-notification:before,
#console-panel .dev-tools-icon-container .strong-notification:after {
    display: block;
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    border-radius: 50%;
    z-index: -1;
}

#console-panel .dev-tools-icon-container .strong-notification:before { background-color: rgba(255, 0, 0, 0.5); }
#console-panel .dev-tools-icon-container .strong-notification:after  { background-color: rgba(255,177,0, 0.5); }

/* To ensure that the CSS animation does not cause high CPU usage, we remove
   the "strong-notification" class via JavaScript, once it is not required
   anymore. */
#console-panel .dev-tools-icon-container .strong-notification:before { animation: console-panel-animation-ripple 0.75s ease-in  infinite; }
#console-panel .dev-tools-icon-container .strong-notification:after  { animation: console-panel-animation-ripple 0.75s ease-out infinite; }

/* https://stackoverflow.com/questions/32955459/rings-with-ripple-animation-css-only/32955876#32955876 */
@keyframes console-panel-animation-ripple {
    0% {
        top:    0px;
        right:  0px;
        bottom: 0px;
        left:   0px;
    }
    25% {
        top:    -10vh;
        top:    -10vmin;
        right:  -10vh;
        right:  -10vmin;
        bottom: -10vh;
        bottom: -10vmin;
        left:   -10vh;
        left:   -10vmin;
        opacity: 0.5;
    }
    90% {
        opacity: 0.2;
    }
    100% {
        top:    -20vh;
        top:    -20vmin;
        right:  -20vh;
        right:  -20vmin;
        bottom: -20vh;
        bottom: -20vmin;
        left:   -20vh;
        left:   -20vmin;
        opacity: 0;
    }
}

#console-panel .dev-tools {
    position: fixed;
    z-index: 2000000000;

    display: block;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    background-color: #fff;
    border-top: 1px solid #d0d0d0;
    width: 100%;

    /* Values much higher than this may not work so well in different mobile device orientation since the "vh"/"vmin" might be calculated
       w.r.t. full-screen size, while the toolbar is also visible (which eats some of that height) */
    max-height: 80vh;
    max-height: 80vmin;

    height: 250px;
    min-height: 90px;
    padding: 0;

    color: #303942;
    /* A mix and match of font-family names from Chrome DevTools (ui/inspectorStyle.css) */
    font-family: 'Segoe UI', '.SFNSDisplay-Regular', 'Helvetica Neue', 'Lucida Grande', Roboto, Ubuntu, Tahoma, Arial, sans-serif;

    font-size: 11px;
}

#console-panel .dev-tools-header {
    height: 27px;
    line-height: 27px;
    background-color: #f3f3f3;
    padding: 2px 0px 2px 6px;
    border-bottom: 1px solid #d0d0d0;
    font-size: 12px;
}

#console-panel .dev-tools-clear-console-icon {
    width: 13px;
    height: 13px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gsJFi8Kd+JgAwAAAblJREFUSMellj1PQjEUhh8SGU3EuCkjfoVJ/BgciYNxwMmBxN/A4sfgDzAOOgjhRxBNSJwUwYG4sqJxIJEYVsHFqIBLb3Jz0vb2Xpp0OT1vn7anPacxgtsSsA/sAPNAUtm7wAdQA6rAKxHbOlAHxo79GdgOA4gDZWAUAuL1EVBSc1jbLPBkmegb6AH9AGADSNh2ooN8AZfApljptIpdxbD7hmlnZcPqCg7HnQHaGm1ROm5YYvIH5B1gM0BTE7OM36kRcOausDmgI7Q1b3BZE5OCmjwKLKdZ6CLAqTBeKUF+AlhL6I4BHoVxyyeICjsTmgdU6vAMP5orGQWWFf4vAAOfoWcQhoWtCN+BBH1aVnkA/GpghxrftPDry6MbqxfPhDvb0x1dTRhzAYF2gV2I8XuAE2GsOFxfGyyuapV/7MgrbNa0ERJ2q3mwKU8kC1xb5a4osLEpBXnVVCbVpspdk8CGwJoUlDSOHYfLEQduDKBrk8CUxVsqrWTVY1wFdoFz4N2gqdtKesKhZLj0uq2U+3dWjPg5GarjmgrzG0oDdyEgNV3gvRZzAKZ8H8gksOD7QHZVmakCb7ZJ/gEMg1YzMOnqgwAAAABJRU5ErkJggg==");
    float: left;
    background-size: contain;
    opacity: 0.5;
    margin-right: 5px;
    margin-top: 7px;
    cursor: pointer;
}
#console-panel .dev-tools-clear-console-icon:hover {
    opacity: 0.85;
}

#console-panel .dev-tools-header-cross-icon,
#console-panel .dev-tools-header-disable-icon {
    float: right;
    cursor: pointer;
    width: 13px;
    height: 13px;
    opacity: 0.5;
    background-repeat: no-repeat;
    height: 24px;
}

#console-panel .dev-tools-header-cross-icon {
    width: 30px;

    /* Source: chrome-devtools://devtools/bundled/Images/largeIcons_2x.png (in Google Chrome browser) */
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gsGFTI1ZM2PLQAAAKdJREFUOMutlUsOwjAMRB8cgIqzdGGuHnEANpwFuScoC1LJQq1rW4mUTZR5+c048GsT0IAH+TYDT+COgb2AFViS0Bn4dO17g7Y+sHUFJACTPtdq2/8qa3Cnexq1mgz0FJaBhmERaBrmXbYejEnFDntdK549grqwayEZF4px8o6cStTQR/GskU5UxGdhaMa0p9BKAlzo8PJ1MwVWRxRY+wVIwbPStRPAF611ou20opYrAAAAAElFTkSuQmCC");
    background-position: 9px 8px;
    background-size: 10px 10px;
}

#console-panel .dev-tools-header-disable-icon {
    width: 20px;

    /* Source: https://www.iconfinder.com/icons/1608429/off_power_icon */
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB3aWR0aD0iMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTY2NCA4OTZxMCAxNTYtNjEgMjk4dC0xNjQgMjQ1LTI0NSAxNjQtMjk4IDYxLTI5OC02MS0yNDUtMTY0LTE2NC0yNDUtNjEtMjk4cTAtMTgyIDgwLjUtMzQzdDIyNi41LTI3MHE0My0zMiA5NS41LTI1dDgzLjUgNTBxMzIgNDIgMjQuNSA5NC41dC00OS41IDg0LjVxLTk4IDc0LTE1MS41IDE4MXQtNTMuNSAyMjhxMCAxMDQgNDAuNSAxOTguNXQxMDkuNSAxNjMuNSAxNjMuNSAxMDkuNSAxOTguNSA0MC41IDE5OC41LTQwLjUgMTYzLjUtMTA5LjUgMTA5LjUtMTYzLjUgNDAuNS0xOTguNXEwLTEyMS01My41LTIyOHQtMTUxLjUtMTgxcS00Mi0zMi00OS41LTg0LjV0MjQuNS05NC41cTMxLTQzIDg0LTUwdDk1IDI1cTE0NiAxMDkgMjI2LjUgMjcwdDgwLjUgMzQzem0tNjQwLTc2OHY2NDBxMCA1Mi0zOCA5MHQtOTAgMzgtOTAtMzgtMzgtOTB2LTY0MHEwLTUyIDM4LTkwdDkwLTM4IDkwIDM4IDM4IDkweiIvPjwvc3ZnPg==");
    background-size: 14px 14px;
    background-position: 3px 6px;
}

#console-panel .dev-tools-header-cross-icon:hover,
#console-panel .dev-tools-header-disable-icon:hover {
    opacity: 0.75;
}

#console-panel .dev-tools-console {
    clear: both;
    overflow: auto;
    height: calc(100% - 31px);
}

#console-panel .dev-tools-console-body {
    overflow: auto;
}

#console-panel .dev-tools-console-message-wrapper {
    line-height: 13px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid #f0f0f0;
    line-height: 17px;
    padding: 3px 22px 1px 0;
}

/* This helps in ensuring that the texts show proper whitespace (also useful in showing function definitions) */
#console-panel .dev-tools-console-message > span {
    white-space: pre-wrap;
}

#console-panel .log-mode-info,
#console-panel .log-mode-warn,
#console-panel .log-mode-error,
#console-panel .log-mode-window-onerror {
    background-repeat: no-repeat;
}

#console-panel .log-mode-info {
    /* chrome-devtools://devtools/bundled/Images/smallIcons_2x.png */
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gsKDw81VUJejQAAAsxJREFUOMutVFtLVFEU/vbex5lxjjIqlWVXsKQL4UORRb0WJZSKmQVRD0UE9hLRjSDqqRtdXnqpH1BvXpDeoiBIgyYyGcuCUuli6ejczzmzL6uHypzRJNDvae+1v/Wtb7FZi2EaNDVFfCNwG7Q0dZ4yNcqYCqUIWpmvWZdeKCPbgsnRtkhkXzY/l+UHag/2NHpS34prWuYSYPIJ2kA5CpmYO5h15ckfPTtaJz+Lv65IVNXsvTGe1XdGFYUkAAJQFrJQu60UyYxBIq0BzsB9Ar5iXwmImkXRftsZWfkYeEoAYP0RpFDftR9pdSom/3oSguHBldVYssCHeEphZ0vklygAxhjseTaY4Ke12kTxfpwFAA4AB46/bYy66lQsm9ugHeBYPN8HAAgVWaj4fZ6MYGkh7DL7TLDyUT0AiKZLEZ+KU+dgKluST/YkQWrCsoV+dD4bQ+uT6HR/CL9dgPS4s9Ur33OXHTrR3zwQcx+OOiqHJDiDXchzYmnXQGuaVjQxksG3gfg+iwH1cU9PIVQuDaD15pqc2JHLH9Ddm5xW0C7xgzPUcUeZzdJMrfp+0MG6va8wNOzhfyAKBCy/2MIVUTnmCJaPL+IgzBkYMcMtwYbnSlBKPcwDgnUVcDZrMS01lGeec0ZoD/mtWQumYy4MmQ7ul6nWeYXWAJuFSTKExIgzpIudDhEO3zPVm1qGGKE5NWmOly/y4/7FVVi+MAAhflWrripCcVAg/DaVIxgfTlMm6RyW/Q19E74aj0auf0tnT/+Z52CAo7rKnuLm+5jEx8/uxD0z7iL6NXE1+W7X+Zxts37J2nN6sJcEsTNjUiPjGnS9Sc7YZibqUCrqXE++e3Hhnwt298E39Wmpbye0WeESweRRyBB0RsKNuZ88T538/np7+4wbGwA2HHtZEBpDvZSoc43ZrI2p0NJASvqisrpbKt1eporbw+GNMj/3Jz2CZsrrkClGAAAAAElFTkSuQmCC");
    background-size: 11px 11px;
    background-position: 7px 4px;

    background-color: #edebfb;
    border-bottom-color: #e5e1ff;
}

#console-panel .log-mode-warn {
    /* chrome-devtools://devtools/bundled/Images/smallIcons_2x.png */
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gsKDwIt84C4lgAAAbFJREFUOMudlLtOG0EUhr9dr9esL7uz4MvKSkIRiZKaDvECeYRADSjCBmoeIZKL1IZHSIMrEzp3kVKCEJcgCHgxdizLyNg4RbhkYXfWZLqZc+afb/45ZxRCxu4XPqQtygBui4XZRb7K8hVZsFbCFBnO3mZJAPy8pNOsk5/5xO+gPapMcBCjmBv/KwaQGycxiFH8L8JaCdPKcv4uQ/zf9dM63bNz8nMFmq8i7OusOsIrBpCzMWIGhVcRPtClDOLNtjcmUtDpBlNqfoK3UYqOIH5yAdMfh57Yjy2FSQfjqkkB2Ai9cq2EmbZZ16PBxkc1mBCs73xGhAoGeTeql+pzugnBmowujFKV0UUiMOh3n+qy3yUSkVOqMjqRAvdk93HuHn/DTskpVZl3VhLcw8rjvH5UwUzKvVSD6Ib3Rdpzt5/Kqb6Nch8LolTDXnYqs0enqtCpKkxl90NfXPHr2SGjDcWnx7W7MVYd21/s4NS/U96/8doCkLUx3BYrmpVgSddG/CAlOboGIsmyJvtxbBO+l73htJCepWqNNvPA5piO7ZdhJb1Xvu3Dr8bLvJse1402838AjWeMl7yfz78AAAAASUVORK5CYII=");
    background-size: 10px 10px;
    background-position: 7px 5px;

    background-color: #fffbe5;
    border-bottom-color: #fff5c2;
}

#console-panel .log-mode-error,
#console-panel .log-mode-window-onerror {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gsKDxgoM8e2wgAAAxlJREFUOMudlMtPE1EUxr97Z+ZOh0I7pTxKwbZAjCaNxhijkBiNbowx8hD1D1DDgvhCMJq4cYuCGjUuXOAejAKJKxMJmCgmLkyMGjGA5WGRVx9IKcPMHRdg40B56Fmec88v557vu5cgTbQFwZQpVk1Ns1Jmyj6BMi8AGFz7saDNvzNM0pHM0zpOf4K2spesTLwoyKyRRXbH4/T4XBkuMIFZ6pqhITIXQXg2HEouJuuPh+efpwW2AUKmX23y2PMbCh0FoIRgveAmx+hsGBO/Jm+/C0Wu3wQ4AIh/DjhKPU1bsvIb8pRsbCYoofA5CqFIylUiyiYGxq+lJny53V+TIzufFmW48T8xMjeFyWS0+kj/SAdtCwaZLCot3gyX5ZDtRAWoS109mUuF7USFJVdkd0Nhyv22YJAJdd6ckx6b85ydsr9glchsvAxWvhdady/MZDIFcz5oge3YUfBIFPqXr8tCEFAqOnWy8JEKEqtyiDarkq96oA8MQigphvPRPVC3G1RV4bjfDKGkGEZoGFrPa0uPQ7JBFFgl6SsvGyqFElh1NVWF40EzxNISGKOjgM4hBHwwQsOInb8CPj2zah3feGKQSlTKT2uLaBTxC43Qv4cgFBUtwUbH1oQBgCyyAgpBWldBsolMqiIwTrnExtP6bPnKQsAPY2RsedJCOB+2gLrT24uL0jjlTH6rU7r2/kLDiNVdQryufkkovy8tVKcEBpPfUCLKnfNMthTZ4YNLsMEhxOoug0/PLO30YiOMwSEIfh/Ywf2WnoQsg4qsi7yvrZXEn/F+7+REgJimxdhady94JLrK2OzQASSfdaVyJiEIu3OHRRvfSgDgw6kz1fZfsWdqdOa/nl5MzTbjmc6q3e2tXRQAdrW3Pk+oObfnHOo/w+ayVCTU3Kbd7a1dAJBSY+e2guvxvC23YjlemJRsCDIpRTzXa8Y9vqYd2zw31jTV57MNVdD0u/aZ8YA8G4WwaP2UDYlhIUtFIjt/iIusPvikuXNDl76vrZUU5FZRwitJcqFM0DXvss/GDFnpM4nZOW9Od+55/HhxZe9vO6ohHl8Nk3cAAAAASUVORK5CYII=");
    background-size: 11px 11px;
    background-position: 7px 5px;

    background-color: #fff0f0;
    border-bottom-color: #ffd6d6;
}

#console-panel .log-mode-unhandled {
    background-color: #eff;
}

#console-panel .dev-tools-console-message {
    margin-left: 24px;
    word-wrap: break-word;
    font-family: monospace;
}


#console-panel .dev-tools-console-message-code-line {
    float: right;
}

#console-panel .log-call-stack {
    white-space: pre-wrap;
}

#console-panel .log-value-window-onerror {
    color: #f00;
}

#console-panel .log-value-unknown {
    color: #000;
}

#console-panel .log-value-boolean,
#console-panel .log-value-number {
    color: #1c00cf;
}

#console-panel .log-value-null,
#console-panel .log-value-undefined,
#console-panel .log-value-console-clear {
    color: #808080;
}

#console-panel .log-value-console-clear {
    font-style: italic;
}

#console-panel .log-value-string:before,
#console-panel .log-value-string:after {
    content: '"';
    color: #222;
}
#console-panel .log-value-string {
    color: #c41a16;
}

#console-panel .log-value-dom-text:before,
#console-panel .log-value-dom-text:after {
    color: #888;
    font-style: italic;
}
#console-panel .log-value-dom-text:before {
    content: '#text "';
}
#console-panel .log-value-dom-text:after {
    content: '"';
}

#console-panel .log-value-dom {
    color: #881280;
}

/* This helps in keeping the console-panel-expand-collapse icon together with the highlighted
   code (for example when multiple items are logged via single console.log()) */
#console-panel .log-value-dom {
    display: inline-block;
}
/* But, the above rule may cause the console-panel-expand-collapse icon to move to the next
   line even when it is the first child, but that case may be better to ignore (to avoid
   that extra line). For example: when we log an element which contains huge HTML code, which
   would need to get wrapped */
#console-panel .dev-tools-console-message .log-value-dom:first-child {
    display: inline;
}

#console-panel .jsoneditor-not-available.log-value-array,
#console-panel .jsoneditor-not-available.log-value-object {
    color: #808080;
}
#console-panel .jsoneditor-not-available.log-value-array:before,
#console-panel .jsoneditor-not-available.log-value-object:before {
    color: rgb(33, 33, 33);
}
#console-panel .jsoneditor-not-available.log-value-array:before {
    content: 'Array ';
}
#console-panel .jsoneditor-not-available.log-value-object:before {
    content: 'Object ';
}

/* CSS fixes for JSON Editor */
#console-panel div.jsoneditor-menu {
    display: none;
}
#console-panel div.jsoneditor-outer {
    margin-top: 0;
    padding-top: 0;
}
#console-panel div.jsoneditor {
    border-width: 0;
}
#console-panel div.jsoneditor-tree div.jsoneditor-tree-inner {
    padding-bottom: 0;
}

/* Without this, a scroll seems to come up */
#console-panel div.jsoneditor-tree {
    display: inline;
}

#console-panel .jsoneditor,
#console-panel .jsoneditor-outer,
#console-panel .jsoneditor-tree-inner,
#console-panel .jsoneditor-outer > .jsoneditor-tree,
#console-panel .jsoneditor-outer > .jsoneditor-tree > .jsoneditor-tree-inner > .jsoneditor-tree {
    display: inline;
}

/* This style may be useful in older browsers */
#console-panel div.jsoneditor-value.jsoneditor-array,
#console-panel div.jsoneditor-value.jsoneditor-object {
    min-width: unset;
}


#console-panel div.jsoneditor-value {
    width: max-content;
}

#console-panel div.jsoneditor-tree button.jsoneditor-button,
#console-panel div.jsoneditor-tree button.jsoneditor-button.jsoneditor-expanded {
    background-position: 0px 2px;
}

#console-panel div.jsoneditor-tree button.jsoneditor-button {
    width: 10px;
    height: 10px;
    background-repeat: no-repeat;
	border: none;

    /* chrome-devtools://devtools/bundled/Images/treeoutlineTriangles.png */
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiCxITJRj/Z+u0AAAAL0lEQVQI12NgyGBgZICD/wy7GGQRnP8MHxjSEJz/DP8ZtjJIMTEga0BXhmQAktEApfUQ8zThbVYAAAAASUVORK5CYII=");
}

#console-panel div.jsoneditor-tree button.jsoneditor-button.jsoneditor-expanded {
    /* chrome-devtools://devtools/bundled/Images/treeoutlineTriangles.png */
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAQAAAC7znxOAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiCxITJDGkzkKZAAAAP0lEQVQI12Ng4Ga4xfAfDu8x8DIwMDBYMfyBCvxlsGOAgm6oUBcDHLAzXGL4z3CNgYMBCRgyfGUwZUAD2jAGAEP7FIhkSA3EAAAAAElFTkSuQmCC");
}


#console-panel div.jsoneditor-readonly,
#console-panel div.jsoneditor-value {
    padding: 0;
    margin: 0;
}

#console-panel div.jsoneditor-field,
#console-panel div.jsoneditor-readonly,
#console-panel div.jsoneditor-value {
    min-height: 0px;
    min-width: 0px;    /* Useful for keeping widths for property names as small as possible */
}

#console-panel .jsoneditor-schema-error,
#console-panel div.jsoneditor td,
#console-panel div.jsoneditor textarea,
#console-panel div.jsoneditor th,
#console-panel div.jsoneditor-field,
#console-panel div.jsoneditor-value {
    font-size: 11px;
    font-family: monospace;
}


#console-panel div.jsoneditor td.jsoneditor-tree {
    vertical-align: middle;
}


/* Begin: Styles to make JSON Editor match Chrome DevTools UI */
#console-panel div.jsoneditor-field {
    color: #881391;
}

#console-panel div.jsoneditor-value.jsoneditor-string {
    color: #c41a16;
}

#console-panel div.jsoneditor-value.jsoneditor-string:before,
#console-panel div.jsoneditor-value.jsoneditor-string:after {
    content: '"';
    color: #222;
}

#console-panel div.jsoneditor-empty {
    border-width: 0;
}

#console-panel .jsoneditor-expandable .jsoneditor-readonly {
    text-transform: capitalize;
    color: rgb(33, 33, 33);
}

#console-panel div.jsoneditor-tree button.jsoneditor-button:focus {
    background-color: transparent;
    outline: none;
}

/* End */


/* Begin: Styles to make Prism JS match Chrome DevTools */
#console-panel .only-first-line-of-code code.language-markup:after {
    content: '…';
}

#console-panel pre.language-markup {
    background-color: transparent;
    padding: 0;
    margin: 0;

    display: inline-block;
}
/* End */


#console-panel .all-lines-of-code {
    display: inline-block;
}

#console-panel .console-panel-expand-collapse {
    display: inline-block;
    width: 10px;
    height: 10px;
}

#console-panel .console-panel-expand-collapse.console-panel-collapsed,
#console-panel .console-panel-expand-collapse.console-panel-expanded {
    cursor: pointer;
    background-repeat: no-repeat;
}
#console-panel .console-panel-expand-collapse.console-panel-expanded {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAQAAAC7znxOAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiCxITJDGkzkKZAAAAP0lEQVQI12Ng4Ga4xfAfDu8x8DIwMDBYMfyBCvxlsGOAgm6oUBcDHLAzXGL4z3CNgYMBCRgyfGUwZUAD2jAGAEP7FIhkSA3EAAAAAElFTkSuQmCC");
    background-position: 0px 2px;
}

#console-panel .console-panel-expand-collapse.console-panel-collapsed {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiCxITJRj/Z+u0AAAAL0lEQVQI12NgyGBgZICD/wy7GGQRnP8MHxjSEJz/DP8ZtjJIMTEga0BXhmQAktEApfUQ8zThbVYAAAAASUVORK5CYII=");
}

#console-panel .only-first-line-of-code {
    vertical-align: top;
    vertical-align: text-top;
}
#console-panel .all-lines-of-code {
    vertical-align: top;
}
#console-panel code[class*="language-"],
#console-panel pre[class*="language-"] {
    white-space: pre-wrap;
    word-break: break-word;
}

/* Begin: Useful styles when Prism JS is not available */
#console-panel .log-value-dom .all-lines-of-code pre,
#console-panel .log-value-dom .only-first-line-of-code pre {
    display: inline;
}
/* End */

/* Begin: Match Prism JS with DevTools style */
#console-panel code[class*="language-"],
#console-panel pre[class*="language-"] {
    font-family: monospace;
}

#console-panel .token.tag {
    color: #881280;
}
#console-panel .token.attr-name {
    color: #994500;
}

#console-panel .token.attr-value {
    color: #1a1aa6;
}

#console-panel .token.comment {
    color: #236e25;
}
/* */


/* Begin: Resize related CSS */
html #console-panel .dev-tools-resize-handle {
    top: 0;
    height: inherit;
    padding-top: inherit;
    padding-bottom: inherit;
    position: absolute;
    width: 100%;
    left: 0;
    display: block;
}

#console-panel .dev-tools {
    top: unset !important;
    bottom: 0 !important;
}
/* End */

/* Begin: jQuery UI related fix */
#console-panel .dev-tools {
    position: fixed;
}
/* End */
`;

(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	const style = document.createElement('style');
	style.textContent = css;
	document.head.append(style);

})();

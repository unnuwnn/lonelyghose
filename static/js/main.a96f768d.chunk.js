(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{161:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return O}));var r=n(3),c=n.n(r),a=n(8),i=n(40),o=n(77),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,l,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=b.length>3&&void 0!==b[3]?b[3]:"recent",o=b.length>4&&void 0!==b[4]&&b[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(b,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),b(u))}),i)}catch(f){s=!0,console.error("WS error in setup",t,f)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,y(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,l,b,d,f,p,m,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),l={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return b=e.sent,d=b.data.itemsAvailable.toNumber(),f=b.itemsRedeemed.toNumber(),p=d-f,m=1e-9*b.data.price.toNumber(),j=b.data.goLiveDate.toNumber(),j=new Date(1e3*j),e.abrupt("return",{candyMachine:l,itemsAvailable:d,itemsRedeemed:f,itemsRemaining:p,goLiveDate:j,price:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,b,f,g,O,y;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,b=t.connection,f=t.program,e.next=7,m(s.publicKey);case 7:return g=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(o.a.span);case 13:return y=e.sent,e.next=16,f.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:g,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:l,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:y,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),d(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},y=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(14).Buffer)},465:function(e,t,n){},468:function(e,t){},470:function(e,t){},486:function(e,t){},487:function(e,t){},593:function(e,t){},595:function(e,t){},609:function(e,t){},617:function(e,t){},619:function(e,t){},646:function(e,t){},648:function(e,t){},654:function(e,t){},666:function(e,t){},669:function(e,t){},681:function(e,t){},688:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(0),s=n(29),u=n.n(s),l=(n(465),n(20)),b=n(3),d=n.n(b),f=n(8),p=n(23),m=n(160),j=n(162),g=n(441),O=n(707),y=n(708),v=n(709),x=n(710),h=n(10),S=n(89),w=n(198),k=n(161),P=n(39),K=Object(j.a)(w.WalletDialogButton)(r||(r=Object(m.a)(["\n\n"]))),R=j.a.span(c||(c=Object(m.a)(["\n\n"]))),T=j.a.div(a||(a=Object(m.a)([""]))),A=Object(j.a)(O.a)(i||(i=Object(m.a)([""]))),W=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(P.jsxs)(R,{children:[t," days, ",n," hours, ",r," minutes, ",c," seconds"]})},B=function(e){var t,n=Object(o.useState)(),r=Object(p.a)(n,2),c=r[0],a=r[1],i=Object(o.useState)(!1),s=Object(p.a)(i,2),u=s[0],b=s[1],m=Object(o.useState)(!1),j=Object(p.a)(m,2),O=j[0],w=j[1],R=Object(o.useState)(!1),B=Object(p.a)(R,2),L=B[0],M=B[1],C=Object(o.useState)({}),E=Object(p.a)(C,2),I=E[0],D=E[1],U=Object(o.useState)(null),_=Object(p.a)(U,2),N=_[0],G=_[1],Y=Object(o.useState)({open:!1,message:"",severity:void 0}),F=Object(p.a)(Y,2),H=F[0],q=F[1],V=Object(o.useState)(new Date(e.startDate)),J=Object(p.a)(V,2),Q=J[0],z=J[1],X=Object(S.useWallet)(),Z=Object(o.useState)(),$=Object(p.a)(Z,2),ee=$[0],te=$[1],ne=function(){var t=Object(f.a)(d.a.mark((function t(){var n,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,M(!0),!(X.connected&&(null===ee||void 0===ee?void 0:ee.program)&&X.publicKey)){t.next=10;break}return t.next=5,Object(k.c)(ee,e.config,X.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(k.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?q({open:!0,message:"Mint failed! Please try again!",severity:"error"}):q({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",w(!0)):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),q({open:!0,message:c,severity:"error"});case 17:if(t.prev=17,!(null===X||void 0===X?void 0:X.publicKey)){t.next=23;break}return t.next=21,e.connection.getBalance(null===X||void 0===X?void 0:X.publicKey);case 21:i=t.sent,a(i/h.LAMPORTS_PER_SOL);case 23:return M(!1),t.finish(17);case 25:case"end":return t.stop()}}),t,null,[[0,12,17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(f.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===X||void 0===X?void 0:X.publicKey)){t.next=5;break}return t.next=3,e.connection.getBalance(X.publicKey);case 3:n=t.sent,a(n/h.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[X,e.connection]),Object(o.useEffect)((function(){Object(f.a)(d.a.mark((function t(){var n,r,c,a,i,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(X&&X.publicKey&&X.signAllTransactions&&X.signTransaction){t.next=2;break}return t.abrupt("return");case 2:return n={publicKey:X.publicKey,signAllTransactions:X.signAllTransactions,signTransaction:X.signTransaction},t.next=5,Object(k.b)(n,e.candyMachineId,e.connection);case 5:r=t.sent,c=r.candyMachine,a=r.goLiveDate,i=r.itemsRemaining,o=r.price,w(0===i),z(a),te(c),D({itemsRemaining:i}),G(o);case 15:case"end":return t.stop()}}),t)})))()}),[X,e.candyMachineId,e.connection]),Object(P.jsxs)("main",{children:[X.connected&&Object(P.jsxs)("p",{children:["Address: ",Object(k.d)((null===(t=X.publicKey)||void 0===t?void 0:t.toBase58())||"")]}),X.connected&&Object(P.jsxs)("p",{children:["Balance: ",(c||0).toLocaleString()," SOL"]}),!!I&&Object(P.jsxs)(P.Fragment,{children:["Items available: ",I.itemsRemaining,Object(P.jsx)("br",{}),Object(P.jsx)("br",{})]}),Object(P.jsx)(T,{children:X.connected?Object(P.jsx)(A,{disabled:O||L||!u,onClick:ne,variant:"contained",children:O?"SOLD OUT":u?L?Object(P.jsx)(y.a,{}):"MINT FOR ".concat(N," SOL \ud83d\udc7b\u2661 "):Object(P.jsx)(g.a,{date:Q,onMount:function(e){return e.completed&&b(!0)},onComplete:function(){return b(!0)},renderer:W})}):Object(P.jsx)(K,{children:"Connect Wallet"})}),Object(P.jsx)(v.a,{open:H.open,autoHideDuration:6e3,onClose:function(){return q(Object(l.a)(Object(l.a)({},H),{},{open:!1}))},children:Object(P.jsx)(x.a,{onClose:function(){return q(Object(l.a)(Object(l.a)({},H),{},{open:!1}))},severity:H.severity,children:H.message})})]})},L=n(40),M=n(209),C=new L.d.PublicKey("31kLjKwppi4stGQAz8xSUuFFyjbQahL9CcaWBSUiUib8"),E=new L.d.PublicKey("BC7Hxp3QpE3iGeCXp9CttqfFw9qnwJHGS461A3C18v35"),I=new L.d.PublicKey("FZHX5YeCjE1wve6jaUWKyV7p6G7tjbTiRfvoGskCbK9H"),D=new L.d.Connection("https://api.mainnet-beta.solana.com"),U=parseInt("1639774800",10),_=function(){var e=Object(o.useMemo)((function(){return Object(h.clusterApiUrl)("mainnet-beta")}),[]),t=Object(o.useMemo)((function(){return[Object(M.getPhantomWallet)(),Object(M.getSolflareWallet)(),Object(M.getSolletWallet)()]}),[]);return Object(P.jsx)(S.ConnectionProvider,{endpoint:e,children:Object(P.jsx)(S.WalletProvider,{wallets:t,autoConnect:!0,children:Object(P.jsx)(w.WalletDialogProvider,{children:Object(P.jsx)(B,{candyMachineId:I,config:E,connection:D,startDate:U,treasury:C,txTimeout:3e4})})})})};u.a.render(Object(P.jsx)(_,{}),document.getElementById("root"))}},[[688,1,2]]]);
//# sourceMappingURL=main.a96f768d.chunk.js.map
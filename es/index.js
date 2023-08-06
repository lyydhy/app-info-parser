function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

/**
 *  From zip.js/z-worker.js, combined with inflate.js, exports as raw string so it can be requied and to use as a blob.
 */
var workerRawString = 'function inflate(a){"use strict";function w(){function m(a,b,d,h,m,n,o,p,q,r,s){var t,u,w,x,z,A,B,C,E,F,G,H,I,D=0,y=d;do e[a[b+D]]++,D++,y--;while(0!==y);if(e[0]==d)return o[0]=-1,p[0]=0,c;for(B=p[0],z=1;v>=z&&0===e[z];z++);for(A=z,z>B&&(B=z),y=v;0!==y&&0===e[y];y--);for(w=y,B>y&&(B=y),p[0]=B,H=1<<z;y>z;z++,H<<=1)if((H-=e[z])<0)return g;if((H-=e[y])<0)return g;for(e[y]+=H,l[1]=z=0,D=1,G=2;0!==--y;)l[G]=z+=e[D],G++,D++;y=0,D=0;do 0!==(z=a[b+D])&&(s[l[z]++]=y),D++;while(++y<d);for(d=l[w],l[0]=y=0,D=0,x=-1,F=-B,j[0]=0,E=0,I=0;w>=A;A++)for(t=e[A];0!==t--;){for(;A>F+B;){if(x++,F+=B,I=w-F,I=I>B?B:I,(u=1<<(z=A-F))>t+1&&(u-=t+1,G=A,I>z))for(;++z<I&&!((u<<=1)<=e[++G]);)u-=e[G];if(I=1<<z,r[0]+I>k)return g;j[x]=E=r[0],r[0]+=I,0!==x?(l[x]=y,f[0]=z,f[1]=B,z=y>>>F-B,f[2]=E-j[x-1]-z,q.set(f,3*(j[x-1]+z))):o[0]=E}for(f[1]=A-F,D>=d?f[0]=192:s[D]<h?(f[0]=s[D]<256?0:96,f[2]=s[D++]):(f[0]=n[s[D]-h]+16+64,f[2]=m[s[D++]-h]),u=1<<A-F,z=y>>>F;I>z;z+=u)q.set(f,3*(E+z));for(z=1<<A-1;0!==(y&z);z>>>=1)y^=z;for(y^=z,C=(1<<F)-1;(y&C)!=l[x];)x--,F-=B,C=(1<<F)-1}return 0!==H&&1!=w?i:c}function n(a){var c;for(b||(b=[],d=[],e=new Int32Array(v+1),f=[],j=new Int32Array(v),l=new Int32Array(v+1)),d.length<a&&(d=[]),c=0;a>c;c++)d[c]=0;for(c=0;v+1>c;c++)e[c]=0;for(c=0;3>c;c++)f[c]=0;j.set(e.subarray(0,v),0),l.set(e.subarray(0,v+1),0)}var b,d,e,f,j,l,a=this;a.inflate_trees_bits=function(a,c,e,f,h){var j;return n(19),b[0]=0,j=m(a,0,19,19,null,null,e,c,f,b,d),j==g?h.msg="oversubscribed dynamic bit lengths tree":(j==i||0===c[0])&&(h.msg="incomplete dynamic bit lengths tree",j=g),j},a.inflate_trees_dynamic=function(a,e,f,j,k,l,o,p,q){var v;return n(288),b[0]=0,v=m(f,0,a,257,r,s,l,j,p,b,d),v!=c||0===j[0]?(v==g?q.msg="oversubscribed literal/length tree":v!=h&&(q.msg="incomplete literal/length tree",v=g),v):(n(288),v=m(f,a,e,0,t,u,o,k,p,b,d),v!=c||0===k[0]&&a>257?(v==g?q.msg="oversubscribed distance tree":v==i?(q.msg="incomplete distance tree",v=g):v!=h&&(q.msg="empty distance tree with lengths",v=g),v):c)}}function H(){function u(a,b,e,f,h,i,k,l){var m,n,o,p,y,z,A,B,s=l.next_in_index,t=l.avail_in,q=k.bitb,r=k.bitk,u=k.write,v=u<k.read?k.read-u-1:k.end-u,w=j[a],x=j[b];do{for(;20>r;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;if(m=q&w,n=e,o=f,B=3*(o+m),0!==(p=n[B]))for(;;){if(q>>=n[B+1],r-=n[B+1],0!==(16&p)){for(p&=15,y=n[B+2]+(q&j[p]),q>>=p,r-=p;15>r;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;for(m=q&x,n=h,o=i,B=3*(o+m),p=n[B];;){if(q>>=n[B+1],r-=n[B+1],0!==(16&p)){for(p&=15;p>r;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;if(z=n[B+2]+(q&j[p]),q>>=p,r-=p,v-=y,u>=z)A=u-z,u-A>0&&2>u-A?(k.window[u++]=k.window[A++],k.window[u++]=k.window[A++],y-=2):(k.window.set(k.window.subarray(A,A+2),u),u+=2,A+=2,y-=2);else{A=u-z;do A+=k.end;while(0>A);if(p=k.end-A,y>p){if(y-=p,u-A>0&&p>u-A){do k.window[u++]=k.window[A++];while(0!==--p)}else k.window.set(k.window.subarray(A,A+p),u),u+=p,A+=p,p=0;A=0}}if(u-A>0&&y>u-A){do k.window[u++]=k.window[A++];while(0!==--y)}else k.window.set(k.window.subarray(A,A+y),u),u+=y,A+=y,y=0;break}if(0!==(64&p))return l.msg="invalid distance code",y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,g;m+=n[B+2],m+=q&j[p],B=3*(o+m),p=n[B]}break}if(0!==(64&p))return 0!==(32&p)?(y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,d):(l.msg="invalid literal/length code",y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,g);if(m+=n[B+2],m+=q&j[p],B=3*(o+m),0===(p=n[B])){q>>=n[B+1],r-=n[B+1],k.window[u++]=n[B+2],v--;break}}else q>>=n[B+1],r-=n[B+1],k.window[u++]=n[B+2],v--}while(v>=258&&t>=10);return y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,c}var b,h,q,s,a=this,e=0,i=0,k=0,l=0,m=0,n=0,o=0,p=0,r=0,t=0;a.init=function(a,c,d,e,f,g){b=x,o=a,p=c,q=d,r=e,s=f,t=g,h=null},a.proc=function(a,v,w){var H,I,J,N,O,P,Q,K=0,L=0,M=0;for(M=v.next_in_index,N=v.avail_in,K=a.bitb,L=a.bitk,O=a.write,P=O<a.read?a.read-O-1:a.end-O;;)switch(b){case x:if(P>=258&&N>=10&&(a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,w=u(o,p,q,r,s,t,a,v),M=v.next_in_index,N=v.avail_in,K=a.bitb,L=a.bitk,O=a.write,P=O<a.read?a.read-O-1:a.end-O,w!=c)){b=w==d?E:G;break}k=o,h=q,i=r,b=y;case y:for(H=k;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}if(I=3*(i+(K&j[H])),K>>>=h[I+1],L-=h[I+1],J=h[I],0===J){l=h[I+2],b=D;break}if(0!==(16&J)){m=15&J,e=h[I+2],b=z;break}if(0===(64&J)){k=J,i=I/3+h[I+2];break}if(0!==(32&J)){b=E;break}return b=G,v.msg="invalid literal/length code",w=g,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);case z:for(H=m;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}e+=K&j[H],K>>=H,L-=H,k=p,h=s,i=t,b=A;case A:for(H=k;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}if(I=3*(i+(K&j[H])),K>>=h[I+1],L-=h[I+1],J=h[I],0!==(16&J)){m=15&J,n=h[I+2],b=B;break}if(0===(64&J)){k=J,i=I/3+h[I+2];break}return b=G,v.msg="invalid distance code",w=g,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);case B:for(H=m;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}n+=K&j[H],K>>=H,L-=H,b=C;case C:for(Q=O-n;0>Q;)Q+=a.end;for(;0!==e;){if(0===P&&(O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P&&(a.write=O,w=a.inflate_flush(v,w),O=a.write,P=O<a.read?a.read-O-1:a.end-O,O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P)))return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);a.window[O++]=a.window[Q++],P--,Q==a.end&&(Q=0),e--}b=x;break;case D:if(0===P&&(O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P&&(a.write=O,w=a.inflate_flush(v,w),O=a.write,P=O<a.read?a.read-O-1:a.end-O,O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P)))return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,a.window[O++]=l,P--,b=x;break;case E:if(L>7&&(L-=8,N++,M--),a.write=O,w=a.inflate_flush(v,w),O=a.write,P=O<a.read?a.read-O-1:a.end-O,a.read!=a.write)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);b=F;case F:return w=d,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);case G:return w=g,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);default:return w=f,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w)}},a.free=function(){}}function T(a,b){var o,e=this,h=J,l=0,m=0,n=0,p=[0],q=[0],r=new H,s=0,t=new Int32Array(3*k),u=0,v=new w;e.bitk=0,e.bitb=0,e.window=new Uint8Array(b),e.end=b,e.read=0,e.write=0,e.reset=function(a,b){b&&(b[0]=u),h==P&&r.free(a),h=J,e.bitk=0,e.bitb=0,e.read=e.write=0},e.reset(a,null),e.inflate_flush=function(a,b){var f=a.next_out_index,g=e.read,d=(g<=e.write?e.write:e.end)-g;return d>a.avail_out&&(d=a.avail_out),0!==d&&b==i&&(b=c),a.avail_out-=d,a.total_out+=d,a.next_out.set(e.window.subarray(g,g+d),f),f+=d,g+=d,g==e.end&&(g=0,e.write==e.end&&(e.write=0),d=e.write-g,d>a.avail_out&&(d=a.avail_out),0!==d&&b==i&&(b=c),a.avail_out-=d,a.total_out+=d,a.next_out.set(e.window.subarray(g,g+d),f),f+=d,g+=d),a.next_out_index=f,e.read=g,b},e.proc=function(a,b){for(var i,B,C,D,E,F,G,H,T,U,V,W,x=a.next_in_index,y=a.avail_in,k=e.bitb,u=e.bitk,z=e.write,A=z<e.read?e.read-z-1:e.end-z;;)switch(h){case J:for(;3>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}switch(i=7&k,s=1&i,i>>>1){case 0:k>>>=3,u-=3,i=7&u,k>>>=i,u-=i,h=K;break;case 1:C=[],D=[],E=[[]],F=[[]],w.inflate_trees_fixed(C,D,E,F),r.init(C[0],D[0],E[0],0,F[0],0),k>>>=3,u-=3,h=P;break;case 2:k>>>=3,u-=3,h=M;break;case 3:return k>>>=3,u-=3,h=S,a.msg="invalid block type",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b)}break;case K:for(;32>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if((65535&~k>>>16)!=(65535&k))return h=S,a.msg="invalid stored block lengths",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);l=65535&k,k=u=0,h=0!==l?L:0!==s?Q:J;break;case L:if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);if(0===A&&(z==e.end&&0!==e.read&&(z=0,A=z<e.read?e.read-z-1:e.end-z),0===A&&(e.write=z,b=e.inflate_flush(a,b),z=e.write,A=z<e.read?e.read-z-1:e.end-z,z==e.end&&0!==e.read&&(z=0,A=z<e.read?e.read-z-1:e.end-z),0===A)))return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);if(b=c,i=l,i>y&&(i=y),i>A&&(i=A),e.window.set(a.read_buf(x,i),z),x+=i,y-=i,z+=i,A-=i,0!==(l-=i))break;h=0!==s?Q:J;break;case M:for(;14>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if(m=i=16383&k,(31&i)>29||(31&i>>5)>29)return h=S,a.msg="too many length or distance symbols",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);if(i=258+(31&i)+(31&i>>5),!o||o.length<i)o=[];else for(B=0;i>B;B++)o[B]=0;k>>>=14,u-=14,n=0,h=N;case N:for(;4+(m>>>10)>n;){for(;3>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}o[I[n++]]=7&k,k>>>=3,u-=3}for(;19>n;)o[I[n++]]=0;if(p[0]=7,i=v.inflate_trees_bits(o,p,q,t,a),i!=c)return b=i,b==g&&(o=null,h=S),e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);n=0,h=O;case O:for(;;){if(i=m,n>=258+(31&i)+(31&i>>5))break;for(i=p[0];i>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if(i=t[3*(q[0]+(k&j[i]))+1],H=t[3*(q[0]+(k&j[i]))+2],16>H)k>>>=i,u-=i,o[n++]=H;else{for(B=18==H?7:H-14,G=18==H?11:3;i+B>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if(k>>>=i,u-=i,G+=k&j[B],k>>>=B,u-=B,B=n,i=m,B+G>258+(31&i)+(31&i>>5)||16==H&&1>B)return o=null,h=S,a.msg="invalid bit length repeat",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);H=16==H?o[B-1]:0;do o[B++]=H;while(0!==--G);n=B}}if(q[0]=-1,T=[],U=[],V=[],W=[],T[0]=9,U[0]=6,i=m,i=v.inflate_trees_dynamic(257+(31&i),1+(31&i>>5),o,T,U,V,W,t,a),i!=c)return i==g&&(o=null,h=S),b=i,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);r.init(T[0],U[0],t,V[0],t,W[0]),h=P;case P:if(e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,(b=r.proc(e,a,b))!=d)return e.inflate_flush(a,b);if(b=c,r.free(a),x=a.next_in_index,y=a.avail_in,k=e.bitb,u=e.bitk,z=e.write,A=z<e.read?e.read-z-1:e.end-z,0===s){h=J;break}h=Q;case Q:if(e.write=z,b=e.inflate_flush(a,b),z=e.write,A=z<e.read?e.read-z-1:e.end-z,e.read!=e.write)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);h=R;case R:return b=d,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);case S:return b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);default:return b=f,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b)}},e.free=function(a){e.reset(a,null),e.window=null,t=null},e.set_dictionary=function(a,b,c){e.window.set(a.subarray(b,b+c),0),e.read=e.write=c},e.sync_point=function(){return h==K?1:0}}function fb(){function b(a){return a&&a.istate?(a.total_in=a.total_out=0,a.msg=null,a.istate.mode=bb,a.istate.blocks.reset(a,null),c):f}var a=this;a.mode=0,a.method=0,a.was=[0],a.need=0,a.marker=0,a.wbits=0,a.inflateEnd=function(b){return a.blocks&&a.blocks.free(b),a.blocks=null,c},a.inflateInit=function(d,e){return d.msg=null,a.blocks=null,8>e||e>15?(a.inflateEnd(d),f):(a.wbits=e,d.istate.blocks=new T(d,1<<e),b(d),c)},a.inflate=function(a,b){var h,j;if(!a||!a.istate||!a.next_in)return f;for(b=b==m?i:c,h=i;;)switch(a.istate.mode){case W:if(0===a.avail_in)return h;if(h=b,a.avail_in--,a.total_in++,(15&(a.istate.method=a.read_byte(a.next_in_index++)))!=V){a.istate.mode=db,a.msg="unknown compression method",a.istate.marker=5;break}if((a.istate.method>>4)+8>a.istate.wbits){a.istate.mode=db,a.msg="invalid window size",a.istate.marker=5;break}a.istate.mode=X;case X:if(0===a.avail_in)return h;if(h=b,a.avail_in--,a.total_in++,j=255&a.read_byte(a.next_in_index++),0!==((a.istate.method<<8)+j)%31){a.istate.mode=db,a.msg="incorrect header check",a.istate.marker=5;break}if(0===(j&U)){a.istate.mode=bb;break}a.istate.mode=Y;case Y:if(0===a.avail_in)return h;h=b,a.avail_in--,a.total_in++,a.istate.need=4278190080&(255&a.read_byte(a.next_in_index++))<<24,a.istate.mode=Z;case Z:if(0===a.avail_in)return h;h=b,a.avail_in--,a.total_in++,a.istate.need+=16711680&(255&a.read_byte(a.next_in_index++))<<16,a.istate.mode=$;case $:if(0===a.avail_in)return h;h=b,a.avail_in--,a.total_in++,a.istate.need+=65280&(255&a.read_byte(a.next_in_index++))<<8,a.istate.mode=_;case _:return 0===a.avail_in?h:(h=b,a.avail_in--,a.total_in++,a.istate.need+=255&a.read_byte(a.next_in_index++),a.istate.mode=ab,e);case ab:return a.istate.mode=db,a.msg="need dictionary",a.istate.marker=0,f;case bb:if(h=a.istate.blocks.proc(a,h),h==g){a.istate.mode=db,a.istate.marker=0;break}if(h==c&&(h=b),h!=d)return h;h=b,a.istate.blocks.reset(a,a.istate.was),a.istate.mode=cb;case cb:return d;case db:return g;default:return f}},a.inflateSetDictionary=function(a,b,d){var e=0,g=d;return a&&a.istate&&a.istate.mode==ab?(g>=1<<a.istate.wbits&&(g=(1<<a.istate.wbits)-1,e=d-g),a.istate.blocks.set_dictionary(b,e,g),a.istate.mode=bb,c):f},a.inflateSync=function(a){var d,e,h,j,k;if(!a||!a.istate)return f;if(a.istate.mode!=db&&(a.istate.mode=db,a.istate.marker=0),0===(d=a.avail_in))return i;for(e=a.next_in_index,h=a.istate.marker;0!==d&&4>h;)a.read_byte(e)==eb[h]?h++:h=0!==a.read_byte(e)?0:4-h,e++,d--;return a.total_in+=e-a.next_in_index,a.next_in_index=e,a.avail_in=d,a.istate.marker=h,4!=h?g:(j=a.total_in,k=a.total_out,b(a),a.total_in=j,a.total_out=k,a.istate.mode=bb,c)},a.inflateSyncPoint=function(a){return a&&a.istate&&a.istate.blocks?a.istate.blocks.sync_point():f}}function gb(){}function hb(){var a=this,b=new gb,e=512,f=l,g=new Uint8Array(e),h=!1;b.inflateInit(),b.next_out=g,a.append=function(a,j){var k,p,l=[],m=0,n=0,o=0;if(0!==a.length){b.next_in_index=0,b.next_in=a,b.avail_in=a.length;do{if(b.next_out_index=0,b.avail_out=e,0!==b.avail_in||h||(b.next_in_index=0,h=!0),k=b.inflate(f),h&&k===i){if(0!==b.avail_in)throw new Error("inflating: bad input")}else if(k!==c&&k!==d)throw new Error("inflating: "+b.msg);if((h||k===d)&&b.avail_in===a.length)throw new Error("inflating: bad input");b.next_out_index&&(b.next_out_index===e?l.push(new Uint8Array(g)):l.push(new Uint8Array(g.subarray(0,b.next_out_index)))),o+=b.next_out_index,j&&b.next_in_index>0&&b.next_in_index!=m&&(j(b.next_in_index),m=b.next_in_index)}while(b.avail_in>0||0===b.avail_out);return p=new Uint8Array(o),l.forEach(function(a){p.set(a,n),n+=a.length}),p}},a.flush=function(){b.inflateEnd()}}var x,y,z,A,B,C,D,E,F,G,I,J,K,L,M,N,O,P,Q,R,S,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,ib,b=15,c=0,d=1,e=2,f=-2,g=-3,h=-4,i=-5,j=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],k=1440,l=0,m=4,n=9,o=5,p=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],q=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],t=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],u=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],v=15;w.inflate_trees_fixed=function(a,b,d,e){return a[0]=n,b[0]=o,d[0]=p,e[0]=q,c},x=0,y=1,z=2,A=3,B=4,C=5,D=6,E=7,F=8,G=9,I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],J=0,K=1,L=2,M=3,N=4,O=5,P=6,Q=7,R=8,S=9,U=32,V=8,W=0,X=1,Y=2,Z=3,$=4,_=5,ab=6,bb=7,cb=12,db=13,eb=[0,0,255,255],gb.prototype={inflateInit:function(a){var c=this;return c.istate=new fb,a||(a=b),c.istate.inflateInit(c,a)},inflate:function(a){var b=this;return b.istate?b.istate.inflate(b,a):f},inflateEnd:function(){var b,a=this;return a.istate?(b=a.istate.inflateEnd(a),a.istate=null,b):f},inflateSync:function(){var a=this;return a.istate?a.istate.inflateSync(a):f},inflateSetDictionary:function(a,b){var c=this;return c.istate?c.istate.inflateSetDictionary(c,a,b):f},read_byte:function(a){var b=this;return b.next_in.subarray(a,a+1)[0]},read_buf:function(a,b){var c=this;return c.next_in.subarray(a,a+b)}},ib=a.zip||a,ib.Inflater=ib._jzlib_Inflater=hb}!function(a){"use strict";function d(){inflate(a),postMessage({type:"importScripts"})}function e(b){var d=a[b.codecClass],e=b.sn;if(c[e])throw Error("duplicated sn");c[e]={codec:new d(b.options),crcInput:"input"===b.crcType,crcOutput:"output"===b.crcType,crc:new j},postMessage({type:"newTask",sn:e})}function g(a){var i,j,k,m,n,o,p,b=a.sn,d=a.type,g=a.data,h=c[b];if(!h&&a.codecClass&&(e(a),h=c[b]),i="append"===d,j=f(),i)try{k=h.codec.append(g,function(a){postMessage({type:"progress",sn:b,loaded:a})})}catch(l){throw delete c[b],l}else delete c[b],k=h.codec.flush();m=f()-j,j=f(),g&&h.crcInput&&h.crc.append(g),k&&h.crcOutput&&h.crc.append(k),n=f()-j,o={type:d,sn:b,codecTime:m,crcTime:n},p=[],k&&(o.data=k,p.push(k.buffer)),i||!h.crcInput&&!h.crcOutput||(o.crc=h.crc.get());try{postMessage(o,p)}catch(q){postMessage(o)}}function h(a,b,c){var d={type:a,sn:b,error:i(c)};postMessage(d)}function i(a){return{message:a.message,stack:a.stack}}function j(){this.crc=-1}function k(){}var b,c,f;if(a.zWorkerInitialized)throw new Error("z-worker.js should be run only once");a.zWorkerInitialized=!0,addEventListener("message",function(a){var c=a.data,d=c.type,e=c.sn,f=b[d];if(f)try{f(c)}catch(g){h(d,e,g)}postMessage({type:"echo",originalType:d,sn:e})}),b={importScripts:d,newTask:e,append:g,flush:g},c={},f=a.performance?a.performance.now.bind(a.performance):Date.now,j.prototype.append=function(a){var d,e,b=0|this.crc,c=this.table;for(d=0,e=0|a.length;e>d;d++)b=b>>>8^c[255&(b^a[d])];this.crc=b},j.prototype.get=function(){return~this.crc},j.prototype.table=function(){var a,b,c,d=[];for(a=0;256>a;a++){for(c=a,b=0;8>b;b++)1&c?c=3988292384^c>>>1:c>>>=1;d[a]=c}return d}(),a.NOOP=k,k.prototype.append=function(a){return a},k.prototype.flush=function(){}}(this);';
var zWorker = URL.createObjectURL(new Blob([workerRawString], {
  type: 'text/javascript'
}));
var ERR_BAD_FORMAT = 'File format is not recognized.';
var ERR_CRC = 'CRC failed.';
var ERR_ENCRYPTED = 'File contains encrypted entry.';
var ERR_ZIP64 = 'File is using Zip64 (4gb+ file size).';
var ERR_READ = 'Error while reading zip file.';
var ERR_WRITE = 'Error while writing zip file.';
var ERR_WRITE_DATA = 'Error while writing file data.';
var ERR_READ_DATA = 'Error while reading file data.';
var ERR_DUPLICATED_NAME = 'File already exists.';
var CHUNK_SIZE = 512 * 1024;
var TEXT_PLAIN = 'text/plain';
var appendABViewSupported;
try {
  appendABViewSupported = new Blob([new DataView(new ArrayBuffer(0))]).size === 0;
} catch (err) {
  appendABViewSupported = undefined;
}
var zip = {};

////////////

function Crc32() {
  this.crc = -1;
}
Crc32.prototype.append = function append(data) {
  var crc = this.crc | 0,
    table = this.table;
  for (var offset = 0, len = data.length | 0; offset < len; offset++) crc = crc >>> 8 ^ table[(crc ^ data[offset]) & 0xFF];
  this.crc = crc;
};
Crc32.prototype.get = function get() {
  return ~this.crc;
};
Crc32.prototype.table = function () {
  var i,
    j,
    t,
    table = []; // Uint32Array is actually slower than []
  for (i = 0; i < 256; i++) {
    t = i;
    for (j = 0; j < 8; j++) if (t & 1) t = t >>> 1 ^ 0xEDB88320;else t = t >>> 1;
    table[i] = t;
  }
  return table;
}();

// "no-op" codec
function NOOP() {}
NOOP.prototype.append = function append(bytes, onprogress) {
  return bytes;
};
NOOP.prototype.flush = function flush() {};
function blobSlice(blob, index, length) {
  if (index < 0 || length < 0 || index + length > blob.size) throw new RangeError('offset:' + index + ', length:' + length + ', size:' + blob.size);
  if (blob.slice) return blob.slice(index, index + length);else if (blob.webkitSlice) return blob.webkitSlice(index, index + length);else if (blob.mozSlice) return blob.mozSlice(index, index + length);else if (blob.msSlice) return blob.msSlice(index, index + length);
}
function getDataHelper(byteLength, bytes) {
  var dataBuffer, dataArray;
  dataBuffer = new ArrayBuffer(byteLength);
  dataArray = new Uint8Array(dataBuffer);
  if (bytes) dataArray.set(bytes, 0);
  return {
    buffer: dataBuffer,
    array: dataArray,
    view: new DataView(dataBuffer)
  };
}

// Readers
function Reader() {}
function TextReader(text) {
  var that = this,
    blobReader;
  function init(callback, onerror) {
    var blob = new Blob([text], {
      type: TEXT_PLAIN
    });
    blobReader = new BlobReader(blob);
    blobReader.init(function () {
      that.size = blobReader.size;
      callback();
    }, onerror);
  }
  function readUint8Array(index, length, callback, onerror) {
    blobReader.readUint8Array(index, length, callback, onerror);
  }
  that.size = 0;
  that.init = init;
  that.readUint8Array = readUint8Array;
}
TextReader.prototype = new Reader();
TextReader.prototype.constructor = TextReader;
function Data64URIReader(dataURI) {
  var that = this,
    dataStart;
  function init(callback) {
    var dataEnd = dataURI.length;
    while (dataURI.charAt(dataEnd - 1) == "=") dataEnd--;
    dataStart = dataURI.indexOf(",") + 1;
    that.size = Math.floor((dataEnd - dataStart) * 0.75);
    callback();
  }
  function readUint8Array(index, length, callback) {
    var i,
      data = getDataHelper(length);
    var start = Math.floor(index / 3) * 4;
    var end = Math.ceil((index + length) / 3) * 4;
    var bytes = atob(dataURI.substring(start + dataStart, end + dataStart));
    var delta = index - Math.floor(start / 4) * 3;
    for (i = delta; i < delta + length; i++) data.array[i - delta] = bytes.charCodeAt(i);
    callback(data.array);
  }
  that.size = 0;
  that.init = init;
  that.readUint8Array = readUint8Array;
}
Data64URIReader.prototype = new Reader();
Data64URIReader.prototype.constructor = Data64URIReader;
function BlobReader(blob) {
  var that = this;
  function init(callback) {
    that.size = blob.size;
    callback();
  }
  function readUint8Array(index, length, callback, onerror) {
    var reader = new FileReader();
    reader.onload = function (e) {
      callback(new Uint8Array(e.target.result));
    };
    reader.onerror = onerror;
    try {
      reader.readAsArrayBuffer(blobSlice(blob, index, length));
    } catch (e) {
      onerror(e);
    }
  }
  that.size = 0;
  that.init = init;
  that.readUint8Array = readUint8Array;
}
BlobReader.prototype = new Reader();
BlobReader.prototype.constructor = BlobReader;

// Writers

function Writer() {}
Writer.prototype.getData = function (callback) {
  callback(this.data);
};
function TextWriter(encoding) {
  var that = this,
    blob;
  function init(callback) {
    blob = new Blob([], {
      type: TEXT_PLAIN
    });
    callback();
  }
  function writeUint8Array(array, callback) {
    blob = new Blob([blob, appendABViewSupported ? array : array.buffer], {
      type: TEXT_PLAIN
    });
    callback();
  }
  function getData(callback, onerror) {
    var reader = new FileReader();
    reader.onload = function (e) {
      callback(e.target.result);
    };
    reader.onerror = onerror;
    reader.readAsText(blob, encoding);
  }
  that.init = init;
  that.writeUint8Array = writeUint8Array;
  that.getData = getData;
}
TextWriter.prototype = new Writer();
TextWriter.prototype.constructor = TextWriter;
function Data64URIWriter(contentType) {
  var that = this,
    data = "",
    pending = "";
  function init(callback) {
    data += "data:" + (contentType || "") + ";base64,";
    callback();
  }
  function writeUint8Array(array, callback) {
    var i,
      delta = pending.length,
      dataString = pending;
    pending = "";
    for (i = 0; i < Math.floor((delta + array.length) / 3) * 3 - delta; i++) dataString += String.fromCharCode(array[i]);
    for (; i < array.length; i++) pending += String.fromCharCode(array[i]);
    if (dataString.length > 2) data += btoa(dataString);else pending = dataString;
    callback();
  }
  function getData(callback) {
    callback(data + btoa(pending));
  }
  that.init = init;
  that.writeUint8Array = writeUint8Array;
  that.getData = getData;
}
Data64URIWriter.prototype = new Writer();
Data64URIWriter.prototype.constructor = Data64URIWriter;
function BlobWriter(contentType) {
  var blob,
    that = this;
  function init(callback) {
    blob = new Blob([], {
      type: contentType
    });
    callback();
  }
  function writeUint8Array(array, callback) {
    blob = new Blob([blob, appendABViewSupported ? array : array.buffer], {
      type: contentType
    });
    callback();
  }
  function getData(callback) {
    callback(blob);
  }
  that.init = init;
  that.writeUint8Array = writeUint8Array;
  that.getData = getData;
}
BlobWriter.prototype = new Writer();
BlobWriter.prototype.constructor = BlobWriter;

/**
 * inflate/deflate core functions
 * @param worker {Worker} web worker for the task.
 * @param initialMessage {Object} initial message to be sent to the worker. should contain
 *   sn(serial number for distinguishing multiple tasks sent to the worker), and codecClass.
 *   This function may add more properties before sending.
 */
function launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror) {
  var chunkIndex = 0,
    index,
    outputSize,
    sn = initialMessage.sn,
    crc;
  function onflush() {
    worker.removeEventListener('message', onmessage, false);
    onend(outputSize, crc);
  }
  function onmessage(event) {
    var message = event.data,
      data = message.data,
      err = message.error;
    if (err) {
      err.toString = function () {
        return 'Error: ' + this.message;
      };
      onreaderror(err);
      return;
    }
    if (message.sn !== sn) return;
    if (typeof message.codecTime === 'number') worker.codecTime += message.codecTime; // should be before onflush()
    if (typeof message.crcTime === 'number') worker.crcTime += message.crcTime;
    switch (message.type) {
      case 'append':
        if (data) {
          outputSize += data.length;
          writer.writeUint8Array(data, function () {
            step();
          }, onwriteerror);
        } else step();
        break;
      case 'flush':
        crc = message.crc;
        if (data) {
          outputSize += data.length;
          writer.writeUint8Array(data, function () {
            onflush();
          }, onwriteerror);
        } else onflush();
        break;
      case 'progress':
        if (onprogress) onprogress(index + message.loaded, size);
        break;
      case 'importScripts': //no need to handle here
      case 'newTask':
      case 'echo':
        break;
      default:
        console.warn('zip.js:launchWorkerProcess: unknown message: ', message);
    }
  }
  function step() {
    index = chunkIndex * CHUNK_SIZE;
    // use `<=` instead of `<`, because `size` may be 0.
    if (index <= size) {
      reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function (array) {
        if (onprogress) onprogress(index, size);
        var msg = index === 0 ? initialMessage : {
          sn: sn
        };
        msg.type = 'append';
        msg.data = array;

        // posting a message with transferables will fail on IE10
        try {
          worker.postMessage(msg, [array.buffer]);
        } catch (ex) {
          worker.postMessage(msg); // retry without transferables
        }

        chunkIndex++;
      }, onreaderror);
    } else {
      worker.postMessage({
        sn: sn,
        type: 'flush'
      });
    }
  }
  outputSize = 0;
  worker.addEventListener('message', onmessage, false);
  step();
}
function launchProcess(process, reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror) {
  var chunkIndex = 0,
    index,
    outputSize = 0,
    crcInput = crcType === 'input',
    crcOutput = crcType === 'output',
    crc = new Crc32();
  function step() {
    var outputData;
    index = chunkIndex * CHUNK_SIZE;
    if (index < size) reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function (inputData) {
      var outputData;
      try {
        outputData = process.append(inputData, function (loaded) {
          if (onprogress) onprogress(index + loaded, size);
        });
      } catch (e) {
        onreaderror(e);
        return;
      }
      if (outputData) {
        outputSize += outputData.length;
        writer.writeUint8Array(outputData, function () {
          chunkIndex++;
          setTimeout(step, 1);
        }, onwriteerror);
        if (crcOutput) crc.append(outputData);
      } else {
        chunkIndex++;
        setTimeout(step, 1);
      }
      if (crcInput) crc.append(inputData);
      if (onprogress) onprogress(index, size);
    }, onreaderror);else {
      try {
        outputData = process.flush();
      } catch (e) {
        onreaderror(e);
        return;
      }
      if (outputData) {
        if (crcOutput) crc.append(outputData);
        outputSize += outputData.length;
        writer.writeUint8Array(outputData, function () {
          onend(outputSize, crc.get());
        }, onwriteerror);
      } else onend(outputSize, crc.get());
    }
  }
  step();
}
function inflate(worker, sn, reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
  var crcType = computeCrc32 ? 'output' : 'none';
  if (zip.useWebWorkers) {
    var initialMessage = {
      sn: sn,
      codecClass: 'Inflater',
      crcType: crcType
    };
    launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror);
  } else launchProcess(new zip.Inflater(), reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror);
}
function deflate(worker, sn, reader, writer, level, onend, onprogress, onreaderror, onwriteerror) {
  var crcType = 'input';
  if (zip.useWebWorkers) {
    var initialMessage = {
      sn: sn,
      options: {
        level: level
      },
      codecClass: 'Deflater',
      crcType: crcType
    };
    launchWorkerProcess(worker, initialMessage, reader, writer, 0, reader.size, onprogress, onend, onreaderror, onwriteerror);
  } else launchProcess(new zip.Deflater(), reader, writer, 0, reader.size, crcType, onprogress, onend, onreaderror, onwriteerror);
}
function copy(worker, sn, reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
  var crcType = 'input';
  if (zip.useWebWorkers && computeCrc32) {
    var initialMessage = {
      sn: sn,
      codecClass: 'NOOP',
      crcType: crcType
    };
    launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror);
  } else launchProcess(new NOOP(), reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror);
}

// ZipReader

function decodeASCII(str) {
  var i,
    out = "",
    charCode,
    extendedASCII = ["\xC7", "\xFC", "\xE9", "\xE2", "\xE4", "\xE0", "\xE5", "\xE7", "\xEA", "\xEB", "\xE8", "\xEF", "\xEE", "\xEC", "\xC4", "\xC5", "\xC9", "\xE6", "\xC6", "\xF4", "\xF6", "\xF2", "\xFB", "\xF9", "\xFF", "\xD6", "\xDC", "\xF8", "\xA3", "\xD8", "\xD7", "\u0192", "\xE1", "\xED", "\xF3", "\xFA", "\xF1", "\xD1", "\xAA", "\xBA", "\xBF", "\xAE", "\xAC", "\xBD", "\xBC", "\xA1", "\xAB", "\xBB", '_', '_', '_', "\xA6", "\xA6", "\xC1", "\xC2", "\xC0", "\xA9", "\xA6", "\xA6", '+', '+', "\xA2", "\xA5", '+', '+', '-', '-', '+', '-', '+', "\xE3", "\xC3", '+', '+', '-', '-', "\xA6", '-', '+', "\xA4", "\xF0", "\xD0", "\xCA", "\xCB", "\xC8", 'i', "\xCD", "\xCE", "\xCF", '+', '+', '_', '_', "\xA6", "\xCC", '_', "\xD3", "\xDF", "\xD4", "\xD2", "\xF5", "\xD5", "\xB5", "\xFE", "\xDE", "\xDA", "\xDB", "\xD9", "\xFD", "\xDD", "\xAF", "\xB4", "\xAD", "\xB1", '_', "\xBE", "\xB6", "\xA7", "\xF7", "\xB8", "\xB0", "\xA8", "\xB7", "\xB9", "\xB3", "\xB2", '_', ' '];
  for (i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i) & 0xFF;
    if (charCode > 127) out += extendedASCII[charCode - 128];else out += String.fromCharCode(charCode);
  }
  return out;
}
function decodeUTF8(string) {
  return decodeURIComponent(escape(string));
}
function getString(bytes) {
  var i,
    str = "";
  for (i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);
  return str;
}
function getDate(timeRaw) {
  var date = (timeRaw & 0xffff0000) >> 16,
    time = timeRaw & 0x0000ffff;
  try {
    return new Date(1980 + ((date & 0xFE00) >> 9), ((date & 0x01E0) >> 5) - 1, date & 0x001F, (time & 0xF800) >> 11, (time & 0x07E0) >> 5, (time & 0x001F) * 2, 0);
  } catch (e) {}
}
function readCommonHeader(entry, data, index, centralDirectory, onerror) {
  entry.version = data.view.getUint16(index, true);
  entry.bitFlag = data.view.getUint16(index + 2, true);
  entry.compressionMethod = data.view.getUint16(index + 4, true);
  entry.lastModDateRaw = data.view.getUint32(index + 6, true);
  entry.lastModDate = getDate(entry.lastModDateRaw);
  if ((entry.bitFlag & 0x01) === 0x01) {
    onerror(ERR_ENCRYPTED);
    return;
  }
  if (centralDirectory || (entry.bitFlag & 0x0008) != 0x0008) {
    entry.crc32 = data.view.getUint32(index + 10, true);
    entry.compressedSize = data.view.getUint32(index + 14, true);
    entry.uncompressedSize = data.view.getUint32(index + 18, true);
  }
  if (entry.compressedSize === 0xFFFFFFFF || entry.uncompressedSize === 0xFFFFFFFF) {
    onerror(ERR_ZIP64);
    return;
  }
  entry.filenameLength = data.view.getUint16(index + 22, true);
  entry.extraFieldLength = data.view.getUint16(index + 24, true);
}
function createZipReader(reader, callback, onerror) {
  var inflateSN = 0;
  function Entry() {}
  Entry.prototype.getData = function (writer, onend, onprogress, checkCrc32) {
    var that = this;
    function testCrc32(crc32) {
      var dataCrc32 = getDataHelper(4);
      dataCrc32.view.setUint32(0, crc32);
      return that.crc32 == dataCrc32.view.getUint32(0);
    }
    function getWriterData(uncompressedSize, crc32) {
      if (checkCrc32 && !testCrc32(crc32)) onerror(ERR_CRC);else writer.getData(function (data) {
        onend(data);
      });
    }
    function onreaderror(err) {
      onerror(err || ERR_READ_DATA);
    }
    function onwriteerror(err) {
      onerror(err || ERR_WRITE_DATA);
    }
    reader.readUint8Array(that.offset, 30, function (bytes) {
      var data = getDataHelper(bytes.length, bytes),
        dataOffset;
      if (data.view.getUint32(0) != 0x504b0304) {
        onerror(ERR_BAD_FORMAT);
        return;
      }
      readCommonHeader(that, data, 4, false, onerror);
      dataOffset = that.offset + 30 + that.filenameLength + that.extraFieldLength;
      writer.init(function () {
        if (that.compressionMethod === 0) copy(that._worker, inflateSN++, reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);else inflate(that._worker, inflateSN++, reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
      }, onwriteerror);
    }, onreaderror);
  };
  function seekEOCDR(eocdrCallback) {
    // "End of central directory record" is the last part of a zip archive, and is at least 22 bytes long.
    // Zip file comment is the last part of EOCDR and has max length of 64KB,
    // so we only have to search the last 64K + 22 bytes of a archive for EOCDR signature (0x06054b50).
    var EOCDR_MIN = 22;
    if (reader.size < EOCDR_MIN) {
      onerror(ERR_BAD_FORMAT);
      return;
    }
    var ZIP_COMMENT_MAX = 256 * 256,
      EOCDR_MAX = EOCDR_MIN + ZIP_COMMENT_MAX;

    // In most cases, the EOCDR is EOCDR_MIN bytes long
    doSeek(EOCDR_MIN, function () {
      // If not found, try within EOCDR_MAX bytes
      doSeek(Math.min(EOCDR_MAX, reader.size), function () {
        onerror(ERR_BAD_FORMAT);
      });
    });

    // seek last length bytes of file for EOCDR
    function doSeek(length, eocdrNotFoundCallback) {
      reader.readUint8Array(reader.size - length, length, function (bytes) {
        for (var i = bytes.length - EOCDR_MIN; i >= 0; i--) {
          if (bytes[i] === 0x50 && bytes[i + 1] === 0x4b && bytes[i + 2] === 0x05 && bytes[i + 3] === 0x06) {
            eocdrCallback(new DataView(bytes.buffer, i, EOCDR_MIN));
            return;
          }
        }
        eocdrNotFoundCallback();
      }, function () {
        onerror(ERR_READ);
      });
    }
  }
  var zipReader = {
    getEntries: function getEntries(callback) {
      var worker = this._worker;
      // look for End of central directory record
      seekEOCDR(function (dataView) {
        var datalength, fileslength;
        datalength = dataView.getUint32(16, true);
        fileslength = dataView.getUint16(8, true);
        if (datalength < 0 || datalength >= reader.size) {
          onerror(ERR_BAD_FORMAT);
          return;
        }
        reader.readUint8Array(datalength, reader.size - datalength, function (bytes) {
          var i,
            index = 0,
            entries = [],
            entry,
            filename,
            comment,
            data = getDataHelper(bytes.length, bytes);
          for (i = 0; i < fileslength; i++) {
            entry = new Entry();
            entry._worker = worker;
            if (data.view.getUint32(index) != 0x504b0102) {
              onerror(ERR_BAD_FORMAT);
              return;
            }
            readCommonHeader(entry, data, index + 6, true, onerror);
            entry.commentLength = data.view.getUint16(index + 32, true);
            entry.directory = (data.view.getUint8(index + 38) & 0x10) == 0x10;
            entry.offset = data.view.getUint32(index + 42, true);
            filename = getString(data.array.subarray(index + 46, index + 46 + entry.filenameLength));
            entry.filename = (entry.bitFlag & 0x0800) === 0x0800 ? decodeUTF8(filename) : decodeASCII(filename);
            if (!entry.directory && entry.filename.charAt(entry.filename.length - 1) == "/") entry.directory = true;
            comment = getString(data.array.subarray(index + 46 + entry.filenameLength + entry.extraFieldLength, index + 46 + entry.filenameLength + entry.extraFieldLength + entry.commentLength));
            entry.comment = (entry.bitFlag & 0x0800) === 0x0800 ? decodeUTF8(comment) : decodeASCII(comment);
            entries.push(entry);
            index += 46 + entry.filenameLength + entry.extraFieldLength + entry.commentLength;
          }
          callback(entries);
        }, function () {
          onerror(ERR_READ);
        });
      });
    },
    close: function close(callback) {
      if (this._worker) {
        this._worker.terminate();
        this._worker = null;
      }
      if (callback) callback();
    },
    _worker: null
  };
  if (!zip.useWebWorkers) callback(zipReader);else {
    createWorker('inflater', function (worker) {
      zipReader._worker = worker;
      callback(zipReader);
    }, function (err) {
      onerror(err);
    });
  }
}

// ZipWriter

function encodeUTF8(string) {
  return unescape(encodeURIComponent(string));
}
function getBytes(str) {
  var i,
    array = [];
  for (i = 0; i < str.length; i++) array.push(str.charCodeAt(i));
  return array;
}
function createZipWriter(writer, callback, onerror, dontDeflate) {
  var files = {},
    filenames = [],
    datalength = 0;
  var deflateSN = 0;
  function onwriteerror(err) {
    onerror(err || ERR_WRITE);
  }
  function onreaderror(err) {
    onerror(err || ERR_READ_DATA);
  }
  var zipWriter = {
    add: function add(name, reader, onend, onprogress, options) {
      var header, filename, date;
      var worker = this._worker;
      function writeHeader(callback) {
        var data;
        date = options.lastModDate || new Date();
        header = getDataHelper(26);
        files[name] = {
          headerArray: header.array,
          directory: options.directory,
          filename: filename,
          offset: datalength,
          comment: getBytes(encodeUTF8(options.comment || ''))
        };
        header.view.setUint32(0, 0x14000808);
        if (options.version) header.view.setUint8(0, options.version);
        if (!dontDeflate && options.level !== 0 && !options.directory) header.view.setUint16(4, 0x0800);
        header.view.setUint16(6, (date.getHours() << 6 | date.getMinutes()) << 5 | date.getSeconds() / 2, true);
        header.view.setUint16(8, (date.getFullYear() - 1980 << 4 | date.getMonth() + 1) << 5 | date.getDate(), true);
        header.view.setUint16(22, filename.length, true);
        data = getDataHelper(30 + filename.length);
        data.view.setUint32(0, 0x504b0304);
        data.array.set(header.array, 4);
        data.array.set(filename, 30);
        datalength += data.array.length;
        writer.writeUint8Array(data.array, callback, onwriteerror);
      }
      function writeFooter(compressedLength, crc32) {
        var footer = getDataHelper(16);
        datalength += compressedLength || 0;
        footer.view.setUint32(0, 0x504b0708);
        if (typeof crc32 !== 'undefined') {
          header.view.setUint32(10, crc32, true);
          footer.view.setUint32(4, crc32, true);
        }
        if (reader) {
          footer.view.setUint32(8, compressedLength, true);
          header.view.setUint32(14, compressedLength, true);
          footer.view.setUint32(12, reader.size, true);
          header.view.setUint32(18, reader.size, true);
        }
        writer.writeUint8Array(footer.array, function () {
          datalength += 16;
          onend();
        }, onwriteerror);
      }
      function writeFile() {
        options = options || {};
        name = name.trim();
        if (options.directory && name.charAt(name.length - 1) != "/") name += "/";
        if (files.hasOwnProperty(name)) {
          onerror(ERR_DUPLICATED_NAME);
          return;
        }
        filename = getBytes(encodeUTF8(name));
        filenames.push(name);
        writeHeader(function () {
          if (reader) {
            if (dontDeflate || options.level === 0) copy(worker, deflateSN++, reader, writer, 0, reader.size, true, writeFooter, onprogress, onreaderror, onwriteerror);else deflate(worker, deflateSN++, reader, writer, options.level, writeFooter, onprogress, onreaderror, onwriteerror);
          } else writeFooter();
        });
      }
      if (reader) reader.init(writeFile, onreaderror);else writeFile();
    },
    close: function close(callback) {
      if (this._worker) {
        this._worker.terminate();
        this._worker = null;
      }
      var data,
        length = 0,
        index = 0,
        indexFilename,
        file;
      for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
        file = files[filenames[indexFilename]];
        length += 46 + file.filename.length + file.comment.length;
      }
      data = getDataHelper(length + 22);
      for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
        file = files[filenames[indexFilename]];
        data.view.setUint32(index, 0x504b0102);
        data.view.setUint16(index + 4, 0x1400);
        data.array.set(file.headerArray, index + 6);
        data.view.setUint16(index + 32, file.comment.length, true);
        if (file.directory) data.view.setUint8(index + 38, 0x10);
        data.view.setUint32(index + 42, file.offset, true);
        data.array.set(file.filename, index + 46);
        data.array.set(file.comment, index + 46 + file.filename.length);
        index += 46 + file.filename.length + file.comment.length;
      }
      data.view.setUint32(index, 0x504b0506);
      data.view.setUint16(index + 8, filenames.length, true);
      data.view.setUint16(index + 10, filenames.length, true);
      data.view.setUint32(index + 12, length, true);
      data.view.setUint32(index + 16, datalength, true);
      writer.writeUint8Array(data.array, function () {
        writer.getData(callback);
      }, onwriteerror);
    },
    _worker: null
  };
  if (!zip.useWebWorkers) callback(zipWriter);else {
    createWorker('deflater', function (worker) {
      zipWriter._worker = worker;
      callback(zipWriter);
    }, function (err) {
      onerror(err);
    });
  }
}

// var DEFAULT_WORKER_SCRIPTS = {
//   deflater: ['z-worker.js', 'deflate.js'],
//   inflater: ['z-worker.js', 'inflate.js']
// };
function createWorker(type, callback, onerror) {
  if (zip.workerScripts !== null && zip.workerScriptsPath !== null) {
    onerror(new Error('Either zip.workerScripts or zip.workerScriptsPath may be set, not both.'));
    return;
  }

  // var worker = new Worker(blobBuilder(zWorkerCode));

  var worker = new Worker(zWorker);

  // record total consumed time by inflater/deflater/crc32 in this worker
  worker.codecTime = worker.crcTime = 0;
  worker.postMessage({
    type: 'importScripts',
    scripts: ['inflate.js']
  });
  worker.addEventListener('message', onmessage);
  function onmessage(ev) {
    var msg = ev.data;
    if (msg.error) {
      worker.terminate(); // should before onerror(), because onerror() may throw.
      onerror(msg.error);
      return;
    }
    if (msg.type === 'importScripts') {
      worker.removeEventListener('message', onmessage);
      worker.removeEventListener('error', errorHandler);
      callback(worker);
    }
  }

  // catch entry script loading error and other unhandled errors
  worker.addEventListener('error', errorHandler);
  function errorHandler(err) {
    worker.terminate();
    onerror(err);
  }
}
function onerror_default(error) {
  console.error(error);
}
var extendsOpts = {
  Reader: Reader,
  Writer: Writer,
  BlobReader: BlobReader,
  Data64URIReader: Data64URIReader,
  TextReader: TextReader,
  BlobWriter: BlobWriter,
  Data64URIWriter: Data64URIWriter,
  TextWriter: TextWriter,
  createReader: function createReader(reader, callback, onerror) {
    onerror = onerror || onerror_default;
    reader.init(function () {
      createZipReader(reader, callback, onerror);
    }, onerror);
  },
  createWriter: function createWriter(writer, callback, onerror, dontDeflate) {
    onerror = onerror || onerror_default;
    dontDeflate = !!dontDeflate;
    writer.init(function () {
      createZipWriter(writer, callback, onerror, dontDeflate);
    }, onerror);
  },
  useWebWorkers: true,
  /**
   * Directory containing the default worker scripts (z-worker.js, deflate.js, and inflate.js), relative to current base url.
   * E.g.: zip.workerScripts = './';
   */
  workerScriptsPath: null,
  /**
   * Advanced option to control which scripts are loaded in the Web worker. If this option is specified, then workerScriptsPath must not be set.
   * workerScripts.deflater/workerScripts.inflater should be arrays of urls to scripts for deflater/inflater, respectively.
   * Scripts in the array are executed in order, and the first one should be z-worker.js, which is used to start the worker.
   * All urls are relative to current base url.
   * E.g.:
   * zip.workerScripts = {
   *   deflater: ['z-worker.js', 'deflate.js'],
   *   inflater: ['z-worker.js', 'inflate.js']
   * };
   */
  workerScripts: null
};
for (var i in extendsOpts) {
  zip[i] = extendsOpts[i];
}

var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init() {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }
  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}
function fromByteArray(uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }
  parts.push(output);
  return parts.join('');
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
  buffer[offset + i - d] |= s * 128;
}
var toString = {}.toString;
var isArray$2 = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined ? global$1.TYPED_ARRAY_SUPPORT : true;

/*
 * Export kMaxLength after typed array support is determined.
 */
kMaxLength();
function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}
function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }
  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};
function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }
  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }
  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};
if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) ;
}
function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}
function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};
function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};
function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }
  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }
  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);
  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }
  return that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }
  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);
    if (that.length === 0) {
      return that;
    }
    obj.copy(that, 0, 0, len);
    return that;
  }
  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === 'Buffer' && isArray$2(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}
function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}
Buffer.compare = function compare(a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }
  if (a === b) return 0;
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};
Buffer.concat = function concat(list, length) {
  if (!isArray$2(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return Buffer.alloc(0);
  }
  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }
  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};
function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }
  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }
  if (end === undefined || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return '';
  }
  if (!encoding) encoding = 'utf8';
  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);
      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);
      case 'ascii':
        return asciiSlice(this, start, end);
      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);
      case 'base64':
        return base64Slice(this, start, end);
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};
Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};
Buffer.prototype.equals = function equals(b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }
  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }
  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }
  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);
  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }
  return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }
  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;
  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }
  if (!encoding) encoding = 'utf8';
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);
      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);
      case 'ascii':
        return asciiWrite(this, string, offset, length);
      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);
      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);
      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};
Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start) end = start;
  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }
  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  return val;
};
Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }
  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }
  return val;
};
Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};
Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }
  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }
  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};
function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}
Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}
Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }
  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }
  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  var len = end - start;
  var i;
  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }
  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }
  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}
function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}
function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;
        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }
    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}

// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
}

// var Buffer = require('buffer').Buffer;
function blobToBuffer(blob, cb) {
  if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
    throw new Error('first argument must be a Blob');
  }
  if (typeof cb !== 'function') {
    throw new Error('second argument must be a function');
  }
  var reader = new FileReader();
  function onLoadEnd(e) {
    reader.removeEventListener('loadend', onLoadEnd, false);
    if (e.error) cb(e.error);else {
      cb(null, new Buffer(reader.result));
    }
  }
  reader.addEventListener('loadend', onLoadEnd, false);
  reader.readAsArrayBuffer(blob);
}

function toArray(arrayLikeObj) {
  if (!arrayLikeObj) return [];
  return Array.prototype.slice.call(arrayLikeObj);
}
function extend(destObject) {
  var args = toArray(arguments);
  if (args.length == 1) {
    return destObject;
  }
  args.shift();

  // 从前往后遍历
  for (var i = 0, l = args.length; i < l; i++) {
    for (var key in args[i]) {
      if (args[i].hasOwnProperty(key)) {
        destObject[key] = args[i][key];
      }
    }
  }
  return destObject;
}
function isTypeOf(something, type) {
  if (!type) return false;
  type = type.toLowerCase();
  var realTypeString = Object.prototype.toString.call(something);
  return realTypeString.toLowerCase() === '[object ' + type + ']';
}
function isArray$1(something) {
  return isTypeOf(something, 'array');
}
function isFunction(something) {
  return typeof something === 'function';
}
function isString(something) {
  return typeof something === 'string';
}
function isDefined(something) {
  return !(typeof something === 'undefined');
}
function isObject$1(something) {
  return _typeof(something) === 'object';
}
function isReg(something) {
  return isTypeOf(something, 'regexp');
}

/**
 *
 * @param {Function/String/RegExp} rule
 * @param {String}                 entryName
 * @return {Boolean}
 */
function isThisWhatYouNeed(rule, entryName) {
  return isFunction(rule) ? rule(entryName) : isString(rule) ? entryName.toLowerCase().indexOf(rule.toLowerCase()) > -1 : isReg(rule) ? rule.test(entryName.toLowerCase()) : false;
}

/**
 *
 * @param str
 * @param prefix
 * @returns {boolean}
 */
function startWith(str, prefix) {
  return str.indexOf(prefix) === 0;
}
function isResouces(attrValue) {
  return startWith(attrValue, 'resourceId:');
}
function transKeyToMatchResourceMap(resourceId) {
  return '@' + resourceId.replace('resourceId:0x', '').toUpperCase();
}
function castLogger(doWhat, fromWhen) {
  console.log(doWhat + ' cost: ' + (Date.now() - fromWhen) + 'ms');
}
var utils = {
  toArray: toArray,
  extend: extend,
  startWith: startWith,
  isResouces: isResouces,
  transKeyToMatchResourceMap: transKeyToMatchResourceMap,
  castLogger: castLogger,
  isTypeOf: isTypeOf,
  isArray: isArray$1,
  isFunction: isFunction,
  isString: isString,
  isDefined: isDefined,
  isObject: isObject$1,
  isReg: isReg,
  isThisWhatYouNeed: isThisWhatYouNeed
};

function Unzip(file /* or blob */) {
  if (!(file instanceof Blob)) {
    throw new Error('Invalid input, expect the first param to be a File/Blob.');
  }
  if (!(this instanceof Unzip)) return new Unzip(file);
  this.file = file;
}
Unzip.prototype.destroy = function () {
  this.file = null;
};

/**
 *
 * @param {Array<String>} whatYouNeed
 * @param {Object} options       (Optional)
 * @param {String} options.type  Currently, only support 'blob', by default it will return Buffers
 * @param {Boolean} options.multiple If true, it will collect all the file which match the whtaYouNeed rule
 * @param callback Will be called like callback(err, buffers)
 */
Unzip.prototype.getBuffer = function (whatYouNeed, options, callback) {
  if (!utils.isArray(whatYouNeed) || !utils.isFunction(callback)) {
    return callback(new Error('getBuffer: invalid param, expect first param to be an Array and the second param to be a callback function'));
  }
  if (utils.isFunction(options)) {
    callback = options;
    options = {};
  }
  whatYouNeed = whatYouNeed.map(function (rule) {
    if (typeof rule === 'string') {
      rule = rule.split("\0").join('');
    }
    return rule;
  });
  var isMultiple = options && options.multiple || false;
  this.getEntries(function (error, entries) {
    if (error) return callback(error);
    var matchedEntries = {};
    entries.forEach(function (entry) {
      // Add regexp support
      return whatYouNeed.some(function (entryName) {
        if (utils.isThisWhatYouNeed(entryName, entry.filename)) {
          if (isMultiple) {
            var obj = {
              fileName: entryName,
              buffer: entry
            };
            matchedEntries[entryName] ? matchedEntries[entryName].push(obj) : matchedEntries[entryName] = [obj];
          } else {
            matchedEntries[entryName] = entry;
          }
          return true;
        }
      });
    });
    iterator(matchedEntries, options, function (error, bufferArray) {
      callback(error, bufferArray, entries.length);
    });
  });
};
Unzip.prototype.getEntries = function (callback) {
  zip.createReader(new zip.BlobReader(this.file), function (zipReader) {
    zipReader.getEntries(function (entries) {
      callback(null, entries, entries.length);
    });
  }, callback);
};
Unzip.getEntryData = function (entry, callback) {
  var writer = new zip.BlobWriter();
  entry.getData(writer, function (blob) {
    callback(null, blob, entry.length);
  });
};
function iterator(entries, options, callback) {
  var output = {};
  var serialize = [];
  var index = 0;
  for (var entryName in entries) {
    serialize.push({
      name: entryName,
      entry: entries[entryName]
    });
  }
  if (!serialize.length) {
    callback(null, {}, serialize.length);
  }
  serialize.forEach(function (entryInfo) {
    (function (name, entry) {
      Unzip.getEntryData(entry, function (err, blob) {
        if (err) return callback(err);
        if (options.type === 'blob') {
          add(name, blob);
          if (index >= serialize.length) {
            callback(null, output, serialize.length);
          }
        } else {
          blobToBuffer(blob, function (error, buffer) {
            if (error) {
              console.error(error);
              return callback(error);
            }
            add(name, buffer);
            if (index >= serialize.length) {
              callback(null, output, serialize.length);
            }
          });
        }
      });
    })(entryInfo.name, entryInfo.entry);
  });
  function add(name, data) {
    index++;
    output[name] = data;
  }
}

function objectType(o) {
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
}
function isArray(o) {
  return objectType(o) === 'array';
}
function isObject(o) {
  return objectType(o) === 'object';
}
function isPrimitive(o) {
  return o === null || ['boolean', 'number', 'string', 'undefined'].includes(objectType(o));
}
function isBrowser() {
  return typeof process === 'undefined' || Object.prototype.toString.call(process) !== '[object process]';
}

/**
 * map file place with resourceMap
 * @param {Object} apkInfo // json info parsed from .apk file
 * @param {Object} resourceMap // resourceMap
 */
function mapInfoResource(apkInfo, resourceMap) {
  iteratorObj(apkInfo);
  return apkInfo;
  function iteratorObj(obj) {
    for (var i in obj) {
      if (isArray(obj[i])) {
        iteratorArray(obj[i]);
      } else if (isObject(obj[i])) {
        iteratorObj(obj[i]);
      } else if (isPrimitive(obj[i])) {
        if (isResources(obj[i])) {
          obj[i] = resourceMap[transKeyToMatchResourceMap(obj[i])];
        }
      }
    }
  }
  function iteratorArray(array) {
    var l = array.length;
    for (var i = 0; i < l; i++) {
      if (isArray(array[i])) {
        iteratorArray(array[i]);
      } else if (isObject(array[i])) {
        iteratorObj(array[i]);
      } else if (isPrimitive(array[i])) {
        if (isResources(array[i])) {
          array[i] = resourceMap[transKeyToMatchResourceMap(array[i])];
        }
      }
    }
  }
  function isResources(attrValue) {
    if (!attrValue) return false;
    if (typeof attrValue !== 'string') {
      attrValue = attrValue.toString();
    }
    return attrValue.indexOf('resourceId:') === 0;
  }
  function transKeyToMatchResourceMap(resourceId) {
    return '@' + resourceId.replace('resourceId:0x', '').toUpperCase();
  }
}

/**
 * find .apk file's icon path from json info
 * @param info // json info parsed from .apk file
 */
function findApkIconPath(info) {
  if (!info.application.icon || !info.application.icon.splice) {
    return '';
  }
  var rulesMap = {
    mdpi: 48,
    hdpi: 72,
    xhdpi: 96,
    xxdpi: 144,
    xxxhdpi: 192
  };
  var resultMap = {};
  var maxDpiIcon = {
    dpi: 120,
    icon: ''
  };
  var _loop = function _loop(i) {
    info.application.icon.some(function (icon) {
      if (icon && icon.indexOf(i) !== -1) {
        resultMap['application-icon-' + rulesMap[i]] = icon;
        return true;
      }
    });

    // get the maximal size icon
    if (resultMap['application-icon-' + rulesMap[i]] && rulesMap[i] >= maxDpiIcon.dpi) {
      maxDpiIcon.dpi = rulesMap[i];
      maxDpiIcon.icon = resultMap['application-icon-' + rulesMap[i]];
    }
  };
  for (var i in rulesMap) {
    _loop(i);
  }
  if (Object.keys(resultMap).length === 0 || !maxDpiIcon.icon) {
    maxDpiIcon.dpi = 120;
    maxDpiIcon.icon = info.application.icon[0] || '';
    resultMap['applicataion-icon-120'] = maxDpiIcon.icon;
  }
  return maxDpiIcon.icon;
}

/**
 * transform buffer to base64
 * @param {Buffer} buffer
 */
function getBase64FromBuffer(buffer) {
  return 'data:image/png;base64,' + buffer.toString('base64');
}

/**
 * 去除unicode空字符
 * @param {String} str
 */
function decodeNullUnicode(str) {
  if (typeof str === 'string') {
    // eslint-disable-next-line
    str = str.replace(/\u0000/g, '');
  }
  return str;
}

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }
  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function splitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
function resolve() {
  var resolvedPath = '',
    resolvedAbsolute = false;
  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : '/';

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }
    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}

// path.normalize(path)
// posix version
function normalize(path) {
  var isPathAbsolute = isAbsolute(path),
    trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isPathAbsolute).join('/');
  if (!path && !isPathAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }
  return (isPathAbsolute ? '/' : '') + path;
}

// posix version
function isAbsolute(path) {
  return path.charAt(0) === '/';
}

// posix version
function join() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
}

// path.relative(from, to)
// posix version
function relative(from, to) {
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);
  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }
    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }
    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }
  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }
  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
}
var sep = '/';
var delimiter = ':';
function dirname(path) {
  var result = splitPath(path),
    root = result[0],
    dir = result[1];
  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }
  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
}
function basename(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
}
function extname(path) {
  return splitPath(path)[3];
}
var path = {
  extname: extname,
  basename: basename,
  dirname: dirname,
  sep: sep,
  delimiter: delimiter,
  relative: relative,
  join: join,
  isAbsolute: isAbsolute,
  normalize: normalize,
  resolve: resolve
};
function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }
  return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};

var Zip = /*#__PURE__*/function () {
  function Zip(file) {
    _classCallCheck(this, Zip);
    if (isBrowser()) {
      if (!(file instanceof window.Blob || typeof file.size !== 'undefined')) {
        throw new Error('Param error: [file] must be an instance of Blob or File in browser.');
      }
      this.file = file;
    } else {
      if (typeof file !== 'string') {
        throw new Error('Param error: [file] must be file path in Node.');
      }
      this.file = path.resolve(file);
    }
    this.unzip = new Unzip(this.file);
  }

  /**
   * get entries by regexps, the return format is: { <filename>: <Buffer|Blob> }
   * @param {Array} regexps // regexps for matching files
   * @param {String} type // return type, can be buffer or blob, default buffer
   */
  _createClass(Zip, [{
    key: "getEntries",
    value: function getEntries(regexps) {
      var _this = this;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'buffer';
      regexps = regexps.map(function (regex) {
        return decodeNullUnicode(regex);
      });
      return new Promise(function (resolve, reject) {
        _this.unzip.getBuffer(regexps, {
          type: type
        }, function (err, buffers) {
          err ? reject(err) : resolve(buffers);
        });
      });
    }
    /**
     * get entry by regex, return an instance of Buffer or Blob
     * @param {Regex} regex // regex for matching file
     * @param {String} type // return type, can be buffer or blob, default buffer
     */
  }, {
    key: "getEntry",
    value: function getEntry(regex) {
      var _this2 = this;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'buffer';
      regex = decodeNullUnicode(regex);
      return new Promise(function (resolve, reject) {
        _this2.unzip.getBuffer([regex], {
          type: type
        }, function (err, buffers) {
          err ? reject(err) : resolve(buffers[regex]);
        });
      });
    }
  }]);
  return Zip;
}();

// From https://github.com/openstf/adbkit-apkreader
var NodeType = {
  ELEMENT_NODE: 1,
  ATTRIBUTE_NODE: 2,
  CDATA_SECTION_NODE: 4
};
var ChunkType = {
  NULL: 0x0000,
  STRING_POOL: 0x0001,
  TABLE: 0x0002,
  XML: 0x0003,
  XML_FIRST_CHUNK: 0x0100,
  XML_START_NAMESPACE: 0x0100,
  XML_END_NAMESPACE: 0x0101,
  XML_START_ELEMENT: 0x0102,
  XML_END_ELEMENT: 0x0103,
  XML_CDATA: 0x0104,
  XML_LAST_CHUNK: 0x017f,
  XML_RESOURCE_MAP: 0x0180,
  TABLE_PACKAGE: 0x0200,
  TABLE_TYPE: 0x0201,
  TABLE_TYPE_SPEC: 0x0202
};
var StringFlags = {
  SORTED: 1 << 0,
  UTF8: 1 << 8
};

// Taken from android.util.TypedValue
var TypedValue = {
  COMPLEX_MANTISSA_MASK: 0x00ffffff,
  COMPLEX_MANTISSA_SHIFT: 0x00000008,
  COMPLEX_RADIX_0p23: 0x00000003,
  COMPLEX_RADIX_16p7: 0x00000001,
  COMPLEX_RADIX_23p0: 0x00000000,
  COMPLEX_RADIX_8p15: 0x00000002,
  COMPLEX_RADIX_MASK: 0x00000003,
  COMPLEX_RADIX_SHIFT: 0x00000004,
  COMPLEX_UNIT_DIP: 0x00000001,
  COMPLEX_UNIT_FRACTION: 0x00000000,
  COMPLEX_UNIT_FRACTION_PARENT: 0x00000001,
  COMPLEX_UNIT_IN: 0x00000004,
  COMPLEX_UNIT_MASK: 0x0000000f,
  COMPLEX_UNIT_MM: 0x00000005,
  COMPLEX_UNIT_PT: 0x00000003,
  COMPLEX_UNIT_PX: 0x00000000,
  COMPLEX_UNIT_SHIFT: 0x00000000,
  COMPLEX_UNIT_SP: 0x00000002,
  DENSITY_DEFAULT: 0x00000000,
  DENSITY_NONE: 0x0000ffff,
  TYPE_ATTRIBUTE: 0x00000002,
  TYPE_DIMENSION: 0x00000005,
  TYPE_FIRST_COLOR_INT: 0x0000001c,
  TYPE_FIRST_INT: 0x00000010,
  TYPE_FLOAT: 0x00000004,
  TYPE_FRACTION: 0x00000006,
  TYPE_INT_BOOLEAN: 0x00000012,
  TYPE_INT_COLOR_ARGB4: 0x0000001e,
  TYPE_INT_COLOR_ARGB8: 0x0000001c,
  TYPE_INT_COLOR_RGB4: 0x0000001f,
  TYPE_INT_COLOR_RGB8: 0x0000001d,
  TYPE_INT_DEC: 0x00000010,
  TYPE_INT_HEX: 0x00000011,
  TYPE_LAST_COLOR_INT: 0x0000001f,
  TYPE_LAST_INT: 0x0000001f,
  TYPE_NULL: 0x00000000,
  TYPE_REFERENCE: 0x00000001,
  TYPE_STRING: 0x00000003
};
var BinaryXmlParser = /*#__PURE__*/function () {
  function BinaryXmlParser(buffer) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, BinaryXmlParser);
    this.buffer = buffer;
    this.cursor = 0;
    this.strings = [];
    this.resources = [];
    this.document = null;
    this.parent = null;
    this.stack = [];
    this.debug = options.debug || false;
  }
  _createClass(BinaryXmlParser, [{
    key: "readU8",
    value: function readU8() {
      this.debug && console.group('readU8');
      this.debug && console.debug('cursor:', this.cursor);
      var val = this.buffer[this.cursor];
      this.debug && console.debug('value:', val);
      this.cursor += 1;
      this.debug && console.groupEnd();
      return val;
    }
  }, {
    key: "readU16",
    value: function readU16() {
      this.debug && console.group('readU16');
      this.debug && console.debug('cursor:', this.cursor);
      var val = this.buffer.readUInt16LE(this.cursor);
      this.debug && console.debug('value:', val);
      this.cursor += 2;
      this.debug && console.groupEnd();
      return val;
    }
  }, {
    key: "readS32",
    value: function readS32() {
      this.debug && console.group('readS32');
      this.debug && console.debug('cursor:', this.cursor);
      var val = this.buffer.readInt32LE(this.cursor);
      this.debug && console.debug('value:', val);
      this.cursor += 4;
      this.debug && console.groupEnd();
      return val;
    }
  }, {
    key: "readU32",
    value: function readU32() {
      this.debug && console.group('readU32');
      this.debug && console.debug('cursor:', this.cursor);
      var val = this.buffer.readUInt32LE(this.cursor);
      this.debug && console.debug('value:', val);
      this.cursor += 4;
      this.debug && console.groupEnd();
      return val;
    }
  }, {
    key: "readLength8",
    value: function readLength8() {
      this.debug && console.group('readLength8');
      var len = this.readU8();
      if (len & 0x80) {
        len = (len & 0x7f) << 8;
        len += this.readU8();
      }
      this.debug && console.debug('length:', len);
      this.debug && console.groupEnd();
      return len;
    }
  }, {
    key: "readLength16",
    value: function readLength16() {
      this.debug && console.group('readLength16');
      var len = this.readU16();
      if (len & 0x8000) {
        len = (len & 0x7fff) << 16;
        len += this.readU16();
      }
      this.debug && console.debug('length:', len);
      this.debug && console.groupEnd();
      return len;
    }
  }, {
    key: "readDimension",
    value: function readDimension() {
      this.debug && console.group('readDimension');
      var dimension = {
        value: null,
        unit: null,
        rawUnit: null
      };
      var value = this.readU32();
      var unit = dimension.value & 0xff;
      dimension.value = value >> 8;
      dimension.rawUnit = unit;
      switch (unit) {
        case TypedValue.COMPLEX_UNIT_MM:
          dimension.unit = 'mm';
          break;
        case TypedValue.COMPLEX_UNIT_PX:
          dimension.unit = 'px';
          break;
        case TypedValue.COMPLEX_UNIT_DIP:
          dimension.unit = 'dp';
          break;
        case TypedValue.COMPLEX_UNIT_SP:
          dimension.unit = 'sp';
          break;
        case TypedValue.COMPLEX_UNIT_PT:
          dimension.unit = 'pt';
          break;
        case TypedValue.COMPLEX_UNIT_IN:
          dimension.unit = 'in';
          break;
      }
      this.debug && console.groupEnd();
      return dimension;
    }
  }, {
    key: "readFraction",
    value: function readFraction() {
      this.debug && console.group('readFraction');
      var fraction = {
        value: null,
        type: null,
        rawType: null
      };
      var value = this.readU32();
      var type = value & 0xf;
      fraction.value = this.convertIntToFloat(value >> 4);
      fraction.rawType = type;
      switch (type) {
        case TypedValue.COMPLEX_UNIT_FRACTION:
          fraction.type = '%';
          break;
        case TypedValue.COMPLEX_UNIT_FRACTION_PARENT:
          fraction.type = '%p';
          break;
      }
      this.debug && console.groupEnd();
      return fraction;
    }
  }, {
    key: "readHex24",
    value: function readHex24() {
      this.debug && console.group('readHex24');
      var val = (this.readU32() & 0xffffff).toString(16);
      this.debug && console.groupEnd();
      return val;
    }
  }, {
    key: "readHex32",
    value: function readHex32() {
      this.debug && console.group('readHex32');
      var val = this.readU32().toString(16);
      this.debug && console.groupEnd();
      return val;
    }
  }, {
    key: "readTypedValue",
    value: function readTypedValue() {
      this.debug && console.group('readTypedValue');
      var typedValue = {
        value: null,
        type: null,
        rawType: null
      };
      var start = this.cursor;
      var size = this.readU16();
      /* const zero = */
      this.readU8();
      var dataType = this.readU8();

      // Yes, there has been a real world APK where the size is malformed.
      if (size === 0) {
        size = 8;
      }
      typedValue.rawType = dataType;
      switch (dataType) {
        case TypedValue.TYPE_INT_DEC:
          typedValue.value = this.readS32();
          typedValue.type = 'int_dec';
          break;
        case TypedValue.TYPE_INT_HEX:
          typedValue.value = this.readS32();
          typedValue.type = 'int_hex';
          break;
        case TypedValue.TYPE_STRING:
          var ref = this.readS32();
          typedValue.value = ref > 0 ? this.strings[ref] : '';
          typedValue.type = 'string';
          break;
        case TypedValue.TYPE_REFERENCE:
          var id = this.readU32();
          typedValue.value = "resourceId:0x".concat(id.toString(16));
          typedValue.type = 'reference';
          break;
        case TypedValue.TYPE_INT_BOOLEAN:
          typedValue.value = this.readS32() !== 0;
          typedValue.type = 'boolean';
          break;
        case TypedValue.TYPE_NULL:
          this.readU32();
          typedValue.value = null;
          typedValue.type = 'null';
          break;
        case TypedValue.TYPE_INT_COLOR_RGB8:
          typedValue.value = this.readHex24();
          typedValue.type = 'rgb8';
          break;
        case TypedValue.TYPE_INT_COLOR_RGB4:
          typedValue.value = this.readHex24();
          typedValue.type = 'rgb4';
          break;
        case TypedValue.TYPE_INT_COLOR_ARGB8:
          typedValue.value = this.readHex32();
          typedValue.type = 'argb8';
          break;
        case TypedValue.TYPE_INT_COLOR_ARGB4:
          typedValue.value = this.readHex32();
          typedValue.type = 'argb4';
          break;
        case TypedValue.TYPE_DIMENSION:
          typedValue.value = this.readDimension();
          typedValue.type = 'dimension';
          break;
        case TypedValue.TYPE_FRACTION:
          typedValue.value = this.readFraction();
          typedValue.type = 'fraction';
          break;
        default:
          {
            var type = dataType.toString(16);
            console.debug("Not sure what to do with typed value of type 0x".concat(type, ", falling back to reading an uint32."));
            typedValue.value = this.readU32();
            typedValue.type = 'unknown';
          }
      }

      // Ensure we consume the whole value
      var end = start + size;
      if (this.cursor !== end) {
        var _type = dataType.toString(16);
        var diff = end - this.cursor;
        console.debug("Cursor is off by ".concat(diff, " bytes at ").concat(this.cursor, " at supposed end of typed value of type 0x").concat(_type, ". The typed value started at offset ").concat(start, " and is supposed to end at offset ").concat(end, ". Ignoring the rest of the value."));
        this.cursor = end;
      }
      this.debug && console.groupEnd();
      return typedValue;
    }

    // https://twitter.com/kawasima/status/427730289201139712
  }, {
    key: "convertIntToFloat",
    value: function convertIntToFloat(_int) {
      var buf = new ArrayBuffer(4);
      new Int32Array(buf)[0] = _int;
      return new Float32Array(buf)[0];
    }
  }, {
    key: "readString",
    value: function readString(encoding) {
      this.debug && console.group('readString', encoding);
      switch (encoding) {
        case 'utf-8':
          var stringLength = this.readLength8(encoding);
          this.debug && console.debug('stringLength:', stringLength);
          var byteLength = this.readLength8(encoding);
          this.debug && console.debug('byteLength:', byteLength);
          var value = this.buffer.toString(encoding, this.cursor, this.cursor += byteLength);
          this.debug && console.debug('value:', value);
          this.debug && console.groupEnd();
          return value;
        case 'ucs2':
          stringLength = this.readLength16(encoding);
          this.debug && console.debug('stringLength:', stringLength);
          byteLength = stringLength * 2;
          this.debug && console.debug('byteLength:', byteLength);
          value = this.buffer.toString(encoding, this.cursor, this.cursor += byteLength);
          this.debug && console.debug('value:', value);
          this.debug && console.groupEnd();
          return value;
        default:
          throw new Error("Unsupported encoding '".concat(encoding, "'"));
      }
    }
  }, {
    key: "readChunkHeader",
    value: function readChunkHeader() {
      this.debug && console.group('readChunkHeader');
      var header = {
        startOffset: this.cursor,
        chunkType: this.readU16(),
        headerSize: this.readU16(),
        chunkSize: this.readU32()
      };
      this.debug && console.debug('startOffset:', header.startOffset);
      this.debug && console.debug('chunkType:', header.chunkType);
      this.debug && console.debug('headerSize:', header.headerSize);
      this.debug && console.debug('chunkSize:', header.chunkSize);
      this.debug && console.groupEnd();
      return header;
    }
  }, {
    key: "readStringPool",
    value: function readStringPool(header) {
      this.debug && console.group('readStringPool');
      header.stringCount = this.readU32();
      this.debug && console.debug('stringCount:', header.stringCount);
      header.styleCount = this.readU32();
      this.debug && console.debug('styleCount:', header.styleCount);
      header.flags = this.readU32();
      this.debug && console.debug('flags:', header.flags);
      header.stringsStart = this.readU32();
      this.debug && console.debug('stringsStart:', header.stringsStart);
      header.stylesStart = this.readU32();
      this.debug && console.debug('stylesStart:', header.stylesStart);
      if (header.chunkType !== ChunkType.STRING_POOL) {
        throw new Error('Invalid string pool header');
      }
      var offsets = [];
      for (var i = 0, l = header.stringCount; i < l; ++i) {
        this.debug && console.debug('offset:', i);
        offsets.push(this.readU32());
      }
      var sorted = (header.flags & StringFlags.SORTED) === StringFlags.SORTED;
      this.debug && console.debug('sorted:', sorted);
      var encoding = (header.flags & StringFlags.UTF8) === StringFlags.UTF8 ? 'utf-8' : 'ucs2';
      this.debug && console.debug('encoding:', encoding);
      var stringsStart = header.startOffset + header.stringsStart;
      this.cursor = stringsStart;
      for (var _i = 0, _l = header.stringCount; _i < _l; ++_i) {
        this.debug && console.debug('string:', _i);
        this.debug && console.debug('offset:', offsets[_i]);
        this.cursor = stringsStart + offsets[_i];
        this.strings.push(this.readString(encoding));
      }

      // Skip styles
      this.cursor = header.startOffset + header.chunkSize;
      this.debug && console.groupEnd();
      return null;
    }
  }, {
    key: "readResourceMap",
    value: function readResourceMap(header) {
      this.debug && console.group('readResourceMap');
      var count = Math.floor((header.chunkSize - header.headerSize) / 4);
      for (var i = 0; i < count; ++i) {
        this.resources.push(this.readU32());
      }
      this.debug && console.groupEnd();
      return null;
    }
  }, {
    key: "readXmlNamespaceStart",
    value: function readXmlNamespaceStart( /* header */
    ) {
      this.debug && console.group('readXmlNamespaceStart');

      /* const line = */
      this.readU32();
      /* const commentRef = */
      this.readU32();
      /* const prefixRef = */
      this.readS32();
      /* const uriRef = */
      this.readS32();

      // We don't currently care about the values, but they could
      // be accessed like so:
      //
      // namespaceURI.prefix = this.strings[prefixRef] // if prefixRef > 0
      // namespaceURI.uri = this.strings[uriRef] // if uriRef > 0

      this.debug && console.groupEnd();
      return null;
    }
  }, {
    key: "readXmlNamespaceEnd",
    value: function readXmlNamespaceEnd( /* header */
    ) {
      this.debug && console.group('readXmlNamespaceEnd');

      /* const line = */
      this.readU32();
      /* const commentRef = */
      this.readU32();
      /* const prefixRef = */
      this.readS32();
      /* const uriRef = */
      this.readS32();

      // We don't currently care about the values, but they could
      // be accessed like so:
      //
      // namespaceURI.prefix = this.strings[prefixRef] // if prefixRef > 0
      // namespaceURI.uri = this.strings[uriRef] // if uriRef > 0

      this.debug && console.groupEnd();
      return null;
    }
  }, {
    key: "readXmlElementStart",
    value: function readXmlElementStart( /* header */
    ) {
      this.debug && console.group('readXmlElementStart');
      var node = {
        namespaceURI: null,
        nodeType: NodeType.ELEMENT_NODE,
        nodeName: null,
        attributes: [],
        childNodes: []
      };

      /* const line = */
      this.readU32();
      /* const commentRef = */
      this.readU32();
      var nsRef = this.readS32();
      var nameRef = this.readS32();
      if (nsRef > 0) {
        node.namespaceURI = this.strings[nsRef];
      }
      node.nodeName = this.strings[nameRef];

      /* const attrStart = */
      this.readU16();
      /* const attrSize = */
      this.readU16();
      var attrCount = this.readU16();
      /* const idIndex = */
      this.readU16();
      /* const classIndex = */
      this.readU16();
      /* const styleIndex = */
      this.readU16();
      for (var i = 0; i < attrCount; ++i) {
        node.attributes.push(this.readXmlAttribute());
      }
      if (this.document) {
        this.parent.childNodes.push(node);
        this.parent = node;
      } else {
        this.document = this.parent = node;
      }
      this.stack.push(node);
      this.debug && console.groupEnd();
      return node;
    }
  }, {
    key: "readXmlAttribute",
    value: function readXmlAttribute() {
      this.debug && console.group('readXmlAttribute');
      var attr = {
        namespaceURI: null,
        nodeType: NodeType.ATTRIBUTE_NODE,
        nodeName: null,
        name: null,
        value: null,
        typedValue: null
      };
      var nsRef = this.readS32();
      var nameRef = this.readS32();
      var valueRef = this.readS32();
      if (nsRef > 0) {
        attr.namespaceURI = this.strings[nsRef];
      }
      attr.nodeName = attr.name = this.strings[nameRef];
      if (valueRef > 0) {
        // some apk have versionName with special characters
        if (attr.name === 'versionName') {
          this.strings[valueRef] = this.strings[valueRef].replace(/[^\d\w-.]/g, '');
        }
        attr.value = this.strings[valueRef];
      }
      attr.typedValue = this.readTypedValue();
      this.debug && console.groupEnd();
      return attr;
    }
  }, {
    key: "readXmlElementEnd",
    value: function readXmlElementEnd( /* header */
    ) {
      this.debug && console.group('readXmlCData');

      /* const line = */
      this.readU32();
      /* const commentRef = */
      this.readU32();
      /* const nsRef = */
      this.readS32();
      /* const nameRef = */
      this.readS32();
      this.stack.pop();
      this.parent = this.stack[this.stack.length - 1];
      this.debug && console.groupEnd();
      return null;
    }
  }, {
    key: "readXmlCData",
    value: function readXmlCData( /* header */
    ) {
      this.debug && console.group('readXmlCData');
      var cdata = {
        namespaceURI: null,
        nodeType: NodeType.CDATA_SECTION_NODE,
        nodeName: '#cdata',
        data: null,
        typedValue: null
      };

      /* const line = */
      this.readU32();
      /* const commentRef = */
      this.readU32();
      var dataRef = this.readS32();
      if (dataRef > 0) {
        cdata.data = this.strings[dataRef];
      }
      cdata.typedValue = this.readTypedValue();
      this.parent.childNodes.push(cdata);
      this.debug && console.groupEnd();
      return cdata;
    }
  }, {
    key: "readNull",
    value: function readNull(header) {
      this.debug && console.group('readNull');
      this.cursor += header.chunkSize - header.headerSize;
      this.debug && console.groupEnd();
      return null;
    }
  }, {
    key: "parse",
    value: function parse() {
      this.debug && console.group('BinaryXmlParser.parse');
      var xmlHeader = this.readChunkHeader();
      if (xmlHeader.chunkType !== ChunkType.XML) {
        throw new Error('Invalid XML header');
      }
      while (this.cursor < this.buffer.length) {
        this.debug && console.group('chunk');
        var start = this.cursor;
        var header = this.readChunkHeader();
        switch (header.chunkType) {
          case ChunkType.STRING_POOL:
            this.readStringPool(header);
            break;
          case ChunkType.XML_RESOURCE_MAP:
            this.readResourceMap(header);
            break;
          case ChunkType.XML_START_NAMESPACE:
            this.readXmlNamespaceStart(header);
            break;
          case ChunkType.XML_END_NAMESPACE:
            this.readXmlNamespaceEnd(header);
            break;
          case ChunkType.XML_START_ELEMENT:
            this.readXmlElementStart(header);
            break;
          case ChunkType.XML_END_ELEMENT:
            this.readXmlElementEnd(header);
            break;
          case ChunkType.XML_CDATA:
            this.readXmlCData(header);
            break;
          case ChunkType.NULL:
            this.readNull(header);
            break;
          default:
            throw new Error("Unsupported chunk type '".concat(header.chunkType, "'"));
        }

        // Ensure we consume the whole chunk
        var end = start + header.chunkSize;
        if (this.cursor !== end) {
          var diff = end - this.cursor;
          var type = header.chunkType.toString(16);
          console.debug("Cursor is off by ".concat(diff, " bytes at ").concat(this.cursor, " at supposed end of chunk of type 0x").concat(type, ". The chunk started at offset ").concat(start, " and is supposed to end at offset ").concat(end, ". Ignoring the rest of the chunk."));
          this.cursor = end;
        }
        this.debug && console.groupEnd();
      }
      this.debug && console.groupEnd();
      return this.document;
    }
  }]);
  return BinaryXmlParser;
}();

var INTENT_MAIN = 'android.intent.action.MAIN';
var CATEGORY_LAUNCHER = 'android.intent.category.LAUNCHER';
var ManifestParser = /*#__PURE__*/function () {
  function ManifestParser(buffer) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, ManifestParser);
    this.buffer = buffer;
    this.xmlParser = new BinaryXmlParser(this.buffer, options);
  }
  _createClass(ManifestParser, [{
    key: "collapseAttributes",
    value: function collapseAttributes(element) {
      var collapsed = Object.create(null);
      for (var _i = 0, _Array$from = Array.from(element.attributes); _i < _Array$from.length; _i++) {
        var attr = _Array$from[_i];
        collapsed[attr.name] = attr.typedValue.value;
      }
      return collapsed;
    }
  }, {
    key: "parseIntents",
    value: function parseIntents(element, target) {
      var _this = this;
      target.intentFilters = [];
      target.metaData = [];
      return element.childNodes.forEach(function (element) {
        switch (element.nodeName) {
          case 'intent-filter':
            {
              var intentFilter = _this.collapseAttributes(element);
              intentFilter.actions = [];
              intentFilter.categories = [];
              intentFilter.data = [];
              element.childNodes.forEach(function (element) {
                switch (element.nodeName) {
                  case 'action':
                    intentFilter.actions.push(_this.collapseAttributes(element));
                    break;
                  case 'category':
                    intentFilter.categories.push(_this.collapseAttributes(element));
                    break;
                  case 'data':
                    intentFilter.data.push(_this.collapseAttributes(element));
                    break;
                }
              });
              target.intentFilters.push(intentFilter);
              break;
            }
          case 'meta-data':
            target.metaData.push(_this.collapseAttributes(element));
            break;
        }
      });
    }
  }, {
    key: "parseApplication",
    value: function parseApplication(element) {
      var _this2 = this;
      var app = this.collapseAttributes(element);
      app.activities = [];
      app.activityAliases = [];
      app.launcherActivities = [];
      app.services = [];
      app.receivers = [];
      app.providers = [];
      app.usesLibraries = [];
      app.metaData = [];
      element.childNodes.forEach(function (element) {
        switch (element.nodeName) {
          case 'activity':
            {
              var activity = _this2.collapseAttributes(element);
              _this2.parseIntents(element, activity);
              app.activities.push(activity);
              if (_this2.isLauncherActivity(activity)) {
                app.launcherActivities.push(activity);
              }
              break;
            }
          case 'activity-alias':
            {
              var activityAlias = _this2.collapseAttributes(element);
              _this2.parseIntents(element, activityAlias);
              app.activityAliases.push(activityAlias);
              if (_this2.isLauncherActivity(activityAlias)) {
                app.launcherActivities.push(activityAlias);
              }
              break;
            }
          case 'service':
            {
              var service = _this2.collapseAttributes(element);
              _this2.parseIntents(element, service);
              app.services.push(service);
              break;
            }
          case 'receiver':
            {
              var receiver = _this2.collapseAttributes(element);
              _this2.parseIntents(element, receiver);
              app.receivers.push(receiver);
              break;
            }
          case 'provider':
            {
              var provider = _this2.collapseAttributes(element);
              provider.grantUriPermissions = [];
              provider.metaData = [];
              provider.pathPermissions = [];
              element.childNodes.forEach(function (element) {
                switch (element.nodeName) {
                  case 'grant-uri-permission':
                    provider.grantUriPermissions.push(_this2.collapseAttributes(element));
                    break;
                  case 'meta-data':
                    provider.metaData.push(_this2.collapseAttributes(element));
                    break;
                  case 'path-permission':
                    provider.pathPermissions.push(_this2.collapseAttributes(element));
                    break;
                }
              });
              app.providers.push(provider);
              break;
            }
          case 'uses-library':
            app.usesLibraries.push(_this2.collapseAttributes(element));
            break;
          case 'meta-data':
            app.metaData.push(_this2.collapseAttributes(element));
            break;
        }
      });
      return app;
    }
  }, {
    key: "isLauncherActivity",
    value: function isLauncherActivity(activity) {
      return activity.intentFilters.some(function (filter) {
        var hasMain = filter.actions.some(function (action) {
          return action.name === INTENT_MAIN;
        });
        if (!hasMain) {
          return false;
        }
        return filter.categories.some(function (category) {
          return category.name === CATEGORY_LAUNCHER;
        });
      });
    }
  }, {
    key: "parse",
    value: function parse() {
      var _this3 = this;
      var document = this.xmlParser.parse();
      var manifest = this.collapseAttributes(document);
      manifest.usesPermissions = [];
      manifest.usesPermissionsSDK23 = [];
      manifest.permissions = [];
      manifest.permissionTrees = [];
      manifest.permissionGroups = [];
      manifest.instrumentation = null;
      manifest.usesSdk = null;
      manifest.usesConfiguration = null;
      manifest.usesFeatures = [];
      manifest.supportsScreens = null;
      manifest.compatibleScreens = [];
      manifest.supportsGlTextures = [];
      manifest.application = Object.create(null);
      document.childNodes.forEach(function (element) {
        switch (element.nodeName) {
          case 'uses-permission':
            manifest.usesPermissions.push(_this3.collapseAttributes(element));
            break;
          case 'uses-permission-sdk-23':
            manifest.usesPermissionsSDK23.push(_this3.collapseAttributes(element));
            break;
          case 'permission':
            manifest.permissions.push(_this3.collapseAttributes(element));
            break;
          case 'permission-tree':
            manifest.permissionTrees.push(_this3.collapseAttributes(element));
            break;
          case 'permission-group':
            manifest.permissionGroups.push(_this3.collapseAttributes(element));
            break;
          case 'instrumentation':
            manifest.instrumentation = _this3.collapseAttributes(element);
            break;
          case 'uses-sdk':
            manifest.usesSdk = _this3.collapseAttributes(element);
            break;
          case 'uses-configuration':
            manifest.usesConfiguration = _this3.collapseAttributes(element);
            break;
          case 'uses-feature':
            manifest.usesFeatures.push(_this3.collapseAttributes(element));
            break;
          case 'supports-screens':
            manifest.supportsScreens = _this3.collapseAttributes(element);
            break;
          case 'compatible-screens':
            element.childNodes.forEach(function (screen) {
              return manifest.compatibleScreens.push(_this3.collapseAttributes(screen));
            });
            break;
          case 'supports-gl-texture':
            manifest.supportsGlTextures.push(_this3.collapseAttributes(element));
            break;
          case 'application':
            manifest.application = _this3.parseApplication(element);
            break;
        }
      });
      return manifest;
    }
  }]);
  return ManifestParser;
}();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var bytebuffer = {exports: {}};

var long = {exports: {}};

/*
 Copyright 2013 Daniel Wirtz <dcode@dcode.io>
 Copyright 2009 The Closure Library Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var hasRequiredLong;

function requireLong () {
	if (hasRequiredLong) return long.exports;
	hasRequiredLong = 1;
	(function (module) {
		/**
		 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
		 * Released under the Apache License, Version 2.0
		 * see: https://github.com/dcodeIO/long.js for details
		 */
		(function(global, factory) {

		    /* AMD */ if (typeof commonjsRequire === 'function' && 'object' === "object" && module && module["exports"])
		        module["exports"] = factory();
		    /* Global */ else
		        (global["dcodeIO"] = global["dcodeIO"] || {})["Long"] = factory();

		})(commonjsGlobal, function() {

		    /**
		     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
		     *  See the from* functions below for more convenient ways of constructing Longs.
		     * @exports Long
		     * @class A Long class for representing a 64 bit two's-complement integer value.
		     * @param {number} low The low (signed) 32 bits of the long
		     * @param {number} high The high (signed) 32 bits of the long
		     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
		     * @constructor
		     */
		    function Long(low, high, unsigned) {

		        /**
		         * The low 32 bits as a signed value.
		         * @type {number}
		         */
		        this.low = low | 0;

		        /**
		         * The high 32 bits as a signed value.
		         * @type {number}
		         */
		        this.high = high | 0;

		        /**
		         * Whether unsigned or not.
		         * @type {boolean}
		         */
		        this.unsigned = !!unsigned;
		    }

		    // The internal representation of a long is the two given signed, 32-bit values.
		    // We use 32-bit pieces because these are the size of integers on which
		    // Javascript performs bit-operations.  For operations like addition and
		    // multiplication, we split each number into 16 bit pieces, which can easily be
		    // multiplied within Javascript's floating-point representation without overflow
		    // or change in sign.
		    //
		    // In the algorithms below, we frequently reduce the negative case to the
		    // positive case by negating the input(s) and then post-processing the result.
		    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
		    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
		    // a positive number, it overflows back into a negative).  Not handling this
		    // case would often result in infinite recursion.
		    //
		    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
		    // methods on which they depend.

		    /**
		     * An indicator used to reliably determine if an object is a Long or not.
		     * @type {boolean}
		     * @const
		     * @private
		     */
		    Long.prototype.__isLong__;

		    Object.defineProperty(Long.prototype, "__isLong__", {
		        value: true,
		        enumerable: false,
		        configurable: false
		    });

		    /**
		     * @function
		     * @param {*} obj Object
		     * @returns {boolean}
		     * @inner
		     */
		    function isLong(obj) {
		        return (obj && obj["__isLong__"]) === true;
		    }

		    /**
		     * Tests if the specified object is a Long.
		     * @function
		     * @param {*} obj Object
		     * @returns {boolean}
		     */
		    Long.isLong = isLong;

		    /**
		     * A cache of the Long representations of small integer values.
		     * @type {!Object}
		     * @inner
		     */
		    var INT_CACHE = {};

		    /**
		     * A cache of the Long representations of small unsigned integer values.
		     * @type {!Object}
		     * @inner
		     */
		    var UINT_CACHE = {};

		    /**
		     * @param {number} value
		     * @param {boolean=} unsigned
		     * @returns {!Long}
		     * @inner
		     */
		    function fromInt(value, unsigned) {
		        var obj, cachedObj, cache;
		        if (unsigned) {
		            value >>>= 0;
		            if (cache = (0 <= value && value < 256)) {
		                cachedObj = UINT_CACHE[value];
		                if (cachedObj)
		                    return cachedObj;
		            }
		            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
		            if (cache)
		                UINT_CACHE[value] = obj;
		            return obj;
		        } else {
		            value |= 0;
		            if (cache = (-128 <= value && value < 128)) {
		                cachedObj = INT_CACHE[value];
		                if (cachedObj)
		                    return cachedObj;
		            }
		            obj = fromBits(value, value < 0 ? -1 : 0, false);
		            if (cache)
		                INT_CACHE[value] = obj;
		            return obj;
		        }
		    }

		    /**
		     * Returns a Long representing the given 32 bit integer value.
		     * @function
		     * @param {number} value The 32 bit integer in question
		     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
		     * @returns {!Long} The corresponding Long value
		     */
		    Long.fromInt = fromInt;

		    /**
		     * @param {number} value
		     * @param {boolean=} unsigned
		     * @returns {!Long}
		     * @inner
		     */
		    function fromNumber(value, unsigned) {
		        if (isNaN(value) || !isFinite(value))
		            return unsigned ? UZERO : ZERO;
		        if (unsigned) {
		            if (value < 0)
		                return UZERO;
		            if (value >= TWO_PWR_64_DBL)
		                return MAX_UNSIGNED_VALUE;
		        } else {
		            if (value <= -TWO_PWR_63_DBL)
		                return MIN_VALUE;
		            if (value + 1 >= TWO_PWR_63_DBL)
		                return MAX_VALUE;
		        }
		        if (value < 0)
		            return fromNumber(-value, unsigned).neg();
		        return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
		    }

		    /**
		     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
		     * @function
		     * @param {number} value The number in question
		     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
		     * @returns {!Long} The corresponding Long value
		     */
		    Long.fromNumber = fromNumber;

		    /**
		     * @param {number} lowBits
		     * @param {number} highBits
		     * @param {boolean=} unsigned
		     * @returns {!Long}
		     * @inner
		     */
		    function fromBits(lowBits, highBits, unsigned) {
		        return new Long(lowBits, highBits, unsigned);
		    }

		    /**
		     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
		     *  assumed to use 32 bits.
		     * @function
		     * @param {number} lowBits The low 32 bits
		     * @param {number} highBits The high 32 bits
		     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
		     * @returns {!Long} The corresponding Long value
		     */
		    Long.fromBits = fromBits;

		    /**
		     * @function
		     * @param {number} base
		     * @param {number} exponent
		     * @returns {number}
		     * @inner
		     */
		    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

		    /**
		     * @param {string} str
		     * @param {(boolean|number)=} unsigned
		     * @param {number=} radix
		     * @returns {!Long}
		     * @inner
		     */
		    function fromString(str, unsigned, radix) {
		        if (str.length === 0)
		            throw Error('empty string');
		        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
		            return ZERO;
		        if (typeof unsigned === 'number') {
		            // For goog.math.long compatibility
		            radix = unsigned,
		            unsigned = false;
		        } else {
		            unsigned = !! unsigned;
		        }
		        radix = radix || 10;
		        if (radix < 2 || 36 < radix)
		            throw RangeError('radix');

		        var p;
		        if ((p = str.indexOf('-')) > 0)
		            throw Error('interior hyphen');
		        else if (p === 0) {
		            return fromString(str.substring(1), unsigned, radix).neg();
		        }

		        // Do several (8) digits each time through the loop, so as to
		        // minimize the calls to the very expensive emulated div.
		        var radixToPower = fromNumber(pow_dbl(radix, 8));

		        var result = ZERO;
		        for (var i = 0; i < str.length; i += 8) {
		            var size = Math.min(8, str.length - i),
		                value = parseInt(str.substring(i, i + size), radix);
		            if (size < 8) {
		                var power = fromNumber(pow_dbl(radix, size));
		                result = result.mul(power).add(fromNumber(value));
		            } else {
		                result = result.mul(radixToPower);
		                result = result.add(fromNumber(value));
		            }
		        }
		        result.unsigned = unsigned;
		        return result;
		    }

		    /**
		     * Returns a Long representation of the given string, written using the specified radix.
		     * @function
		     * @param {string} str The textual representation of the Long
		     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to `false` for signed
		     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
		     * @returns {!Long} The corresponding Long value
		     */
		    Long.fromString = fromString;

		    /**
		     * @function
		     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
		     * @returns {!Long}
		     * @inner
		     */
		    function fromValue(val) {
		        if (val /* is compatible */ instanceof Long)
		            return val;
		        if (typeof val === 'number')
		            return fromNumber(val);
		        if (typeof val === 'string')
		            return fromString(val);
		        // Throws for non-objects, converts non-instanceof Long:
		        return fromBits(val.low, val.high, val.unsigned);
		    }

		    /**
		     * Converts the specified value to a Long.
		     * @function
		     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
		     * @returns {!Long}
		     */
		    Long.fromValue = fromValue;

		    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
		    // no runtime penalty for these.

		    /**
		     * @type {number}
		     * @const
		     * @inner
		     */
		    var TWO_PWR_16_DBL = 1 << 16;

		    /**
		     * @type {number}
		     * @const
		     * @inner
		     */
		    var TWO_PWR_24_DBL = 1 << 24;

		    /**
		     * @type {number}
		     * @const
		     * @inner
		     */
		    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

		    /**
		     * @type {number}
		     * @const
		     * @inner
		     */
		    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

		    /**
		     * @type {number}
		     * @const
		     * @inner
		     */
		    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

		    /**
		     * @type {!Long}
		     * @const
		     * @inner
		     */
		    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

		    /**
		     * @type {!Long}
		     * @inner
		     */
		    var ZERO = fromInt(0);

		    /**
		     * Signed zero.
		     * @type {!Long}
		     */
		    Long.ZERO = ZERO;

		    /**
		     * @type {!Long}
		     * @inner
		     */
		    var UZERO = fromInt(0, true);

		    /**
		     * Unsigned zero.
		     * @type {!Long}
		     */
		    Long.UZERO = UZERO;

		    /**
		     * @type {!Long}
		     * @inner
		     */
		    var ONE = fromInt(1);

		    /**
		     * Signed one.
		     * @type {!Long}
		     */
		    Long.ONE = ONE;

		    /**
		     * @type {!Long}
		     * @inner
		     */
		    var UONE = fromInt(1, true);

		    /**
		     * Unsigned one.
		     * @type {!Long}
		     */
		    Long.UONE = UONE;

		    /**
		     * @type {!Long}
		     * @inner
		     */
		    var NEG_ONE = fromInt(-1);

		    /**
		     * Signed negative one.
		     * @type {!Long}
		     */
		    Long.NEG_ONE = NEG_ONE;

		    /**
		     * @type {!Long}
		     * @inner
		     */
		    var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

		    /**
		     * Maximum signed value.
		     * @type {!Long}
		     */
		    Long.MAX_VALUE = MAX_VALUE;

		    /**
		     * @type {!Long}
		     * @inner
		     */
		    var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

		    /**
		     * Maximum unsigned value.
		     * @type {!Long}
		     */
		    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

		    /**
		     * @type {!Long}
		     * @inner
		     */
		    var MIN_VALUE = fromBits(0, 0x80000000|0, false);

		    /**
		     * Minimum signed value.
		     * @type {!Long}
		     */
		    Long.MIN_VALUE = MIN_VALUE;

		    /**
		     * @alias Long.prototype
		     * @inner
		     */
		    var LongPrototype = Long.prototype;

		    /**
		     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
		     * @returns {number}
		     */
		    LongPrototype.toInt = function toInt() {
		        return this.unsigned ? this.low >>> 0 : this.low;
		    };

		    /**
		     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
		     * @returns {number}
		     */
		    LongPrototype.toNumber = function toNumber() {
		        if (this.unsigned)
		            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
		        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
		    };

		    /**
		     * Converts the Long to a string written in the specified radix.
		     * @param {number=} radix Radix (2-36), defaults to 10
		     * @returns {string}
		     * @override
		     * @throws {RangeError} If `radix` is out of range
		     */
		    LongPrototype.toString = function toString(radix) {
		        radix = radix || 10;
		        if (radix < 2 || 36 < radix)
		            throw RangeError('radix');
		        if (this.isZero())
		            return '0';
		        if (this.isNegative()) { // Unsigned Longs are never negative
		            if (this.eq(MIN_VALUE)) {
		                // We need to change the Long value before it can be negated, so we remove
		                // the bottom-most digit in this base and then recurse to do the rest.
		                var radixLong = fromNumber(radix),
		                    div = this.div(radixLong),
		                    rem1 = div.mul(radixLong).sub(this);
		                return div.toString(radix) + rem1.toInt().toString(radix);
		            } else
		                return '-' + this.neg().toString(radix);
		        }

		        // Do several (6) digits each time through the loop, so as to
		        // minimize the calls to the very expensive emulated div.
		        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
		            rem = this;
		        var result = '';
		        while (true) {
		            var remDiv = rem.div(radixToPower),
		                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
		                digits = intval.toString(radix);
		            rem = remDiv;
		            if (rem.isZero())
		                return digits + result;
		            else {
		                while (digits.length < 6)
		                    digits = '0' + digits;
		                result = '' + digits + result;
		            }
		        }
		    };

		    /**
		     * Gets the high 32 bits as a signed integer.
		     * @returns {number} Signed high bits
		     */
		    LongPrototype.getHighBits = function getHighBits() {
		        return this.high;
		    };

		    /**
		     * Gets the high 32 bits as an unsigned integer.
		     * @returns {number} Unsigned high bits
		     */
		    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
		        return this.high >>> 0;
		    };

		    /**
		     * Gets the low 32 bits as a signed integer.
		     * @returns {number} Signed low bits
		     */
		    LongPrototype.getLowBits = function getLowBits() {
		        return this.low;
		    };

		    /**
		     * Gets the low 32 bits as an unsigned integer.
		     * @returns {number} Unsigned low bits
		     */
		    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
		        return this.low >>> 0;
		    };

		    /**
		     * Gets the number of bits needed to represent the absolute value of this Long.
		     * @returns {number}
		     */
		    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
		        if (this.isNegative()) // Unsigned Longs are never negative
		            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
		        var val = this.high != 0 ? this.high : this.low;
		        for (var bit = 31; bit > 0; bit--)
		            if ((val & (1 << bit)) != 0)
		                break;
		        return this.high != 0 ? bit + 33 : bit + 1;
		    };

		    /**
		     * Tests if this Long's value equals zero.
		     * @returns {boolean}
		     */
		    LongPrototype.isZero = function isZero() {
		        return this.high === 0 && this.low === 0;
		    };

		    /**
		     * Tests if this Long's value is negative.
		     * @returns {boolean}
		     */
		    LongPrototype.isNegative = function isNegative() {
		        return !this.unsigned && this.high < 0;
		    };

		    /**
		     * Tests if this Long's value is positive.
		     * @returns {boolean}
		     */
		    LongPrototype.isPositive = function isPositive() {
		        return this.unsigned || this.high >= 0;
		    };

		    /**
		     * Tests if this Long's value is odd.
		     * @returns {boolean}
		     */
		    LongPrototype.isOdd = function isOdd() {
		        return (this.low & 1) === 1;
		    };

		    /**
		     * Tests if this Long's value is even.
		     * @returns {boolean}
		     */
		    LongPrototype.isEven = function isEven() {
		        return (this.low & 1) === 0;
		    };

		    /**
		     * Tests if this Long's value equals the specified's.
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.equals = function equals(other) {
		        if (!isLong(other))
		            other = fromValue(other);
		        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
		            return false;
		        return this.high === other.high && this.low === other.low;
		    };

		    /**
		     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
		     * @function
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.eq = LongPrototype.equals;

		    /**
		     * Tests if this Long's value differs from the specified's.
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.notEquals = function notEquals(other) {
		        return !this.eq(/* validates */ other);
		    };

		    /**
		     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
		     * @function
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.neq = LongPrototype.notEquals;

		    /**
		     * Tests if this Long's value is less than the specified's.
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.lessThan = function lessThan(other) {
		        return this.comp(/* validates */ other) < 0;
		    };

		    /**
		     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
		     * @function
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.lt = LongPrototype.lessThan;

		    /**
		     * Tests if this Long's value is less than or equal the specified's.
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
		        return this.comp(/* validates */ other) <= 0;
		    };

		    /**
		     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
		     * @function
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.lte = LongPrototype.lessThanOrEqual;

		    /**
		     * Tests if this Long's value is greater than the specified's.
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.greaterThan = function greaterThan(other) {
		        return this.comp(/* validates */ other) > 0;
		    };

		    /**
		     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
		     * @function
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.gt = LongPrototype.greaterThan;

		    /**
		     * Tests if this Long's value is greater than or equal the specified's.
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
		        return this.comp(/* validates */ other) >= 0;
		    };

		    /**
		     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
		     * @function
		     * @param {!Long|number|string} other Other value
		     * @returns {boolean}
		     */
		    LongPrototype.gte = LongPrototype.greaterThanOrEqual;

		    /**
		     * Compares this Long's value with the specified's.
		     * @param {!Long|number|string} other Other value
		     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
		     *  if the given one is greater
		     */
		    LongPrototype.compare = function compare(other) {
		        if (!isLong(other))
		            other = fromValue(other);
		        if (this.eq(other))
		            return 0;
		        var thisNeg = this.isNegative(),
		            otherNeg = other.isNegative();
		        if (thisNeg && !otherNeg)
		            return -1;
		        if (!thisNeg && otherNeg)
		            return 1;
		        // At this point the sign bits are the same
		        if (!this.unsigned)
		            return this.sub(other).isNegative() ? -1 : 1;
		        // Both are positive if at least one is unsigned
		        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
		    };

		    /**
		     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
		     * @function
		     * @param {!Long|number|string} other Other value
		     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
		     *  if the given one is greater
		     */
		    LongPrototype.comp = LongPrototype.compare;

		    /**
		     * Negates this Long's value.
		     * @returns {!Long} Negated Long
		     */
		    LongPrototype.negate = function negate() {
		        if (!this.unsigned && this.eq(MIN_VALUE))
		            return MIN_VALUE;
		        return this.not().add(ONE);
		    };

		    /**
		     * Negates this Long's value. This is an alias of {@link Long#negate}.
		     * @function
		     * @returns {!Long} Negated Long
		     */
		    LongPrototype.neg = LongPrototype.negate;

		    /**
		     * Returns the sum of this and the specified Long.
		     * @param {!Long|number|string} addend Addend
		     * @returns {!Long} Sum
		     */
		    LongPrototype.add = function add(addend) {
		        if (!isLong(addend))
		            addend = fromValue(addend);

		        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

		        var a48 = this.high >>> 16;
		        var a32 = this.high & 0xFFFF;
		        var a16 = this.low >>> 16;
		        var a00 = this.low & 0xFFFF;

		        var b48 = addend.high >>> 16;
		        var b32 = addend.high & 0xFFFF;
		        var b16 = addend.low >>> 16;
		        var b00 = addend.low & 0xFFFF;

		        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
		        c00 += a00 + b00;
		        c16 += c00 >>> 16;
		        c00 &= 0xFFFF;
		        c16 += a16 + b16;
		        c32 += c16 >>> 16;
		        c16 &= 0xFFFF;
		        c32 += a32 + b32;
		        c48 += c32 >>> 16;
		        c32 &= 0xFFFF;
		        c48 += a48 + b48;
		        c48 &= 0xFFFF;
		        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
		    };

		    /**
		     * Returns the difference of this and the specified Long.
		     * @param {!Long|number|string} subtrahend Subtrahend
		     * @returns {!Long} Difference
		     */
		    LongPrototype.subtract = function subtract(subtrahend) {
		        if (!isLong(subtrahend))
		            subtrahend = fromValue(subtrahend);
		        return this.add(subtrahend.neg());
		    };

		    /**
		     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
		     * @function
		     * @param {!Long|number|string} subtrahend Subtrahend
		     * @returns {!Long} Difference
		     */
		    LongPrototype.sub = LongPrototype.subtract;

		    /**
		     * Returns the product of this and the specified Long.
		     * @param {!Long|number|string} multiplier Multiplier
		     * @returns {!Long} Product
		     */
		    LongPrototype.multiply = function multiply(multiplier) {
		        if (this.isZero())
		            return ZERO;
		        if (!isLong(multiplier))
		            multiplier = fromValue(multiplier);
		        if (multiplier.isZero())
		            return ZERO;
		        if (this.eq(MIN_VALUE))
		            return multiplier.isOdd() ? MIN_VALUE : ZERO;
		        if (multiplier.eq(MIN_VALUE))
		            return this.isOdd() ? MIN_VALUE : ZERO;

		        if (this.isNegative()) {
		            if (multiplier.isNegative())
		                return this.neg().mul(multiplier.neg());
		            else
		                return this.neg().mul(multiplier).neg();
		        } else if (multiplier.isNegative())
		            return this.mul(multiplier.neg()).neg();

		        // If both longs are small, use float multiplication
		        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
		            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

		        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
		        // We can skip products that would overflow.

		        var a48 = this.high >>> 16;
		        var a32 = this.high & 0xFFFF;
		        var a16 = this.low >>> 16;
		        var a00 = this.low & 0xFFFF;

		        var b48 = multiplier.high >>> 16;
		        var b32 = multiplier.high & 0xFFFF;
		        var b16 = multiplier.low >>> 16;
		        var b00 = multiplier.low & 0xFFFF;

		        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
		        c00 += a00 * b00;
		        c16 += c00 >>> 16;
		        c00 &= 0xFFFF;
		        c16 += a16 * b00;
		        c32 += c16 >>> 16;
		        c16 &= 0xFFFF;
		        c16 += a00 * b16;
		        c32 += c16 >>> 16;
		        c16 &= 0xFFFF;
		        c32 += a32 * b00;
		        c48 += c32 >>> 16;
		        c32 &= 0xFFFF;
		        c32 += a16 * b16;
		        c48 += c32 >>> 16;
		        c32 &= 0xFFFF;
		        c32 += a00 * b32;
		        c48 += c32 >>> 16;
		        c32 &= 0xFFFF;
		        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
		        c48 &= 0xFFFF;
		        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
		    };

		    /**
		     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
		     * @function
		     * @param {!Long|number|string} multiplier Multiplier
		     * @returns {!Long} Product
		     */
		    LongPrototype.mul = LongPrototype.multiply;

		    /**
		     * Returns this Long divided by the specified. The result is signed if this Long is signed or
		     *  unsigned if this Long is unsigned.
		     * @param {!Long|number|string} divisor Divisor
		     * @returns {!Long} Quotient
		     */
		    LongPrototype.divide = function divide(divisor) {
		        if (!isLong(divisor))
		            divisor = fromValue(divisor);
		        if (divisor.isZero())
		            throw Error('division by zero');
		        if (this.isZero())
		            return this.unsigned ? UZERO : ZERO;
		        var approx, rem, res;
		        if (!this.unsigned) {
		            // This section is only relevant for signed longs and is derived from the
		            // closure library as a whole.
		            if (this.eq(MIN_VALUE)) {
		                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
		                    return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
		                else if (divisor.eq(MIN_VALUE))
		                    return ONE;
		                else {
		                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
		                    var halfThis = this.shr(1);
		                    approx = halfThis.div(divisor).shl(1);
		                    if (approx.eq(ZERO)) {
		                        return divisor.isNegative() ? ONE : NEG_ONE;
		                    } else {
		                        rem = this.sub(divisor.mul(approx));
		                        res = approx.add(rem.div(divisor));
		                        return res;
		                    }
		                }
		            } else if (divisor.eq(MIN_VALUE))
		                return this.unsigned ? UZERO : ZERO;
		            if (this.isNegative()) {
		                if (divisor.isNegative())
		                    return this.neg().div(divisor.neg());
		                return this.neg().div(divisor).neg();
		            } else if (divisor.isNegative())
		                return this.div(divisor.neg()).neg();
		            res = ZERO;
		        } else {
		            // The algorithm below has not been made for unsigned longs. It's therefore
		            // required to take special care of the MSB prior to running it.
		            if (!divisor.unsigned)
		                divisor = divisor.toUnsigned();
		            if (divisor.gt(this))
		                return UZERO;
		            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
		                return UONE;
		            res = UZERO;
		        }

		        // Repeat the following until the remainder is less than other:  find a
		        // floating-point that approximates remainder / other *from below*, add this
		        // into the result, and subtract it from the remainder.  It is critical that
		        // the approximate value is less than or equal to the real value so that the
		        // remainder never becomes negative.
		        rem = this;
		        while (rem.gte(divisor)) {
		            // Approximate the result of division. This may be a little greater or
		            // smaller than the actual value.
		            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

		            // We will tweak the approximate result by changing it in the 48-th digit or
		            // the smallest non-fractional digit, whichever is larger.
		            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
		                delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

		            // Decrease the approximation until it is smaller than the remainder.  Note
		            // that if it is too large, the product overflows and is negative.
		                approxRes = fromNumber(approx),
		                approxRem = approxRes.mul(divisor);
		            while (approxRem.isNegative() || approxRem.gt(rem)) {
		                approx -= delta;
		                approxRes = fromNumber(approx, this.unsigned);
		                approxRem = approxRes.mul(divisor);
		            }

		            // We know the answer can't be zero... and actually, zero would cause
		            // infinite recursion since we would make no progress.
		            if (approxRes.isZero())
		                approxRes = ONE;

		            res = res.add(approxRes);
		            rem = rem.sub(approxRem);
		        }
		        return res;
		    };

		    /**
		     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
		     * @function
		     * @param {!Long|number|string} divisor Divisor
		     * @returns {!Long} Quotient
		     */
		    LongPrototype.div = LongPrototype.divide;

		    /**
		     * Returns this Long modulo the specified.
		     * @param {!Long|number|string} divisor Divisor
		     * @returns {!Long} Remainder
		     */
		    LongPrototype.modulo = function modulo(divisor) {
		        if (!isLong(divisor))
		            divisor = fromValue(divisor);
		        return this.sub(this.div(divisor).mul(divisor));
		    };

		    /**
		     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
		     * @function
		     * @param {!Long|number|string} divisor Divisor
		     * @returns {!Long} Remainder
		     */
		    LongPrototype.mod = LongPrototype.modulo;

		    /**
		     * Returns the bitwise NOT of this Long.
		     * @returns {!Long}
		     */
		    LongPrototype.not = function not() {
		        return fromBits(~this.low, ~this.high, this.unsigned);
		    };

		    /**
		     * Returns the bitwise AND of this Long and the specified.
		     * @param {!Long|number|string} other Other Long
		     * @returns {!Long}
		     */
		    LongPrototype.and = function and(other) {
		        if (!isLong(other))
		            other = fromValue(other);
		        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
		    };

		    /**
		     * Returns the bitwise OR of this Long and the specified.
		     * @param {!Long|number|string} other Other Long
		     * @returns {!Long}
		     */
		    LongPrototype.or = function or(other) {
		        if (!isLong(other))
		            other = fromValue(other);
		        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
		    };

		    /**
		     * Returns the bitwise XOR of this Long and the given one.
		     * @param {!Long|number|string} other Other Long
		     * @returns {!Long}
		     */
		    LongPrototype.xor = function xor(other) {
		        if (!isLong(other))
		            other = fromValue(other);
		        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
		    };

		    /**
		     * Returns this Long with bits shifted to the left by the given amount.
		     * @param {number|!Long} numBits Number of bits
		     * @returns {!Long} Shifted Long
		     */
		    LongPrototype.shiftLeft = function shiftLeft(numBits) {
		        if (isLong(numBits))
		            numBits = numBits.toInt();
		        if ((numBits &= 63) === 0)
		            return this;
		        else if (numBits < 32)
		            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
		        else
		            return fromBits(0, this.low << (numBits - 32), this.unsigned);
		    };

		    /**
		     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
		     * @function
		     * @param {number|!Long} numBits Number of bits
		     * @returns {!Long} Shifted Long
		     */
		    LongPrototype.shl = LongPrototype.shiftLeft;

		    /**
		     * Returns this Long with bits arithmetically shifted to the right by the given amount.
		     * @param {number|!Long} numBits Number of bits
		     * @returns {!Long} Shifted Long
		     */
		    LongPrototype.shiftRight = function shiftRight(numBits) {
		        if (isLong(numBits))
		            numBits = numBits.toInt();
		        if ((numBits &= 63) === 0)
		            return this;
		        else if (numBits < 32)
		            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
		        else
		            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
		    };

		    /**
		     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
		     * @function
		     * @param {number|!Long} numBits Number of bits
		     * @returns {!Long} Shifted Long
		     */
		    LongPrototype.shr = LongPrototype.shiftRight;

		    /**
		     * Returns this Long with bits logically shifted to the right by the given amount.
		     * @param {number|!Long} numBits Number of bits
		     * @returns {!Long} Shifted Long
		     */
		    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
		        if (isLong(numBits))
		            numBits = numBits.toInt();
		        numBits &= 63;
		        if (numBits === 0)
		            return this;
		        else {
		            var high = this.high;
		            if (numBits < 32) {
		                var low = this.low;
		                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
		            } else if (numBits === 32)
		                return fromBits(high, 0, this.unsigned);
		            else
		                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
		        }
		    };

		    /**
		     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
		     * @function
		     * @param {number|!Long} numBits Number of bits
		     * @returns {!Long} Shifted Long
		     */
		    LongPrototype.shru = LongPrototype.shiftRightUnsigned;

		    /**
		     * Converts this Long to signed.
		     * @returns {!Long} Signed long
		     */
		    LongPrototype.toSigned = function toSigned() {
		        if (!this.unsigned)
		            return this;
		        return fromBits(this.low, this.high, false);
		    };

		    /**
		     * Converts this Long to unsigned.
		     * @returns {!Long} Unsigned long
		     */
		    LongPrototype.toUnsigned = function toUnsigned() {
		        if (this.unsigned)
		            return this;
		        return fromBits(this.low, this.high, true);
		    };

		    /**
		     * Converts this Long to its byte representation.
		     * @param {boolean=} le Whether little or big endian, defaults to big endian
		     * @returns {!Array.<number>} Byte representation
		     */
		    LongPrototype.toBytes = function(le) {
		        return le ? this.toBytesLE() : this.toBytesBE();
		    };

		    /**
		     * Converts this Long to its little endian byte representation.
		     * @returns {!Array.<number>} Little endian byte representation
		     */
		    LongPrototype.toBytesLE = function() {
		        var hi = this.high,
		            lo = this.low;
		        return [
		             lo         & 0xff,
		            (lo >>>  8) & 0xff,
		            (lo >>> 16) & 0xff,
		            (lo >>> 24) & 0xff,
		             hi         & 0xff,
		            (hi >>>  8) & 0xff,
		            (hi >>> 16) & 0xff,
		            (hi >>> 24) & 0xff
		        ];
		    };

		    /**
		     * Converts this Long to its big endian byte representation.
		     * @returns {!Array.<number>} Big endian byte representation
		     */
		    LongPrototype.toBytesBE = function() {
		        var hi = this.high,
		            lo = this.low;
		        return [
		            (hi >>> 24) & 0xff,
		            (hi >>> 16) & 0xff,
		            (hi >>>  8) & 0xff,
		             hi         & 0xff,
		            (lo >>> 24) & 0xff,
		            (lo >>> 16) & 0xff,
		            (lo >>>  8) & 0xff,
		             lo         & 0xff
		        ];
		    };

		    return Long;
		}); 
	} (long));
	return long.exports;
}

/*
 Copyright 2013-2014 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

(function (module) {
	/**
	 * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
	 * Backing buffer: ArrayBuffer, Accessor: Uint8Array
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/bytebuffer.js for details
	 */
	(function(global, factory) {

	    /* AMD */ if (typeof commonjsRequire === 'function' && 'object' === "object" && module && module["exports"])
	        module['exports'] = (function() {
	            var Long; try { Long = requireLong(); } catch (e) {}
	            return factory(Long);
	        })();
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["ByteBuffer"] = factory(global["dcodeIO"]["Long"]);

	})(commonjsGlobal, function(Long) {

	    /**
	     * Constructs a new ByteBuffer.
	     * @class The swiss army knife for binary data in JavaScript.
	     * @exports ByteBuffer
	     * @constructor
	     * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @expose
	     */
	    var ByteBuffer = function(capacity, littleEndian, noAssert) {
	        if (typeof capacity === 'undefined')
	            capacity = ByteBuffer.DEFAULT_CAPACITY;
	        if (typeof littleEndian === 'undefined')
	            littleEndian = ByteBuffer.DEFAULT_ENDIAN;
	        if (typeof noAssert === 'undefined')
	            noAssert = ByteBuffer.DEFAULT_NOASSERT;
	        if (!noAssert) {
	            capacity = capacity | 0;
	            if (capacity < 0)
	                throw RangeError("Illegal capacity");
	            littleEndian = !!littleEndian;
	            noAssert = !!noAssert;
	        }

	        /**
	         * Backing ArrayBuffer.
	         * @type {!ArrayBuffer}
	         * @expose
	         */
	        this.buffer = capacity === 0 ? EMPTY_BUFFER : new ArrayBuffer(capacity);

	        /**
	         * Uint8Array utilized to manipulate the backing buffer. Becomes `null` if the backing buffer has a capacity of `0`.
	         * @type {?Uint8Array}
	         * @expose
	         */
	        this.view = capacity === 0 ? null : new Uint8Array(this.buffer);

	        /**
	         * Absolute read/write offset.
	         * @type {number}
	         * @expose
	         * @see ByteBuffer#flip
	         * @see ByteBuffer#clear
	         */
	        this.offset = 0;

	        /**
	         * Marked offset.
	         * @type {number}
	         * @expose
	         * @see ByteBuffer#mark
	         * @see ByteBuffer#reset
	         */
	        this.markedOffset = -1;

	        /**
	         * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
	         * @type {number}
	         * @expose
	         * @see ByteBuffer#flip
	         * @see ByteBuffer#clear
	         */
	        this.limit = capacity;

	        /**
	         * Whether to use little endian byte order, defaults to `false` for big endian.
	         * @type {boolean}
	         * @expose
	         */
	        this.littleEndian = littleEndian;

	        /**
	         * Whether to skip assertions of offsets and values, defaults to `false`.
	         * @type {boolean}
	         * @expose
	         */
	        this.noAssert = noAssert;
	    };

	    /**
	     * ByteBuffer version.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ByteBuffer.VERSION = "5.0.1";

	    /**
	     * Little endian constant that can be used instead of its boolean value. Evaluates to `true`.
	     * @type {boolean}
	     * @const
	     * @expose
	     */
	    ByteBuffer.LITTLE_ENDIAN = true;

	    /**
	     * Big endian constant that can be used instead of its boolean value. Evaluates to `false`.
	     * @type {boolean}
	     * @const
	     * @expose
	     */
	    ByteBuffer.BIG_ENDIAN = false;

	    /**
	     * Default initial capacity of `16`.
	     * @type {number}
	     * @expose
	     */
	    ByteBuffer.DEFAULT_CAPACITY = 16;

	    /**
	     * Default endianess of `false` for big endian.
	     * @type {boolean}
	     * @expose
	     */
	    ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.BIG_ENDIAN;

	    /**
	     * Default no assertions flag of `false`.
	     * @type {boolean}
	     * @expose
	     */
	    ByteBuffer.DEFAULT_NOASSERT = false;

	    /**
	     * A `Long` class for representing a 64-bit two's-complement integer value. May be `null` if Long.js has not been loaded
	     *  and int64 support is not available.
	     * @type {?Long}
	     * @const
	     * @see https://github.com/dcodeIO/long.js
	     * @expose
	     */
	    ByteBuffer.Long = Long || null;

	    /**
	     * @alias ByteBuffer.prototype
	     * @inner
	     */
	    var ByteBufferPrototype = ByteBuffer.prototype;

	    /**
	     * An indicator used to reliably determine if an object is a ByteBuffer or not.
	     * @type {boolean}
	     * @const
	     * @expose
	     * @private
	     */
	    ByteBufferPrototype.__isByteBuffer__;

	    Object.defineProperty(ByteBufferPrototype, "__isByteBuffer__", {
	        value: true,
	        enumerable: false,
	        configurable: false
	    });

	    // helpers

	    /**
	     * @type {!ArrayBuffer}
	     * @inner
	     */
	    var EMPTY_BUFFER = new ArrayBuffer(0);

	    /**
	     * String.fromCharCode reference for compile-time renaming.
	     * @type {function(...number):string}
	     * @inner
	     */
	    var stringFromCharCode = String.fromCharCode;

	    /**
	     * Creates a source function for a string.
	     * @param {string} s String to read from
	     * @returns {function():number|null} Source function returning the next char code respectively `null` if there are
	     *  no more characters left.
	     * @throws {TypeError} If the argument is invalid
	     * @inner
	     */
	    function stringSource(s) {
	        var i=0; return function() {
	            return i < s.length ? s.charCodeAt(i++) : null;
	        };
	    }

	    /**
	     * Creates a destination function for a string.
	     * @returns {function(number=):undefined|string} Destination function successively called with the next char code.
	     *  Returns the final string when called without arguments.
	     * @inner
	     */
	    function stringDestination() {
	        var cs = [], ps = []; return function() {
	            if (arguments.length === 0)
	                return ps.join('')+stringFromCharCode.apply(String, cs);
	            if (cs.length + arguments.length > 1024)
	                ps.push(stringFromCharCode.apply(String, cs)),
	                    cs.length = 0;
	            Array.prototype.push.apply(cs, arguments);
	        };
	    }

	    /**
	     * Gets the accessor type.
	     * @returns {Function} `Buffer` under node.js, `Uint8Array` respectively `DataView` in the browser (classes)
	     * @expose
	     */
	    ByteBuffer.accessor = function() {
	        return Uint8Array;
	    };
	    /**
	     * Allocates a new ByteBuffer backed by a buffer of the specified capacity.
	     * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer}
	     * @expose
	     */
	    ByteBuffer.allocate = function(capacity, littleEndian, noAssert) {
	        return new ByteBuffer(capacity, littleEndian, noAssert);
	    };

	    /**
	     * Concatenates multiple ByteBuffers into one.
	     * @param {!Array.<!ByteBuffer|!ArrayBuffer|!Uint8Array|string>} buffers Buffers to concatenate
	     * @param {(string|boolean)=} encoding String encoding if `buffers` contains a string ("base64", "hex", "binary",
	     *  defaults to "utf8")
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order for the resulting ByteBuffer. Defaults
	     *  to {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values for the resulting ByteBuffer. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} Concatenated ByteBuffer
	     * @expose
	     */
	    ByteBuffer.concat = function(buffers, encoding, littleEndian, noAssert) {
	        if (typeof encoding === 'boolean' || typeof encoding !== 'string') {
	            noAssert = littleEndian;
	            littleEndian = encoding;
	            encoding = undefined;
	        }
	        var capacity = 0;
	        for (var i=0, k=buffers.length, length; i<k; ++i) {
	            if (!ByteBuffer.isByteBuffer(buffers[i]))
	                buffers[i] = ByteBuffer.wrap(buffers[i], encoding);
	            length = buffers[i].limit - buffers[i].offset;
	            if (length > 0) capacity += length;
	        }
	        if (capacity === 0)
	            return new ByteBuffer(0, littleEndian, noAssert);
	        var bb = new ByteBuffer(capacity, littleEndian, noAssert),
	            bi;
	        i=0; while (i<k) {
	            bi = buffers[i++];
	            length = bi.limit - bi.offset;
	            if (length <= 0) continue;
	            bb.view.set(bi.view.subarray(bi.offset, bi.limit), bb.offset);
	            bb.offset += length;
	        }
	        bb.limit = bb.offset;
	        bb.offset = 0;
	        return bb;
	    };

	    /**
	     * Tests if the specified type is a ByteBuffer.
	     * @param {*} bb ByteBuffer to test
	     * @returns {boolean} `true` if it is a ByteBuffer, otherwise `false`
	     * @expose
	     */
	    ByteBuffer.isByteBuffer = function(bb) {
	        return (bb && bb["__isByteBuffer__"]) === true;
	    };
	    /**
	     * Gets the backing buffer type.
	     * @returns {Function} `Buffer` under node.js, `ArrayBuffer` in the browser (classes)
	     * @expose
	     */
	    ByteBuffer.type = function() {
	        return ArrayBuffer;
	    };
	    /**
	     * Wraps a buffer or a string. Sets the allocated ByteBuffer's {@link ByteBuffer#offset} to `0` and its
	     *  {@link ByteBuffer#limit} to the length of the wrapped data.
	     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string|!Array.<number>} buffer Anything that can be wrapped
	     * @param {(string|boolean)=} encoding String encoding if `buffer` is a string ("base64", "hex", "binary", defaults to
	     *  "utf8")
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} A ByteBuffer wrapping `buffer`
	     * @expose
	     */
	    ByteBuffer.wrap = function(buffer, encoding, littleEndian, noAssert) {
	        if (typeof encoding !== 'string') {
	            noAssert = littleEndian;
	            littleEndian = encoding;
	            encoding = undefined;
	        }
	        if (typeof buffer === 'string') {
	            if (typeof encoding === 'undefined')
	                encoding = "utf8";
	            switch (encoding) {
	                case "base64":
	                    return ByteBuffer.fromBase64(buffer, littleEndian);
	                case "hex":
	                    return ByteBuffer.fromHex(buffer, littleEndian);
	                case "binary":
	                    return ByteBuffer.fromBinary(buffer, littleEndian);
	                case "utf8":
	                    return ByteBuffer.fromUTF8(buffer, littleEndian);
	                case "debug":
	                    return ByteBuffer.fromDebug(buffer, littleEndian);
	                default:
	                    throw Error("Unsupported encoding: "+encoding);
	            }
	        }
	        if (buffer === null || typeof buffer !== 'object')
	            throw TypeError("Illegal buffer");
	        var bb;
	        if (ByteBuffer.isByteBuffer(buffer)) {
	            bb = ByteBufferPrototype.clone.call(buffer);
	            bb.markedOffset = -1;
	            return bb;
	        }
	        if (buffer instanceof Uint8Array) { // Extract ArrayBuffer from Uint8Array
	            bb = new ByteBuffer(0, littleEndian, noAssert);
	            if (buffer.length > 0) { // Avoid references to more than one EMPTY_BUFFER
	                bb.buffer = buffer.buffer;
	                bb.offset = buffer.byteOffset;
	                bb.limit = buffer.byteOffset + buffer.byteLength;
	                bb.view = new Uint8Array(buffer.buffer);
	            }
	        } else if (buffer instanceof ArrayBuffer) { // Reuse ArrayBuffer
	            bb = new ByteBuffer(0, littleEndian, noAssert);
	            if (buffer.byteLength > 0) {
	                bb.buffer = buffer;
	                bb.offset = 0;
	                bb.limit = buffer.byteLength;
	                bb.view = buffer.byteLength > 0 ? new Uint8Array(buffer) : null;
	            }
	        } else if (Object.prototype.toString.call(buffer) === "[object Array]") { // Create from octets
	            bb = new ByteBuffer(buffer.length, littleEndian, noAssert);
	            bb.limit = buffer.length;
	            for (var i=0; i<buffer.length; ++i)
	                bb.view[i] = buffer[i];
	        } else
	            throw TypeError("Illegal buffer"); // Otherwise fail
	        return bb;
	    };

	    /**
	     * Writes the array as a bitset.
	     * @param {Array<boolean>} value Array of booleans to write
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
	     * @returns {!ByteBuffer}
	     * @expose
	     */
	    ByteBufferPrototype.writeBitSet = function(value, offset) {
	      var relative = typeof offset === 'undefined';
	      if (relative) offset = this.offset;
	      if (!this.noAssert) {
	        if (!(value instanceof Array))
	          throw TypeError("Illegal BitSet: Not an array");
	        if (typeof offset !== 'number' || offset % 1 !== 0)
	            throw TypeError("Illegal offset: "+offset+" (not an integer)");
	        offset >>>= 0;
	        if (offset < 0 || offset + 0 > this.buffer.byteLength)
	            throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	      }

	      var start = offset,
	          bits = value.length,
	          bytes = (bits >> 3),
	          bit = 0,
	          k;

	      offset += this.writeVarint32(bits,offset);

	      while(bytes--) {
	        k = (!!value[bit++] & 1) |
	            ((!!value[bit++] & 1) << 1) |
	            ((!!value[bit++] & 1) << 2) |
	            ((!!value[bit++] & 1) << 3) |
	            ((!!value[bit++] & 1) << 4) |
	            ((!!value[bit++] & 1) << 5) |
	            ((!!value[bit++] & 1) << 6) |
	            ((!!value[bit++] & 1) << 7);
	        this.writeByte(k,offset++);
	      }

	      if(bit < bits) {
	        var m = 0; k = 0;
	        while(bit < bits) k = k | ((!!value[bit++] & 1) << (m++));
	        this.writeByte(k,offset++);
	      }

	      if (relative) {
	        this.offset = offset;
	        return this;
	      }
	      return offset - start;
	    };

	    /**
	     * Reads a BitSet as an array of booleans.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
	     * @returns {Array<boolean>
	     * @expose
	     */
	    ByteBufferPrototype.readBitSet = function(offset) {
	      var relative = typeof offset === 'undefined';
	      if (relative) offset = this.offset;

	      var ret = this.readVarint32(offset),
	          bits = ret.value,
	          bytes = (bits >> 3),
	          bit = 0,
	          value = [],
	          k;

	      offset += ret.length;

	      while(bytes--) {
	        k = this.readByte(offset++);
	        value[bit++] = !!(k & 0x01);
	        value[bit++] = !!(k & 0x02);
	        value[bit++] = !!(k & 0x04);
	        value[bit++] = !!(k & 0x08);
	        value[bit++] = !!(k & 0x10);
	        value[bit++] = !!(k & 0x20);
	        value[bit++] = !!(k & 0x40);
	        value[bit++] = !!(k & 0x80);
	      }

	      if(bit < bits) {
	        var m = 0;
	        k = this.readByte(offset++);
	        while(bit < bits) value[bit++] = !!((k >> (m++)) & 1);
	      }

	      if (relative) {
	        this.offset = offset;
	      }
	      return value;
	    };
	    /**
	     * Reads the specified number of bytes.
	     * @param {number} length Number of bytes to read
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
	     * @returns {!ByteBuffer}
	     * @expose
	     */
	    ByteBufferPrototype.readBytes = function(length, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + length > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+length+") <= "+this.buffer.byteLength);
	        }
	        var slice = this.slice(offset, offset + length);
	        if (relative) this.offset += length;
	        return slice;
	    };

	    /**
	     * Writes a payload of bytes. This is an alias of {@link ByteBuffer#append}.
	     * @function
	     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to write. If `source` is a ByteBuffer, its offsets
	     *  will be modified according to the performed read operation.
	     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeBytes = ByteBufferPrototype.append;

	    // types/ints/int8

	    /**
	     * Writes an 8bit signed integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeInt8 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 1;
	        var capacity0 = this.buffer.byteLength;
	        if (offset > capacity0)
	            this.resize((capacity0 *= 2) > offset ? capacity0 : offset);
	        offset -= 1;
	        this.view[offset] = value;
	        if (relative) this.offset += 1;
	        return this;
	    };

	    /**
	     * Writes an 8bit signed integer. This is an alias of {@link ByteBuffer#writeInt8}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeByte = ByteBufferPrototype.writeInt8;

	    /**
	     * Reads an 8bit signed integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readInt8 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var value = this.view[offset];
	        if ((value & 0x80) === 0x80) value = -(0xFF - value + 1); // Cast to signed
	        if (relative) this.offset += 1;
	        return value;
	    };

	    /**
	     * Reads an 8bit signed integer. This is an alias of {@link ByteBuffer#readInt8}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readByte = ByteBufferPrototype.readInt8;

	    /**
	     * Writes an 8bit unsigned integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeUint8 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value >>>= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 1;
	        var capacity1 = this.buffer.byteLength;
	        if (offset > capacity1)
	            this.resize((capacity1 *= 2) > offset ? capacity1 : offset);
	        offset -= 1;
	        this.view[offset] = value;
	        if (relative) this.offset += 1;
	        return this;
	    };

	    /**
	     * Writes an 8bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint8}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeUInt8 = ByteBufferPrototype.writeUint8;

	    /**
	     * Reads an 8bit unsigned integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUint8 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var value = this.view[offset];
	        if (relative) this.offset += 1;
	        return value;
	    };

	    /**
	     * Reads an 8bit unsigned integer. This is an alias of {@link ByteBuffer#readUint8}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUInt8 = ByteBufferPrototype.readUint8;

	    // types/ints/int16

	    /**
	     * Writes a 16bit signed integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeInt16 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 2;
	        var capacity2 = this.buffer.byteLength;
	        if (offset > capacity2)
	            this.resize((capacity2 *= 2) > offset ? capacity2 : offset);
	        offset -= 2;
	        if (this.littleEndian) {
	            this.view[offset+1] = (value & 0xFF00) >>> 8;
	            this.view[offset  ] =  value & 0x00FF;
	        } else {
	            this.view[offset]   = (value & 0xFF00) >>> 8;
	            this.view[offset+1] =  value & 0x00FF;
	        }
	        if (relative) this.offset += 2;
	        return this;
	    };

	    /**
	     * Writes a 16bit signed integer. This is an alias of {@link ByteBuffer#writeInt16}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeShort = ByteBufferPrototype.writeInt16;

	    /**
	     * Reads a 16bit signed integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readInt16 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 2 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset  ];
	            value |= this.view[offset+1] << 8;
	        } else {
	            value  = this.view[offset  ] << 8;
	            value |= this.view[offset+1];
	        }
	        if ((value & 0x8000) === 0x8000) value = -(0xFFFF - value + 1); // Cast to signed
	        if (relative) this.offset += 2;
	        return value;
	    };

	    /**
	     * Reads a 16bit signed integer. This is an alias of {@link ByteBuffer#readInt16}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readShort = ByteBufferPrototype.readInt16;

	    /**
	     * Writes a 16bit unsigned integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeUint16 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value >>>= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 2;
	        var capacity3 = this.buffer.byteLength;
	        if (offset > capacity3)
	            this.resize((capacity3 *= 2) > offset ? capacity3 : offset);
	        offset -= 2;
	        if (this.littleEndian) {
	            this.view[offset+1] = (value & 0xFF00) >>> 8;
	            this.view[offset  ] =  value & 0x00FF;
	        } else {
	            this.view[offset]   = (value & 0xFF00) >>> 8;
	            this.view[offset+1] =  value & 0x00FF;
	        }
	        if (relative) this.offset += 2;
	        return this;
	    };

	    /**
	     * Writes a 16bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint16}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeUInt16 = ByteBufferPrototype.writeUint16;

	    /**
	     * Reads a 16bit unsigned integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readUint16 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 2 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset  ];
	            value |= this.view[offset+1] << 8;
	        } else {
	            value  = this.view[offset  ] << 8;
	            value |= this.view[offset+1];
	        }
	        if (relative) this.offset += 2;
	        return value;
	    };

	    /**
	     * Reads a 16bit unsigned integer. This is an alias of {@link ByteBuffer#readUint16}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readUInt16 = ByteBufferPrototype.readUint16;

	    // types/ints/int32

	    /**
	     * Writes a 32bit signed integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeInt32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 4;
	        var capacity4 = this.buffer.byteLength;
	        if (offset > capacity4)
	            this.resize((capacity4 *= 2) > offset ? capacity4 : offset);
	        offset -= 4;
	        if (this.littleEndian) {
	            this.view[offset+3] = (value >>> 24) & 0xFF;
	            this.view[offset+2] = (value >>> 16) & 0xFF;
	            this.view[offset+1] = (value >>>  8) & 0xFF;
	            this.view[offset  ] =  value         & 0xFF;
	        } else {
	            this.view[offset  ] = (value >>> 24) & 0xFF;
	            this.view[offset+1] = (value >>> 16) & 0xFF;
	            this.view[offset+2] = (value >>>  8) & 0xFF;
	            this.view[offset+3] =  value         & 0xFF;
	        }
	        if (relative) this.offset += 4;
	        return this;
	    };

	    /**
	     * Writes a 32bit signed integer. This is an alias of {@link ByteBuffer#writeInt32}.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeInt = ByteBufferPrototype.writeInt32;

	    /**
	     * Reads a 32bit signed integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readInt32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset+2] << 16;
	            value |= this.view[offset+1] <<  8;
	            value |= this.view[offset  ];
	            value += this.view[offset+3] << 24 >>> 0;
	        } else {
	            value  = this.view[offset+1] << 16;
	            value |= this.view[offset+2] <<  8;
	            value |= this.view[offset+3];
	            value += this.view[offset  ] << 24 >>> 0;
	        }
	        value |= 0; // Cast to signed
	        if (relative) this.offset += 4;
	        return value;
	    };

	    /**
	     * Reads a 32bit signed integer. This is an alias of {@link ByteBuffer#readInt32}.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readInt = ByteBufferPrototype.readInt32;

	    /**
	     * Writes a 32bit unsigned integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeUint32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value >>>= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 4;
	        var capacity5 = this.buffer.byteLength;
	        if (offset > capacity5)
	            this.resize((capacity5 *= 2) > offset ? capacity5 : offset);
	        offset -= 4;
	        if (this.littleEndian) {
	            this.view[offset+3] = (value >>> 24) & 0xFF;
	            this.view[offset+2] = (value >>> 16) & 0xFF;
	            this.view[offset+1] = (value >>>  8) & 0xFF;
	            this.view[offset  ] =  value         & 0xFF;
	        } else {
	            this.view[offset  ] = (value >>> 24) & 0xFF;
	            this.view[offset+1] = (value >>> 16) & 0xFF;
	            this.view[offset+2] = (value >>>  8) & 0xFF;
	            this.view[offset+3] =  value         & 0xFF;
	        }
	        if (relative) this.offset += 4;
	        return this;
	    };

	    /**
	     * Writes a 32bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint32}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeUInt32 = ByteBufferPrototype.writeUint32;

	    /**
	     * Reads a 32bit unsigned integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUint32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset+2] << 16;
	            value |= this.view[offset+1] <<  8;
	            value |= this.view[offset  ];
	            value += this.view[offset+3] << 24 >>> 0;
	        } else {
	            value  = this.view[offset+1] << 16;
	            value |= this.view[offset+2] <<  8;
	            value |= this.view[offset+3];
	            value += this.view[offset  ] << 24 >>> 0;
	        }
	        if (relative) this.offset += 4;
	        return value;
	    };

	    /**
	     * Reads a 32bit unsigned integer. This is an alias of {@link ByteBuffer#readUint32}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUInt32 = ByteBufferPrototype.readUint32;

	    // types/ints/int64

	    if (Long) {

	        /**
	         * Writes a 64bit signed integer.
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeInt64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                else if (!(value && value instanceof Long))
	                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (typeof value === 'number')
	                value = Long.fromNumber(value);
	            else if (typeof value === 'string')
	                value = Long.fromString(value);
	            offset += 8;
	            var capacity6 = this.buffer.byteLength;
	            if (offset > capacity6)
	                this.resize((capacity6 *= 2) > offset ? capacity6 : offset);
	            offset -= 8;
	            var lo = value.low,
	                hi = value.high;
	            if (this.littleEndian) {
	                this.view[offset+3] = (lo >>> 24) & 0xFF;
	                this.view[offset+2] = (lo >>> 16) & 0xFF;
	                this.view[offset+1] = (lo >>>  8) & 0xFF;
	                this.view[offset  ] =  lo         & 0xFF;
	                offset += 4;
	                this.view[offset+3] = (hi >>> 24) & 0xFF;
	                this.view[offset+2] = (hi >>> 16) & 0xFF;
	                this.view[offset+1] = (hi >>>  8) & 0xFF;
	                this.view[offset  ] =  hi         & 0xFF;
	            } else {
	                this.view[offset  ] = (hi >>> 24) & 0xFF;
	                this.view[offset+1] = (hi >>> 16) & 0xFF;
	                this.view[offset+2] = (hi >>>  8) & 0xFF;
	                this.view[offset+3] =  hi         & 0xFF;
	                offset += 4;
	                this.view[offset  ] = (lo >>> 24) & 0xFF;
	                this.view[offset+1] = (lo >>> 16) & 0xFF;
	                this.view[offset+2] = (lo >>>  8) & 0xFF;
	                this.view[offset+3] =  lo         & 0xFF;
	            }
	            if (relative) this.offset += 8;
	            return this;
	        };

	        /**
	         * Writes a 64bit signed integer. This is an alias of {@link ByteBuffer#writeInt64}.
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeLong = ByteBufferPrototype.writeInt64;

	        /**
	         * Reads a 64bit signed integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readInt64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	            }
	            var lo = 0,
	                hi = 0;
	            if (this.littleEndian) {
	                lo  = this.view[offset+2] << 16;
	                lo |= this.view[offset+1] <<  8;
	                lo |= this.view[offset  ];
	                lo += this.view[offset+3] << 24 >>> 0;
	                offset += 4;
	                hi  = this.view[offset+2] << 16;
	                hi |= this.view[offset+1] <<  8;
	                hi |= this.view[offset  ];
	                hi += this.view[offset+3] << 24 >>> 0;
	            } else {
	                hi  = this.view[offset+1] << 16;
	                hi |= this.view[offset+2] <<  8;
	                hi |= this.view[offset+3];
	                hi += this.view[offset  ] << 24 >>> 0;
	                offset += 4;
	                lo  = this.view[offset+1] << 16;
	                lo |= this.view[offset+2] <<  8;
	                lo |= this.view[offset+3];
	                lo += this.view[offset  ] << 24 >>> 0;
	            }
	            var value = new Long(lo, hi, false);
	            if (relative) this.offset += 8;
	            return value;
	        };

	        /**
	         * Reads a 64bit signed integer. This is an alias of {@link ByteBuffer#readInt64}.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readLong = ByteBufferPrototype.readInt64;

	        /**
	         * Writes a 64bit unsigned integer.
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeUint64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                else if (!(value && value instanceof Long))
	                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (typeof value === 'number')
	                value = Long.fromNumber(value);
	            else if (typeof value === 'string')
	                value = Long.fromString(value);
	            offset += 8;
	            var capacity7 = this.buffer.byteLength;
	            if (offset > capacity7)
	                this.resize((capacity7 *= 2) > offset ? capacity7 : offset);
	            offset -= 8;
	            var lo = value.low,
	                hi = value.high;
	            if (this.littleEndian) {
	                this.view[offset+3] = (lo >>> 24) & 0xFF;
	                this.view[offset+2] = (lo >>> 16) & 0xFF;
	                this.view[offset+1] = (lo >>>  8) & 0xFF;
	                this.view[offset  ] =  lo         & 0xFF;
	                offset += 4;
	                this.view[offset+3] = (hi >>> 24) & 0xFF;
	                this.view[offset+2] = (hi >>> 16) & 0xFF;
	                this.view[offset+1] = (hi >>>  8) & 0xFF;
	                this.view[offset  ] =  hi         & 0xFF;
	            } else {
	                this.view[offset  ] = (hi >>> 24) & 0xFF;
	                this.view[offset+1] = (hi >>> 16) & 0xFF;
	                this.view[offset+2] = (hi >>>  8) & 0xFF;
	                this.view[offset+3] =  hi         & 0xFF;
	                offset += 4;
	                this.view[offset  ] = (lo >>> 24) & 0xFF;
	                this.view[offset+1] = (lo >>> 16) & 0xFF;
	                this.view[offset+2] = (lo >>>  8) & 0xFF;
	                this.view[offset+3] =  lo         & 0xFF;
	            }
	            if (relative) this.offset += 8;
	            return this;
	        };

	        /**
	         * Writes a 64bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint64}.
	         * @function
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeUInt64 = ByteBufferPrototype.writeUint64;

	        /**
	         * Reads a 64bit unsigned integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readUint64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	            }
	            var lo = 0,
	                hi = 0;
	            if (this.littleEndian) {
	                lo  = this.view[offset+2] << 16;
	                lo |= this.view[offset+1] <<  8;
	                lo |= this.view[offset  ];
	                lo += this.view[offset+3] << 24 >>> 0;
	                offset += 4;
	                hi  = this.view[offset+2] << 16;
	                hi |= this.view[offset+1] <<  8;
	                hi |= this.view[offset  ];
	                hi += this.view[offset+3] << 24 >>> 0;
	            } else {
	                hi  = this.view[offset+1] << 16;
	                hi |= this.view[offset+2] <<  8;
	                hi |= this.view[offset+3];
	                hi += this.view[offset  ] << 24 >>> 0;
	                offset += 4;
	                lo  = this.view[offset+1] << 16;
	                lo |= this.view[offset+2] <<  8;
	                lo |= this.view[offset+3];
	                lo += this.view[offset  ] << 24 >>> 0;
	            }
	            var value = new Long(lo, hi, true);
	            if (relative) this.offset += 8;
	            return value;
	        };

	        /**
	         * Reads a 64bit unsigned integer. This is an alias of {@link ByteBuffer#readUint64}.
	         * @function
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readUInt64 = ByteBufferPrototype.readUint64;

	    } // Long


	    // types/floats/float32

	    /*
	     ieee754 - https://github.com/feross/ieee754

	     The MIT License (MIT)

	     Copyright (c) Feross Aboukhadijeh

	     Permission is hereby granted, free of charge, to any person obtaining a copy
	     of this software and associated documentation files (the "Software"), to deal
	     in the Software without restriction, including without limitation the rights
	     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	     copies of the Software, and to permit persons to whom the Software is
	     furnished to do so, subject to the following conditions:

	     The above copyright notice and this permission notice shall be included in
	     all copies or substantial portions of the Software.

	     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	     THE SOFTWARE.
	    */

	    /**
	     * Reads an IEEE754 float from a byte array.
	     * @param {!Array} buffer
	     * @param {number} offset
	     * @param {boolean} isLE
	     * @param {number} mLen
	     * @param {number} nBytes
	     * @returns {number}
	     * @inner
	     */
	    function ieee754_read(buffer, offset, isLE, mLen, nBytes) {
	        var e, m,
	            eLen = nBytes * 8 - mLen - 1,
	            eMax = (1 << eLen) - 1,
	            eBias = eMax >> 1,
	            nBits = -7,
	            i = isLE ? (nBytes - 1) : 0,
	            d = isLE ? -1 : 1,
	            s = buffer[offset + i];

	        i += d;

	        e = s & ((1 << (-nBits)) - 1);
	        s >>= (-nBits);
	        nBits += eLen;
	        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	        m = e & ((1 << (-nBits)) - 1);
	        e >>= (-nBits);
	        nBits += mLen;
	        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	        if (e === 0) {
	            e = 1 - eBias;
	        } else if (e === eMax) {
	            return m ? NaN : ((s ? -1 : 1) * Infinity);
	        } else {
	            m = m + Math.pow(2, mLen);
	            e = e - eBias;
	        }
	        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	    }

	    /**
	     * Writes an IEEE754 float to a byte array.
	     * @param {!Array} buffer
	     * @param {number} value
	     * @param {number} offset
	     * @param {boolean} isLE
	     * @param {number} mLen
	     * @param {number} nBytes
	     * @inner
	     */
	    function ieee754_write(buffer, value, offset, isLE, mLen, nBytes) {
	        var e, m, c,
	            eLen = nBytes * 8 - mLen - 1,
	            eMax = (1 << eLen) - 1,
	            eBias = eMax >> 1,
	            rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	            i = isLE ? 0 : (nBytes - 1),
	            d = isLE ? 1 : -1,
	            s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	        value = Math.abs(value);

	        if (isNaN(value) || value === Infinity) {
	            m = isNaN(value) ? 1 : 0;
	            e = eMax;
	        } else {
	            e = Math.floor(Math.log(value) / Math.LN2);
	            if (value * (c = Math.pow(2, -e)) < 1) {
	                e--;
	                c *= 2;
	            }
	            if (e + eBias >= 1) {
	                value += rt / c;
	            } else {
	                value += rt * Math.pow(2, 1 - eBias);
	            }
	            if (value * c >= 2) {
	                e++;
	                c /= 2;
	            }

	            if (e + eBias >= eMax) {
	                m = 0;
	                e = eMax;
	            } else if (e + eBias >= 1) {
	                m = (value * c - 1) * Math.pow(2, mLen);
	                e = e + eBias;
	            } else {
	                m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	                e = 0;
	            }
	        }

	        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	        e = (e << mLen) | m;
	        eLen += mLen;
	        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	        buffer[offset + i - d] |= s * 128;
	    }

	    /**
	     * Writes a 32bit float.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeFloat32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number')
	                throw TypeError("Illegal value: "+value+" (not a number)");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 4;
	        var capacity8 = this.buffer.byteLength;
	        if (offset > capacity8)
	            this.resize((capacity8 *= 2) > offset ? capacity8 : offset);
	        offset -= 4;
	        ieee754_write(this.view, value, offset, this.littleEndian, 23, 4);
	        if (relative) this.offset += 4;
	        return this;
	    };

	    /**
	     * Writes a 32bit float. This is an alias of {@link ByteBuffer#writeFloat32}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeFloat = ByteBufferPrototype.writeFloat32;

	    /**
	     * Reads a 32bit float.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readFloat32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var value = ieee754_read(this.view, offset, this.littleEndian, 23, 4);
	        if (relative) this.offset += 4;
	        return value;
	    };

	    /**
	     * Reads a 32bit float. This is an alias of {@link ByteBuffer#readFloat32}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readFloat = ByteBufferPrototype.readFloat32;

	    // types/floats/float64

	    /**
	     * Writes a 64bit float.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeFloat64 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number')
	                throw TypeError("Illegal value: "+value+" (not a number)");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 8;
	        var capacity9 = this.buffer.byteLength;
	        if (offset > capacity9)
	            this.resize((capacity9 *= 2) > offset ? capacity9 : offset);
	        offset -= 8;
	        ieee754_write(this.view, value, offset, this.littleEndian, 52, 8);
	        if (relative) this.offset += 8;
	        return this;
	    };

	    /**
	     * Writes a 64bit float. This is an alias of {@link ByteBuffer#writeFloat64}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeDouble = ByteBufferPrototype.writeFloat64;

	    /**
	     * Reads a 64bit float.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readFloat64 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	        }
	        var value = ieee754_read(this.view, offset, this.littleEndian, 52, 8);
	        if (relative) this.offset += 8;
	        return value;
	    };

	    /**
	     * Reads a 64bit float. This is an alias of {@link ByteBuffer#readFloat64}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readDouble = ByteBufferPrototype.readFloat64;


	    // types/varints/varint32

	    /**
	     * Maximum number of bytes required to store a 32bit base 128 variable-length integer.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ByteBuffer.MAX_VARINT32_BYTES = 5;

	    /**
	     * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer.
	     * @param {number} value Value to encode
	     * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT32_BYTES}
	     * @expose
	     */
	    ByteBuffer.calculateVarint32 = function(value) {
	        // ref: src/google/protobuf/io/coded_stream.cc
	        value = value >>> 0;
	             if (value < 1 << 7 ) return 1;
	        else if (value < 1 << 14) return 2;
	        else if (value < 1 << 21) return 3;
	        else if (value < 1 << 28) return 4;
	        else                      return 5;
	    };

	    /**
	     * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding.
	     * @param {number} n Signed 32bit integer
	     * @returns {number} Unsigned zigzag encoded 32bit integer
	     * @expose
	     */
	    ByteBuffer.zigZagEncode32 = function(n) {
	        return (((n |= 0) << 1) ^ (n >> 31)) >>> 0; // ref: src/google/protobuf/wire_format_lite.h
	    };

	    /**
	     * Decodes a zigzag encoded signed 32bit integer.
	     * @param {number} n Unsigned zigzag encoded 32bit integer
	     * @returns {number} Signed 32bit integer
	     * @expose
	     */
	    ByteBuffer.zigZagDecode32 = function(n) {
	        return ((n >>> 1) ^ -(n & 1)) | 0; // // ref: src/google/protobuf/wire_format_lite.h
	    };

	    /**
	     * Writes a 32bit base 128 variable-length integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     */
	    ByteBufferPrototype.writeVarint32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var size = ByteBuffer.calculateVarint32(value),
	            b;
	        offset += size;
	        var capacity10 = this.buffer.byteLength;
	        if (offset > capacity10)
	            this.resize((capacity10 *= 2) > offset ? capacity10 : offset);
	        offset -= size;
	        value >>>= 0;
	        while (value >= 0x80) {
	            b = (value & 0x7f) | 0x80;
	            this.view[offset++] = b;
	            value >>>= 7;
	        }
	        this.view[offset++] = value;
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return size;
	    };

	    /**
	     * Writes a zig-zag encoded (signed) 32bit base 128 variable-length integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     */
	    ByteBufferPrototype.writeVarint32ZigZag = function(value, offset) {
	        return this.writeVarint32(ByteBuffer.zigZagEncode32(value), offset);
	    };

	    /**
	     * Reads a 32bit base 128 variable-length integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
	     *  and the actual number of bytes read.
	     * @throws {Error} If it's not a valid varint. Has a property `truncated = true` if there is not enough data available
	     *  to fully decode the varint.
	     * @expose
	     */
	    ByteBufferPrototype.readVarint32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var c = 0,
	            value = 0 >>> 0,
	            b;
	        do {
	            if (!this.noAssert && offset > this.limit) {
	                var err = Error("Truncated");
	                err['truncated'] = true;
	                throw err;
	            }
	            b = this.view[offset++];
	            if (c < 5)
	                value |= (b & 0x7f) << (7*c);
	            ++c;
	        } while ((b & 0x80) !== 0);
	        value |= 0;
	        if (relative) {
	            this.offset = offset;
	            return value;
	        }
	        return {
	            "value": value,
	            "length": c
	        };
	    };

	    /**
	     * Reads a zig-zag encoded (signed) 32bit base 128 variable-length integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
	     *  and the actual number of bytes read.
	     * @throws {Error} If it's not a valid varint
	     * @expose
	     */
	    ByteBufferPrototype.readVarint32ZigZag = function(offset) {
	        var val = this.readVarint32(offset);
	        if (typeof val === 'object')
	            val["value"] = ByteBuffer.zigZagDecode32(val["value"]);
	        else
	            val = ByteBuffer.zigZagDecode32(val);
	        return val;
	    };

	    // types/varints/varint64

	    if (Long) {

	        /**
	         * Maximum number of bytes required to store a 64bit base 128 variable-length integer.
	         * @type {number}
	         * @const
	         * @expose
	         */
	        ByteBuffer.MAX_VARINT64_BYTES = 10;

	        /**
	         * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer.
	         * @param {number|!Long} value Value to encode
	         * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT64_BYTES}
	         * @expose
	         */
	        ByteBuffer.calculateVarint64 = function(value) {
	            if (typeof value === 'number')
	                value = Long.fromNumber(value);
	            else if (typeof value === 'string')
	                value = Long.fromString(value);
	            // ref: src/google/protobuf/io/coded_stream.cc
	            var part0 = value.toInt() >>> 0,
	                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	            if (part2 == 0) {
	                if (part1 == 0) {
	                    if (part0 < 1 << 14)
	                        return part0 < 1 << 7 ? 1 : 2;
	                    else
	                        return part0 < 1 << 21 ? 3 : 4;
	                } else {
	                    if (part1 < 1 << 14)
	                        return part1 < 1 << 7 ? 5 : 6;
	                    else
	                        return part1 < 1 << 21 ? 7 : 8;
	                }
	            } else
	                return part2 < 1 << 7 ? 9 : 10;
	        };

	        /**
	         * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding.
	         * @param {number|!Long} value Signed long
	         * @returns {!Long} Unsigned zigzag encoded long
	         * @expose
	         */
	        ByteBuffer.zigZagEncode64 = function(value) {
	            if (typeof value === 'number')
	                value = Long.fromNumber(value, false);
	            else if (typeof value === 'string')
	                value = Long.fromString(value, false);
	            else if (value.unsigned !== false) value = value.toSigned();
	            // ref: src/google/protobuf/wire_format_lite.h
	            return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
	        };

	        /**
	         * Decodes a zigzag encoded signed 64bit integer.
	         * @param {!Long|number} value Unsigned zigzag encoded long or JavaScript number
	         * @returns {!Long} Signed long
	         * @expose
	         */
	        ByteBuffer.zigZagDecode64 = function(value) {
	            if (typeof value === 'number')
	                value = Long.fromNumber(value, false);
	            else if (typeof value === 'string')
	                value = Long.fromString(value, false);
	            else if (value.unsigned !== false) value = value.toSigned();
	            // ref: src/google/protobuf/wire_format_lite.h
	            return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
	        };

	        /**
	         * Writes a 64bit base 128 variable-length integer.
	         * @param {number|Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
	         * @expose
	         */
	        ByteBufferPrototype.writeVarint64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                else if (!(value && value instanceof Long))
	                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (typeof value === 'number')
	                value = Long.fromNumber(value, false);
	            else if (typeof value === 'string')
	                value = Long.fromString(value, false);
	            else if (value.unsigned !== false) value = value.toSigned();
	            var size = ByteBuffer.calculateVarint64(value),
	                part0 = value.toInt() >>> 0,
	                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	            offset += size;
	            var capacity11 = this.buffer.byteLength;
	            if (offset > capacity11)
	                this.resize((capacity11 *= 2) > offset ? capacity11 : offset);
	            offset -= size;
	            switch (size) {
	                case 10: this.view[offset+9] = (part2 >>>  7) & 0x01;
	                case 9 : this.view[offset+8] = size !== 9 ? (part2       ) | 0x80 : (part2       ) & 0x7F;
	                case 8 : this.view[offset+7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
	                case 7 : this.view[offset+6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
	                case 6 : this.view[offset+5] = size !== 6 ? (part1 >>>  7) | 0x80 : (part1 >>>  7) & 0x7F;
	                case 5 : this.view[offset+4] = size !== 5 ? (part1       ) | 0x80 : (part1       ) & 0x7F;
	                case 4 : this.view[offset+3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
	                case 3 : this.view[offset+2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
	                case 2 : this.view[offset+1] = size !== 2 ? (part0 >>>  7) | 0x80 : (part0 >>>  7) & 0x7F;
	                case 1 : this.view[offset  ] = size !== 1 ? (part0       ) | 0x80 : (part0       ) & 0x7F;
	            }
	            if (relative) {
	                this.offset += size;
	                return this;
	            } else {
	                return size;
	            }
	        };

	        /**
	         * Writes a zig-zag encoded 64bit base 128 variable-length integer.
	         * @param {number|Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
	         * @expose
	         */
	        ByteBufferPrototype.writeVarint64ZigZag = function(value, offset) {
	            return this.writeVarint64(ByteBuffer.zigZagEncode64(value), offset);
	        };

	        /**
	         * Reads a 64bit base 128 variable-length integer. Requires Long.js.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
	         *  the actual number of bytes read.
	         * @throws {Error} If it's not a valid varint
	         * @expose
	         */
	        ByteBufferPrototype.readVarint64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	            }
	            // ref: src/google/protobuf/io/coded_stream.cc
	            var start = offset,
	                part0 = 0,
	                part1 = 0,
	                part2 = 0,
	                b  = 0;
	            b = this.view[offset++]; part0  = (b & 0x7F)      ; if ( b & 0x80                                                   ) {
	            b = this.view[offset++]; part0 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part0 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part0 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part2  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part2 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            throw Error("Buffer overrun"); }}}}}}}}}}
	            var value = Long.fromBits(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24, false);
	            if (relative) {
	                this.offset = offset;
	                return value;
	            } else {
	                return {
	                    'value': value,
	                    'length': offset-start
	                };
	            }
	        };

	        /**
	         * Reads a zig-zag encoded 64bit base 128 variable-length integer. Requires Long.js.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
	         *  the actual number of bytes read.
	         * @throws {Error} If it's not a valid varint
	         * @expose
	         */
	        ByteBufferPrototype.readVarint64ZigZag = function(offset) {
	            var val = this.readVarint64(offset);
	            if (val && val['value'] instanceof Long)
	                val["value"] = ByteBuffer.zigZagDecode64(val["value"]);
	            else
	                val = ByteBuffer.zigZagDecode64(val);
	            return val;
	        };

	    } // Long


	    // types/strings/cstring

	    /**
	     * Writes a NULL-terminated UTF8 encoded string. For this to work the specified string must not contain any NULL
	     *  characters itself.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  contained in `str` + 1 if omitted.
	     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written
	     * @expose
	     */
	    ByteBufferPrototype.writeCString = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        var i,
	            k = str.length;
	        if (!this.noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            for (i=0; i<k; ++i) {
	                if (str.charCodeAt(i) === 0)
	                    throw RangeError("Illegal str: Contains NULL-characters");
	            }
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        // UTF8 strings do not contain zero bytes in between except for the zero character, so:
	        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
	        offset += k+1;
	        var capacity12 = this.buffer.byteLength;
	        if (offset > capacity12)
	            this.resize((capacity12 *= 2) > offset ? capacity12 : offset);
	        offset -= k+1;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        this.view[offset++] = 0;
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return k;
	    };

	    /**
	     * Reads a NULL-terminated UTF8 encoded string. For this to work the string read must not contain any NULL characters
	     *  itself.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     */
	    ByteBufferPrototype.readCString = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var start = offset;
	        // UTF8 strings do not contain zero bytes in between except for the zero character itself, so:
	        var sd, b = -1;
	        utfx.decodeUTF8toUTF16(function() {
	            if (b === 0) return null;
	            if (offset >= this.limit)
	                throw RangeError("Illegal range: Truncated data, "+offset+" < "+this.limit);
	            b = this.view[offset++];
	            return b === 0 ? null : b;
	        }.bind(this), sd = stringDestination(), true);
	        if (relative) {
	            this.offset = offset;
	            return sd();
	        } else {
	            return {
	                "string": sd(),
	                "length": offset - start
	            };
	        }
	    };

	    // types/strings/istring

	    /**
	     * Writes a length as uint32 prefixed UTF8 encoded string.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     * @see ByteBuffer#writeVarint32
	     */
	    ByteBufferPrototype.writeIString = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var start = offset,
	            k;
	        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
	        offset += 4+k;
	        var capacity13 = this.buffer.byteLength;
	        if (offset > capacity13)
	            this.resize((capacity13 *= 2) > offset ? capacity13 : offset);
	        offset -= 4+k;
	        if (this.littleEndian) {
	            this.view[offset+3] = (k >>> 24) & 0xFF;
	            this.view[offset+2] = (k >>> 16) & 0xFF;
	            this.view[offset+1] = (k >>>  8) & 0xFF;
	            this.view[offset  ] =  k         & 0xFF;
	        } else {
	            this.view[offset  ] = (k >>> 24) & 0xFF;
	            this.view[offset+1] = (k >>> 16) & 0xFF;
	            this.view[offset+2] = (k >>>  8) & 0xFF;
	            this.view[offset+3] =  k         & 0xFF;
	        }
	        offset += 4;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        if (offset !== start + 4 + k)
	            throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+4+k));
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return offset - start;
	    };

	    /**
	     * Reads a length as uint32 prefixed UTF8 encoded string.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     * @see ByteBuffer#readVarint32
	     */
	    ByteBufferPrototype.readIString = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var start = offset;
	        var len = this.readUint32(offset);
	        var str = this.readUTF8String(len, ByteBuffer.METRICS_BYTES, offset += 4);
	        offset += str['length'];
	        if (relative) {
	            this.offset = offset;
	            return str['string'];
	        } else {
	            return {
	                'string': str['string'],
	                'length': offset - start
	            };
	        }
	    };

	    // types/strings/utf8string

	    /**
	     * Metrics representing number of UTF8 characters. Evaluates to `c`.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ByteBuffer.METRICS_CHARS = 'c';

	    /**
	     * Metrics representing number of bytes. Evaluates to `b`.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ByteBuffer.METRICS_BYTES = 'b';

	    /**
	     * Writes an UTF8 encoded string.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
	     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
	     * @expose
	     */
	    ByteBufferPrototype.writeUTF8String = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var k;
	        var start = offset;
	        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
	        offset += k;
	        var capacity14 = this.buffer.byteLength;
	        if (offset > capacity14)
	            this.resize((capacity14 *= 2) > offset ? capacity14 : offset);
	        offset -= k;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return offset - start;
	    };

	    /**
	     * Writes an UTF8 encoded string. This is an alias of {@link ByteBuffer#writeUTF8String}.
	     * @function
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
	     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
	     * @expose
	     */
	    ByteBufferPrototype.writeString = ByteBufferPrototype.writeUTF8String;

	    /**
	     * Calculates the number of UTF8 characters of a string. JavaScript itself uses UTF-16, so that a string's
	     *  `length` property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF.
	     * @param {string} str String to calculate
	     * @returns {number} Number of UTF8 characters
	     * @expose
	     */
	    ByteBuffer.calculateUTF8Chars = function(str) {
	        return utfx.calculateUTF16asUTF8(stringSource(str))[0];
	    };

	    /**
	     * Calculates the number of UTF8 bytes of a string.
	     * @param {string} str String to calculate
	     * @returns {number} Number of UTF8 bytes
	     * @expose
	     */
	    ByteBuffer.calculateUTF8Bytes = function(str) {
	        return utfx.calculateUTF16asUTF8(stringSource(str))[1];
	    };

	    /**
	     * Calculates the number of UTF8 bytes of a string. This is an alias of {@link ByteBuffer.calculateUTF8Bytes}.
	     * @function
	     * @param {string} str String to calculate
	     * @returns {number} Number of UTF8 bytes
	     * @expose
	     */
	    ByteBuffer.calculateString = ByteBuffer.calculateUTF8Bytes;

	    /**
	     * Reads an UTF8 encoded string.
	     * @param {number} length Number of characters or bytes to read.
	     * @param {string=} metrics Metrics specifying what `length` is meant to count. Defaults to
	     *  {@link ByteBuffer.METRICS_CHARS}.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     */
	    ByteBufferPrototype.readUTF8String = function(length, metrics, offset) {
	        if (typeof metrics === 'number') {
	            offset = metrics;
	            metrics = undefined;
	        }
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (typeof metrics === 'undefined') metrics = ByteBuffer.METRICS_CHARS;
	        if (!this.noAssert) {
	            if (typeof length !== 'number' || length % 1 !== 0)
	                throw TypeError("Illegal length: "+length+" (not an integer)");
	            length |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var i = 0,
	            start = offset,
	            sd;
	        if (metrics === ByteBuffer.METRICS_CHARS) { // The same for node and the browser
	            sd = stringDestination();
	            utfx.decodeUTF8(function() {
	                return i < length && offset < this.limit ? this.view[offset++] : null;
	            }.bind(this), function(cp) {
	                ++i; utfx.UTF8toUTF16(cp, sd);
	            });
	            if (i !== length)
	                throw RangeError("Illegal range: Truncated data, "+i+" == "+length);
	            if (relative) {
	                this.offset = offset;
	                return sd();
	            } else {
	                return {
	                    "string": sd(),
	                    "length": offset - start
	                };
	            }
	        } else if (metrics === ByteBuffer.METRICS_BYTES) {
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + length > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+length+") <= "+this.buffer.byteLength);
	            }
	            var k = offset + length;
	            utfx.decodeUTF8toUTF16(function() {
	                return offset < k ? this.view[offset++] : null;
	            }.bind(this), sd = stringDestination(), this.noAssert);
	            if (offset !== k)
	                throw RangeError("Illegal range: Truncated data, "+offset+" == "+k);
	            if (relative) {
	                this.offset = offset;
	                return sd();
	            } else {
	                return {
	                    'string': sd(),
	                    'length': offset - start
	                };
	            }
	        } else
	            throw TypeError("Unsupported metrics: "+metrics);
	    };

	    /**
	     * Reads an UTF8 encoded string. This is an alias of {@link ByteBuffer#readUTF8String}.
	     * @function
	     * @param {number} length Number of characters or bytes to read
	     * @param {number=} metrics Metrics specifying what `n` is meant to count. Defaults to
	     *  {@link ByteBuffer.METRICS_CHARS}.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     */
	    ByteBufferPrototype.readString = ByteBufferPrototype.readUTF8String;

	    // types/strings/vstring

	    /**
	     * Writes a length as varint32 prefixed UTF8 encoded string.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     * @see ByteBuffer#writeVarint32
	     */
	    ByteBufferPrototype.writeVString = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var start = offset,
	            k, l;
	        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
	        l = ByteBuffer.calculateVarint32(k);
	        offset += l+k;
	        var capacity15 = this.buffer.byteLength;
	        if (offset > capacity15)
	            this.resize((capacity15 *= 2) > offset ? capacity15 : offset);
	        offset -= l+k;
	        offset += this.writeVarint32(k, offset);
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        if (offset !== start+k+l)
	            throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+k+l));
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return offset - start;
	    };

	    /**
	     * Reads a length as varint32 prefixed UTF8 encoded string.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     * @see ByteBuffer#readVarint32
	     */
	    ByteBufferPrototype.readVString = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var start = offset;
	        var len = this.readVarint32(offset);
	        var str = this.readUTF8String(len['value'], ByteBuffer.METRICS_BYTES, offset += len['length']);
	        offset += str['length'];
	        if (relative) {
	            this.offset = offset;
	            return str['string'];
	        } else {
	            return {
	                'string': str['string'],
	                'length': offset - start
	            };
	        }
	    };


	    /**
	     * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended
	     *  data's length.
	     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to append. If `source` is a ByteBuffer, its offsets
	     *  will be modified according to the performed read operation.
	     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	     * @param {number=} offset Offset to append at. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @example A relative `<01 02>03.append(<04 05>)` will result in `<01 02 04 05>, 04 05|`
	     * @example An absolute `<01 02>03.append(04 05>, 1)` will result in `<01 04>05, 04 05|`
	     */
	    ByteBufferPrototype.append = function(source, encoding, offset) {
	        if (typeof encoding === 'number' || typeof encoding !== 'string') {
	            offset = encoding;
	            encoding = undefined;
	        }
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        if (!(source instanceof ByteBuffer))
	            source = ByteBuffer.wrap(source, encoding);
	        var length = source.limit - source.offset;
	        if (length <= 0) return this; // Nothing to append
	        offset += length;
	        var capacity16 = this.buffer.byteLength;
	        if (offset > capacity16)
	            this.resize((capacity16 *= 2) > offset ? capacity16 : offset);
	        offset -= length;
	        this.view.set(source.view.subarray(source.offset, source.limit), offset);
	        source.offset += length;
	        if (relative) this.offset += length;
	        return this;
	    };

	    /**
	     * Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents at and after the
	        specified offset up to the length of this ByteBuffer's data.
	     * @param {!ByteBuffer} target Target ByteBuffer
	     * @param {number=} offset Offset to append to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @see ByteBuffer#append
	     */
	    ByteBufferPrototype.appendTo = function(target, offset) {
	        target.append(this, offset);
	        return this;
	    };

	    /**
	     * Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to
	     *  disable them if your code already makes sure that everything is valid.
	     * @param {boolean} assert `true` to enable assertions, otherwise `false`
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.assert = function(assert) {
	        this.noAssert = !assert;
	        return this;
	    };

	    /**
	     * Gets the capacity of this ByteBuffer's backing buffer.
	     * @returns {number} Capacity of the backing buffer
	     * @expose
	     */
	    ByteBufferPrototype.capacity = function() {
	        return this.buffer.byteLength;
	    };
	    /**
	     * Clears this ByteBuffer's offsets by setting {@link ByteBuffer#offset} to `0` and {@link ByteBuffer#limit} to the
	     *  backing buffer's capacity. Discards {@link ByteBuffer#markedOffset}.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.clear = function() {
	        this.offset = 0;
	        this.limit = this.buffer.byteLength;
	        this.markedOffset = -1;
	        return this;
	    };

	    /**
	     * Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for {@link ByteBuffer#offset},
	     *  {@link ByteBuffer#markedOffset} and {@link ByteBuffer#limit}.
	     * @param {boolean=} copy Whether to copy the backing buffer or to return another view on the same, defaults to `false`
	     * @returns {!ByteBuffer} Cloned instance
	     * @expose
	     */
	    ByteBufferPrototype.clone = function(copy) {
	        var bb = new ByteBuffer(0, this.littleEndian, this.noAssert);
	        if (copy) {
	            bb.buffer = new ArrayBuffer(this.buffer.byteLength);
	            bb.view = new Uint8Array(bb.buffer);
	        } else {
	            bb.buffer = this.buffer;
	            bb.view = this.view;
	        }
	        bb.offset = this.offset;
	        bb.markedOffset = this.markedOffset;
	        bb.limit = this.limit;
	        return bb;
	    };

	    /**
	     * Compacts this ByteBuffer to be backed by a {@link ByteBuffer#buffer} of its contents' length. Contents are the bytes
	     *  between {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. Will set `offset = 0` and `limit = capacity` and
	     *  adapt {@link ByteBuffer#markedOffset} to the same relative position if set.
	     * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.compact = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin === 0 && end === this.buffer.byteLength)
	            return this; // Already compacted
	        var len = end - begin;
	        if (len === 0) {
	            this.buffer = EMPTY_BUFFER;
	            this.view = null;
	            if (this.markedOffset >= 0) this.markedOffset -= begin;
	            this.offset = 0;
	            this.limit = 0;
	            return this;
	        }
	        var buffer = new ArrayBuffer(len);
	        var view = new Uint8Array(buffer);
	        view.set(this.view.subarray(begin, end));
	        this.buffer = buffer;
	        this.view = view;
	        if (this.markedOffset >= 0) this.markedOffset -= begin;
	        this.offset = 0;
	        this.limit = len;
	        return this;
	    };

	    /**
	     * Creates a copy of this ByteBuffer's contents. Contents are the bytes between {@link ByteBuffer#offset} and
	     *  {@link ByteBuffer#limit}.
	     * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	     * @returns {!ByteBuffer} Copy
	     * @expose
	     */
	    ByteBufferPrototype.copy = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin === end)
	            return new ByteBuffer(0, this.littleEndian, this.noAssert);
	        var capacity = end - begin,
	            bb = new ByteBuffer(capacity, this.littleEndian, this.noAssert);
	        bb.offset = 0;
	        bb.limit = capacity;
	        if (bb.markedOffset >= 0) bb.markedOffset -= begin;
	        this.copyTo(bb, 0, begin, end);
	        return bb;
	    };

	    /**
	     * Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between {@link ByteBuffer#offset} and
	     *  {@link ByteBuffer#limit}.
	     * @param {!ByteBuffer} target Target ByteBuffer
	     * @param {number=} targetOffset Offset to copy to. Will use and increase the target's {@link ByteBuffer#offset}
	     *  by the number of bytes copied if omitted.
	     * @param {number=} sourceOffset Offset to start copying from. Will use and increase {@link ByteBuffer#offset} by the
	     *  number of bytes copied if omitted.
	     * @param {number=} sourceLimit Offset to end copying from, defaults to {@link ByteBuffer#limit}
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.copyTo = function(target, targetOffset, sourceOffset, sourceLimit) {
	        var relative,
	            targetRelative;
	        if (!this.noAssert) {
	            if (!ByteBuffer.isByteBuffer(target))
	                throw TypeError("Illegal target: Not a ByteBuffer");
	        }
	        targetOffset = (targetRelative = typeof targetOffset === 'undefined') ? target.offset : targetOffset | 0;
	        sourceOffset = (relative = typeof sourceOffset === 'undefined') ? this.offset : sourceOffset | 0;
	        sourceLimit = typeof sourceLimit === 'undefined' ? this.limit : sourceLimit | 0;

	        if (targetOffset < 0 || targetOffset > target.buffer.byteLength)
	            throw RangeError("Illegal target range: 0 <= "+targetOffset+" <= "+target.buffer.byteLength);
	        if (sourceOffset < 0 || sourceLimit > this.buffer.byteLength)
	            throw RangeError("Illegal source range: 0 <= "+sourceOffset+" <= "+this.buffer.byteLength);

	        var len = sourceLimit - sourceOffset;
	        if (len === 0)
	            return target; // Nothing to copy

	        target.ensureCapacity(targetOffset + len);

	        target.view.set(this.view.subarray(sourceOffset, sourceLimit), targetOffset);

	        if (relative) this.offset += len;
	        if (targetRelative) target.offset += len;

	        return this;
	    };

	    /**
	     * Makes sure that this ByteBuffer is backed by a {@link ByteBuffer#buffer} of at least the specified capacity. If the
	     *  current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity,
	     *  the required capacity will be used instead.
	     * @param {number} capacity Required capacity
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.ensureCapacity = function(capacity) {
	        var current = this.buffer.byteLength;
	        if (current < capacity)
	            return this.resize((current *= 2) > capacity ? current : capacity);
	        return this;
	    };

	    /**
	     * Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between
	     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
	     * @param {number|string} value Byte value to fill with. If given as a string, the first character is used.
	     * @param {number=} begin Begin offset. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted. defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @example `someByteBuffer.clear().fill(0)` fills the entire backing buffer with zeroes
	     */
	    ByteBufferPrototype.fill = function(value, begin, end) {
	        var relative = typeof begin === 'undefined';
	        if (relative) begin = this.offset;
	        if (typeof value === 'string' && value.length > 0)
	            value = value.charCodeAt(0);
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin >= end)
	            return this; // Nothing to fill
	        while (begin < end) this.view[begin++] = value;
	        if (relative) this.offset = begin;
	        return this;
	    };

	    /**
	     * Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets `limit = offset` and
	     *  `offset = 0`. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.flip = function() {
	        this.limit = this.offset;
	        this.offset = 0;
	        return this;
	    };
	    /**
	     * Marks an offset on this ByteBuffer to be used later.
	     * @param {number=} offset Offset to mark. Defaults to {@link ByteBuffer#offset}.
	     * @returns {!ByteBuffer} this
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @see ByteBuffer#reset
	     * @expose
	     */
	    ByteBufferPrototype.mark = function(offset) {
	        offset = typeof offset === 'undefined' ? this.offset : offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        this.markedOffset = offset;
	        return this;
	    };
	    /**
	     * Sets the byte order.
	     * @param {boolean} littleEndian `true` for little endian byte order, `false` for big endian
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.order = function(littleEndian) {
	        if (!this.noAssert) {
	            if (typeof littleEndian !== 'boolean')
	                throw TypeError("Illegal littleEndian: Not a boolean");
	        }
	        this.littleEndian = !!littleEndian;
	        return this;
	    };

	    /**
	     * Switches (to) little endian byte order.
	     * @param {boolean=} littleEndian Defaults to `true`, otherwise uses big endian
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.LE = function(littleEndian) {
	        this.littleEndian = typeof littleEndian !== 'undefined' ? !!littleEndian : true;
	        return this;
	    };

	    /**
	     * Switches (to) big endian byte order.
	     * @param {boolean=} bigEndian Defaults to `true`, otherwise uses little endian
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.BE = function(bigEndian) {
	        this.littleEndian = typeof bigEndian !== 'undefined' ? !bigEndian : false;
	        return this;
	    };
	    /**
	     * Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the
	     *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
	     *  will be resized and its contents moved accordingly.
	     * @param {!ByteBuffer|string|!ArrayBuffer} source Data to prepend. If `source` is a ByteBuffer, its offset will be
	     *  modified according to the performed read operation.
	     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	     * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
	     *  prepended if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @example A relative `00<01 02 03>.prepend(<04 05>)` results in `<04 05 01 02 03>, 04 05|`
	     * @example An absolute `00<01 02 03>.prepend(<04 05>, 2)` results in `04<05 02 03>, 04 05|`
	     */
	    ByteBufferPrototype.prepend = function(source, encoding, offset) {
	        if (typeof encoding === 'number' || typeof encoding !== 'string') {
	            offset = encoding;
	            encoding = undefined;
	        }
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        if (!(source instanceof ByteBuffer))
	            source = ByteBuffer.wrap(source, encoding);
	        var len = source.limit - source.offset;
	        if (len <= 0) return this; // Nothing to prepend
	        var diff = len - offset;
	        if (diff > 0) { // Not enough space before offset, so resize + move
	            var buffer = new ArrayBuffer(this.buffer.byteLength + diff);
	            var view = new Uint8Array(buffer);
	            view.set(this.view.subarray(offset, this.buffer.byteLength), len);
	            this.buffer = buffer;
	            this.view = view;
	            this.offset += diff;
	            if (this.markedOffset >= 0) this.markedOffset += diff;
	            this.limit += diff;
	            offset += diff;
	        } else {
	            new Uint8Array(this.buffer);
	        }
	        this.view.set(source.view.subarray(source.offset, source.limit), offset - len);

	        source.offset = source.limit;
	        if (relative)
	            this.offset -= len;
	        return this;
	    };

	    /**
	     * Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the
	     *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
	     *  will be resized and its contents moved accordingly.
	     * @param {!ByteBuffer} target Target ByteBuffer
	     * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
	     *  prepended if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @see ByteBuffer#prepend
	     */
	    ByteBufferPrototype.prependTo = function(target, offset) {
	        target.prepend(this, offset);
	        return this;
	    };
	    /**
	     * Prints debug information about this ByteBuffer's contents.
	     * @param {function(string)=} out Output function to call, defaults to console.log
	     * @expose
	     */
	    ByteBufferPrototype.printDebug = function(out) {
	        if (typeof out !== 'function') out = console.log.bind(console);
	        out(
	            this.toString()+"\n"+
	            "-------------------------------------------------------------------\n"+
	            this.toDebug(/* columns */ true)
	        );
	    };

	    /**
	     * Gets the number of remaining readable bytes. Contents are the bytes between {@link ByteBuffer#offset} and
	     *  {@link ByteBuffer#limit}, so this returns `limit - offset`.
	     * @returns {number} Remaining readable bytes. May be negative if `offset > limit`.
	     * @expose
	     */
	    ByteBufferPrototype.remaining = function() {
	        return this.limit - this.offset;
	    };
	    /**
	     * Resets this ByteBuffer's {@link ByteBuffer#offset}. If an offset has been marked through {@link ByteBuffer#mark}
	     *  before, `offset` will be set to {@link ByteBuffer#markedOffset}, which will then be discarded. If no offset has been
	     *  marked, sets `offset = 0`.
	     * @returns {!ByteBuffer} this
	     * @see ByteBuffer#mark
	     * @expose
	     */
	    ByteBufferPrototype.reset = function() {
	        if (this.markedOffset >= 0) {
	            this.offset = this.markedOffset;
	            this.markedOffset = -1;
	        } else {
	            this.offset = 0;
	        }
	        return this;
	    };
	    /**
	     * Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that
	     *  large or larger.
	     * @param {number} capacity Capacity required
	     * @returns {!ByteBuffer} this
	     * @throws {TypeError} If `capacity` is not a number
	     * @throws {RangeError} If `capacity < 0`
	     * @expose
	     */
	    ByteBufferPrototype.resize = function(capacity) {
	        if (!this.noAssert) {
	            if (typeof capacity !== 'number' || capacity % 1 !== 0)
	                throw TypeError("Illegal capacity: "+capacity+" (not an integer)");
	            capacity |= 0;
	            if (capacity < 0)
	                throw RangeError("Illegal capacity: 0 <= "+capacity);
	        }
	        if (this.buffer.byteLength < capacity) {
	            var buffer = new ArrayBuffer(capacity);
	            var view = new Uint8Array(buffer);
	            view.set(this.view);
	            this.buffer = buffer;
	            this.view = view;
	        }
	        return this;
	    };
	    /**
	     * Reverses this ByteBuffer's contents.
	     * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.reverse = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin === end)
	            return this; // Nothing to reverse
	        Array.prototype.reverse.call(this.view.subarray(begin, end));
	        return this;
	    };
	    /**
	     * Skips the next `length` bytes. This will just advance
	     * @param {number} length Number of bytes to skip. May also be negative to move the offset back.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.skip = function(length) {
	        if (!this.noAssert) {
	            if (typeof length !== 'number' || length % 1 !== 0)
	                throw TypeError("Illegal length: "+length+" (not an integer)");
	            length |= 0;
	        }
	        var offset = this.offset + length;
	        if (!this.noAssert) {
	            if (offset < 0 || offset > this.buffer.byteLength)
	                throw RangeError("Illegal length: 0 <= "+this.offset+" + "+length+" <= "+this.buffer.byteLength);
	        }
	        this.offset = offset;
	        return this;
	    };

	    /**
	     * Slices this ByteBuffer by creating a cloned instance with `offset = begin` and `limit = end`.
	     * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	     * @returns {!ByteBuffer} Clone of this ByteBuffer with slicing applied, backed by the same {@link ByteBuffer#buffer}
	     * @expose
	     */
	    ByteBufferPrototype.slice = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        var bb = this.clone();
	        bb.offset = begin;
	        bb.limit = end;
	        return bb;
	    };
	    /**
	     * Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between
	     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
	     * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory if
	     *  possible. Defaults to `false`
	     * @returns {!ArrayBuffer} Contents as an ArrayBuffer
	     * @expose
	     */
	    ByteBufferPrototype.toBuffer = function(forceCopy) {
	        var offset = this.offset,
	            limit = this.limit;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: Not an integer");
	            offset >>>= 0;
	            if (typeof limit !== 'number' || limit % 1 !== 0)
	                throw TypeError("Illegal limit: Not an integer");
	            limit >>>= 0;
	            if (offset < 0 || offset > limit || limit > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+offset+" <= "+limit+" <= "+this.buffer.byteLength);
	        }
	        // NOTE: It's not possible to have another ArrayBuffer reference the same memory as the backing buffer. This is
	        // possible with Uint8Array#subarray only, but we have to return an ArrayBuffer by contract. So:
	        if (!forceCopy && offset === 0 && limit === this.buffer.byteLength)
	            return this.buffer;
	        if (offset === limit)
	            return EMPTY_BUFFER;
	        var buffer = new ArrayBuffer(limit - offset);
	        new Uint8Array(buffer).set(new Uint8Array(this.buffer).subarray(offset, limit), 0);
	        return buffer;
	    };

	    /**
	     * Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between
	     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. This is an alias of {@link ByteBuffer#toBuffer}.
	     * @function
	     * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory.
	     *  Defaults to `false`
	     * @returns {!ArrayBuffer} Contents as an ArrayBuffer
	     * @expose
	     */
	    ByteBufferPrototype.toArrayBuffer = ByteBufferPrototype.toBuffer;

	    /**
	     * Converts the ByteBuffer's contents to a string.
	     * @param {string=} encoding Output encoding. Returns an informative string representation if omitted but also allows
	     *  direct conversion to "utf8", "hex", "base64" and "binary" encoding. "debug" returns a hex representation with
	     *  highlighted offsets.
	     * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	     * @returns {string} String representation
	     * @throws {Error} If `encoding` is invalid
	     * @expose
	     */
	    ByteBufferPrototype.toString = function(encoding, begin, end) {
	        if (typeof encoding === 'undefined')
	            return "ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")";
	        if (typeof encoding === 'number')
	            encoding = "utf8",
	            begin = encoding,
	            end = begin;
	        switch (encoding) {
	            case "utf8":
	                return this.toUTF8(begin, end);
	            case "base64":
	                return this.toBase64(begin, end);
	            case "hex":
	                return this.toHex(begin, end);
	            case "binary":
	                return this.toBinary(begin, end);
	            case "debug":
	                return this.toDebug();
	            case "columns":
	                return this.toColumns();
	            default:
	                throw Error("Unsupported encoding: "+encoding);
	        }
	    };

	    // lxiv-embeddable

	    /**
	     * lxiv-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
	     * Released under the Apache License, Version 2.0
	     * see: https://github.com/dcodeIO/lxiv for details
	     */
	    var lxiv = function() {

	        /**
	         * lxiv namespace.
	         * @type {!Object.<string,*>}
	         * @exports lxiv
	         */
	        var lxiv = {};

	        /**
	         * Character codes for output.
	         * @type {!Array.<number>}
	         * @inner
	         */
	        var aout = [
	            65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
	            81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102,
	            103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
	            119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
	        ];

	        /**
	         * Character codes for input.
	         * @type {!Array.<number>}
	         * @inner
	         */
	        var ain = [];
	        for (var i=0, k=aout.length; i<k; ++i)
	            ain[aout[i]] = i;

	        /**
	         * Encodes bytes to base64 char codes.
	         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if
	         *  there are no more bytes left.
	         * @param {!function(number)} dst Characters destination as a function successively called with each encoded char
	         *  code.
	         */
	        lxiv.encode = function(src, dst) {
	            var b, t;
	            while ((b = src()) !== null) {
	                dst(aout[(b>>2)&0x3f]);
	                t = (b&0x3)<<4;
	                if ((b = src()) !== null) {
	                    t |= (b>>4)&0xf;
	                    dst(aout[(t|((b>>4)&0xf))&0x3f]);
	                    t = (b&0xf)<<2;
	                    if ((b = src()) !== null)
	                        dst(aout[(t|((b>>6)&0x3))&0x3f]),
	                        dst(aout[b&0x3f]);
	                    else
	                        dst(aout[t&0x3f]),
	                        dst(61);
	                } else
	                    dst(aout[t&0x3f]),
	                    dst(61),
	                    dst(61);
	            }
	        };

	        /**
	         * Decodes base64 char codes to bytes.
	         * @param {!function():number|null} src Characters source as a function returning the next char code respectively
	         *  `null` if there are no more characters left.
	         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
	         * @throws {Error} If a character code is invalid
	         */
	        lxiv.decode = function(src, dst) {
	            var c, t1, t2;
	            function fail(c) {
	                throw Error("Illegal character code: "+c);
	            }
	            while ((c = src()) !== null) {
	                t1 = ain[c];
	                if (typeof t1 === 'undefined') fail(c);
	                if ((c = src()) !== null) {
	                    t2 = ain[c];
	                    if (typeof t2 === 'undefined') fail(c);
	                    dst((t1<<2)>>>0|(t2&0x30)>>4);
	                    if ((c = src()) !== null) {
	                        t1 = ain[c];
	                        if (typeof t1 === 'undefined')
	                            if (c === 61) break; else fail(c);
	                        dst(((t2&0xf)<<4)>>>0|(t1&0x3c)>>2);
	                        if ((c = src()) !== null) {
	                            t2 = ain[c];
	                            if (typeof t2 === 'undefined')
	                                if (c === 61) break; else fail(c);
	                            dst(((t1&0x3)<<6)>>>0|t2);
	                        }
	                    }
	                }
	            }
	        };

	        /**
	         * Tests if a string is valid base64.
	         * @param {string} str String to test
	         * @returns {boolean} `true` if valid, otherwise `false`
	         */
	        lxiv.test = function(str) {
	            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
	        };

	        return lxiv;
	    }();

	    // encodings/base64

	    /**
	     * Encodes this ByteBuffer's contents to a base64 encoded string.
	     * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}.
	     * @returns {string} Base64 encoded string
	     * @throws {RangeError} If `begin` or `end` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.toBase64 = function(begin, end) {
	        if (typeof begin === 'undefined')
	            begin = this.offset;
	        if (typeof end === 'undefined')
	            end = this.limit;
	        begin = begin | 0; end = end | 0;
	        if (begin < 0 || end > this.capacity || begin > end)
	            throw RangeError("begin, end");
	        var sd; lxiv.encode(function() {
	            return begin < end ? this.view[begin++] : null;
	        }.bind(this), sd = stringDestination());
	        return sd();
	    };

	    /**
	     * Decodes a base64 encoded string to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromBase64 = function(str, littleEndian) {
	        if (typeof str !== 'string')
	            throw TypeError("str");
	        var bb = new ByteBuffer(str.length/4*3, littleEndian),
	            i = 0;
	        lxiv.decode(stringSource(str), function(b) {
	            bb.view[i++] = b;
	        });
	        bb.limit = i;
	        return bb;
	    };

	    /**
	     * Encodes a binary string to base64 like `window.btoa` does.
	     * @param {string} str Binary string
	     * @returns {string} Base64 encoded string
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa
	     * @expose
	     */
	    ByteBuffer.btoa = function(str) {
	        return ByteBuffer.fromBinary(str).toBase64();
	    };

	    /**
	     * Decodes a base64 encoded string to binary like `window.atob` does.
	     * @param {string} b64 Base64 encoded string
	     * @returns {string} Binary string
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.atob
	     * @expose
	     */
	    ByteBuffer.atob = function(b64) {
	        return ByteBuffer.fromBase64(b64).toBinary();
	    };

	    // encodings/binary

	    /**
	     * Encodes this ByteBuffer to a binary encoded string, that is using only characters 0x00-0xFF as bytes.
	     * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
	     * @returns {string} Binary encoded string
	     * @throws {RangeError} If `offset > limit`
	     * @expose
	     */
	    ByteBufferPrototype.toBinary = function(begin, end) {
	        if (typeof begin === 'undefined')
	            begin = this.offset;
	        if (typeof end === 'undefined')
	            end = this.limit;
	        begin |= 0; end |= 0;
	        if (begin < 0 || end > this.capacity() || begin > end)
	            throw RangeError("begin, end");
	        if (begin === end)
	            return "";
	        var chars = [],
	            parts = [];
	        while (begin < end) {
	            chars.push(this.view[begin++]);
	            if (chars.length >= 1024)
	                parts.push(String.fromCharCode.apply(String, chars)),
	                chars = [];
	        }
	        return parts.join('') + String.fromCharCode.apply(String, chars);
	    };

	    /**
	     * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromBinary = function(str, littleEndian) {
	        if (typeof str !== 'string')
	            throw TypeError("str");
	        var i = 0,
	            k = str.length,
	            charCode,
	            bb = new ByteBuffer(k, littleEndian);
	        while (i<k) {
	            charCode = str.charCodeAt(i);
	            if (charCode > 0xff)
	                throw RangeError("illegal char code: "+charCode);
	            bb.view[i++] = charCode;
	        }
	        bb.limit = k;
	        return bb;
	    };

	    // encodings/debug

	    /**
	     * Encodes this ByteBuffer to a hex encoded string with marked offsets. Offset symbols are:
	     * * `<` : offset,
	     * * `'` : markedOffset,
	     * * `>` : limit,
	     * * `|` : offset and limit,
	     * * `[` : offset and markedOffset,
	     * * `]` : markedOffset and limit,
	     * * `!` : offset, markedOffset and limit
	     * @param {boolean=} columns If `true` returns two columns hex + ascii, defaults to `false`
	     * @returns {string|!Array.<string>} Debug string or array of lines if `asArray = true`
	     * @expose
	     * @example `>00'01 02<03` contains four bytes with `limit=0, markedOffset=1, offset=3`
	     * @example `00[01 02 03>` contains four bytes with `offset=markedOffset=1, limit=4`
	     * @example `00|01 02 03` contains four bytes with `offset=limit=1, markedOffset=-1`
	     * @example `|` contains zero bytes with `offset=limit=0, markedOffset=-1`
	     */
	    ByteBufferPrototype.toDebug = function(columns) {
	        var i = -1,
	            k = this.buffer.byteLength,
	            b,
	            hex = "",
	            asc = "",
	            out = "";
	        while (i<k) {
	            if (i !== -1) {
	                b = this.view[i];
	                if (b < 0x10) hex += "0"+b.toString(16).toUpperCase();
	                else hex += b.toString(16).toUpperCase();
	                if (columns)
	                    asc += b > 32 && b < 127 ? String.fromCharCode(b) : '.';
	            }
	            ++i;
	            if (columns) {
	                if (i > 0 && i % 16 === 0 && i !== k) {
	                    while (hex.length < 3*16+3) hex += " ";
	                    out += hex+asc+"\n";
	                    hex = asc = "";
	                }
	            }
	            if (i === this.offset && i === this.limit)
	                hex += i === this.markedOffset ? "!" : "|";
	            else if (i === this.offset)
	                hex += i === this.markedOffset ? "[" : "<";
	            else if (i === this.limit)
	                hex += i === this.markedOffset ? "]" : ">";
	            else
	                hex += i === this.markedOffset ? "'" : (columns || (i !== 0 && i !== k) ? " " : "");
	        }
	        if (columns && hex !== " ") {
	            while (hex.length < 3*16+3)
	                hex += " ";
	            out += hex + asc + "\n";
	        }
	        return columns ? out : hex;
	    };

	    /**
	     * Decodes a hex encoded string with marked offsets to a ByteBuffer.
	     * @param {string} str Debug string to decode (not be generated with `columns = true`)
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     * @see ByteBuffer#toDebug
	     */
	    ByteBuffer.fromDebug = function(str, littleEndian, noAssert) {
	        var k = str.length,
	            bb = new ByteBuffer(((k+1)/3)|0, littleEndian, noAssert);
	        var i = 0, j = 0, ch, b,
	            rs = false, // Require symbol next
	            ho = false, hm = false, hl = false, // Already has offset (ho), markedOffset (hm), limit (hl)?
	            fail = false;
	        while (i<k) {
	            switch (ch = str.charAt(i++)) {
	                case '!':
	                    if (!noAssert) {
	                        if (ho || hm || hl) {
	                            fail = true;
	                            break;
	                        }
	                        ho = hm = hl = true;
	                    }
	                    bb.offset = bb.markedOffset = bb.limit = j;
	                    rs = false;
	                    break;
	                case '|':
	                    if (!noAssert) {
	                        if (ho || hl) {
	                            fail = true;
	                            break;
	                        }
	                        ho = hl = true;
	                    }
	                    bb.offset = bb.limit = j;
	                    rs = false;
	                    break;
	                case '[':
	                    if (!noAssert) {
	                        if (ho || hm) {
	                            fail = true;
	                            break;
	                        }
	                        ho = hm = true;
	                    }
	                    bb.offset = bb.markedOffset = j;
	                    rs = false;
	                    break;
	                case '<':
	                    if (!noAssert) {
	                        if (ho) {
	                            fail = true;
	                            break;
	                        }
	                        ho = true;
	                    }
	                    bb.offset = j;
	                    rs = false;
	                    break;
	                case ']':
	                    if (!noAssert) {
	                        if (hl || hm) {
	                            fail = true;
	                            break;
	                        }
	                        hl = hm = true;
	                    }
	                    bb.limit = bb.markedOffset = j;
	                    rs = false;
	                    break;
	                case '>':
	                    if (!noAssert) {
	                        if (hl) {
	                            fail = true;
	                            break;
	                        }
	                        hl = true;
	                    }
	                    bb.limit = j;
	                    rs = false;
	                    break;
	                case "'":
	                    if (!noAssert) {
	                        if (hm) {
	                            fail = true;
	                            break;
	                        }
	                        hm = true;
	                    }
	                    bb.markedOffset = j;
	                    rs = false;
	                    break;
	                case ' ':
	                    rs = false;
	                    break;
	                default:
	                    if (!noAssert) {
	                        if (rs) {
	                            fail = true;
	                            break;
	                        }
	                    }
	                    b = parseInt(ch+str.charAt(i++), 16);
	                    if (!noAssert) {
	                        if (isNaN(b) || b < 0 || b > 255)
	                            throw TypeError("Illegal str: Not a debug encoded string");
	                    }
	                    bb.view[j++] = b;
	                    rs = true;
	            }
	            if (fail)
	                throw TypeError("Illegal str: Invalid symbol at "+i);
	        }
	        if (!noAssert) {
	            if (!ho || !hl)
	                throw TypeError("Illegal str: Missing offset or limit");
	            if (j<bb.buffer.byteLength)
	                throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+j+" < "+k);
	        }
	        return bb;
	    };

	    // encodings/hex

	    /**
	     * Encodes this ByteBuffer's contents to a hex encoded string.
	     * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
	     * @returns {string} Hex encoded string
	     * @expose
	     */
	    ByteBufferPrototype.toHex = function(begin, end) {
	        begin = typeof begin === 'undefined' ? this.offset : begin;
	        end = typeof end === 'undefined' ? this.limit : end;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        var out = new Array(end - begin),
	            b;
	        while (begin < end) {
	            b = this.view[begin++];
	            if (b < 0x10)
	                out.push("0", b.toString(16));
	            else out.push(b.toString(16));
	        }
	        return out.join('');
	    };

	    /**
	     * Decodes a hex encoded string to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromHex = function(str, littleEndian, noAssert) {
	        if (!noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            if (str.length % 2 !== 0)
	                throw TypeError("Illegal str: Length not a multiple of 2");
	        }
	        var k = str.length,
	            bb = new ByteBuffer((k / 2) | 0, littleEndian),
	            b;
	        for (var i=0, j=0; i<k; i+=2) {
	            b = parseInt(str.substring(i, i+2), 16);
	            if (!noAssert)
	                if (!isFinite(b) || b < 0 || b > 255)
	                    throw TypeError("Illegal str: Contains non-hex characters");
	            bb.view[j++] = b;
	        }
	        bb.limit = j;
	        return bb;
	    };

	    // utfx-embeddable

	    /**
	     * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
	     * Released under the Apache License, Version 2.0
	     * see: https://github.com/dcodeIO/utfx for details
	     */
	    var utfx = function() {

	        /**
	         * utfx namespace.
	         * @inner
	         * @type {!Object.<string,*>}
	         */
	        var utfx = {};

	        /**
	         * Maximum valid code point.
	         * @type {number}
	         * @const
	         */
	        utfx.MAX_CODEPOINT = 0x10FFFF;

	        /**
	         * Encodes UTF8 code points to UTF8 bytes.
	         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
	         *  respectively `null` if there are no more code points left or a single numeric code point.
	         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
	         */
	        utfx.encodeUTF8 = function(src, dst) {
	            var cp = null;
	            if (typeof src === 'number')
	                cp = src,
	                src = function() { return null; };
	            while (cp !== null || (cp = src()) !== null) {
	                if (cp < 0x80)
	                    dst(cp&0x7F);
	                else if (cp < 0x800)
	                    dst(((cp>>6)&0x1F)|0xC0),
	                    dst((cp&0x3F)|0x80);
	                else if (cp < 0x10000)
	                    dst(((cp>>12)&0x0F)|0xE0),
	                    dst(((cp>>6)&0x3F)|0x80),
	                    dst((cp&0x3F)|0x80);
	                else
	                    dst(((cp>>18)&0x07)|0xF0),
	                    dst(((cp>>12)&0x3F)|0x80),
	                    dst(((cp>>6)&0x3F)|0x80),
	                    dst((cp&0x3F)|0x80);
	                cp = null;
	            }
	        };

	        /**
	         * Decodes UTF8 bytes to UTF8 code points.
	         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
	         *  are no more bytes left.
	         * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
	         * @throws {RangeError} If a starting byte is invalid in UTF8
	         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
	         *  remaining bytes.
	         */
	        utfx.decodeUTF8 = function(src, dst) {
	            var a, b, c, d, fail = function(b) {
	                b = b.slice(0, b.indexOf(null));
	                var err = Error(b.toString());
	                err.name = "TruncatedError";
	                err['bytes'] = b;
	                throw err;
	            };
	            while ((a = src()) !== null) {
	                if ((a&0x80) === 0)
	                    dst(a);
	                else if ((a&0xE0) === 0xC0)
	                    ((b = src()) === null) && fail([a, b]),
	                    dst(((a&0x1F)<<6) | (b&0x3F));
	                else if ((a&0xF0) === 0xE0)
	                    ((b=src()) === null || (c=src()) === null) && fail([a, b, c]),
	                    dst(((a&0x0F)<<12) | ((b&0x3F)<<6) | (c&0x3F));
	                else if ((a&0xF8) === 0xF0)
	                    ((b=src()) === null || (c=src()) === null || (d=src()) === null) && fail([a, b, c ,d]),
	                    dst(((a&0x07)<<18) | ((b&0x3F)<<12) | ((c&0x3F)<<6) | (d&0x3F));
	                else throw RangeError("Illegal starting byte: "+a);
	            }
	        };

	        /**
	         * Converts UTF16 characters to UTF8 code points.
	         * @param {!function():number|null} src Characters source as a function returning the next char code respectively
	         *  `null` if there are no more characters left.
	         * @param {!function(number)} dst Code points destination as a function successively called with each converted code
	         *  point.
	         */
	        utfx.UTF16toUTF8 = function(src, dst) {
	            var c1, c2 = null;
	            while (true) {
	                if ((c1 = c2 !== null ? c2 : src()) === null)
	                    break;
	                if (c1 >= 0xD800 && c1 <= 0xDFFF) {
	                    if ((c2 = src()) !== null) {
	                        if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
	                            dst((c1-0xD800)*0x400+c2-0xDC00+0x10000);
	                            c2 = null; continue;
	                        }
	                    }
	                }
	                dst(c1);
	            }
	            if (c2 !== null) dst(c2);
	        };

	        /**
	         * Converts UTF8 code points to UTF16 characters.
	         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
	         *  respectively `null` if there are no more code points left or a single numeric code point.
	         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
	         * @throws {RangeError} If a code point is out of range
	         */
	        utfx.UTF8toUTF16 = function(src, dst) {
	            var cp = null;
	            if (typeof src === 'number')
	                cp = src, src = function() { return null; };
	            while (cp !== null || (cp = src()) !== null) {
	                if (cp <= 0xFFFF)
	                    dst(cp);
	                else
	                    cp -= 0x10000,
	                    dst((cp>>10)+0xD800),
	                    dst((cp%0x400)+0xDC00);
	                cp = null;
	            }
	        };

	        /**
	         * Converts and encodes UTF16 characters to UTF8 bytes.
	         * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
	         *  if there are no more characters left.
	         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
	         */
	        utfx.encodeUTF16toUTF8 = function(src, dst) {
	            utfx.UTF16toUTF8(src, function(cp) {
	                utfx.encodeUTF8(cp, dst);
	            });
	        };

	        /**
	         * Decodes and converts UTF8 bytes to UTF16 characters.
	         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
	         *  are no more bytes left.
	         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
	         * @throws {RangeError} If a starting byte is invalid in UTF8
	         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
	         */
	        utfx.decodeUTF8toUTF16 = function(src, dst) {
	            utfx.decodeUTF8(src, function(cp) {
	                utfx.UTF8toUTF16(cp, dst);
	            });
	        };

	        /**
	         * Calculates the byte length of an UTF8 code point.
	         * @param {number} cp UTF8 code point
	         * @returns {number} Byte length
	         */
	        utfx.calculateCodePoint = function(cp) {
	            return (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	        };

	        /**
	         * Calculates the number of UTF8 bytes required to store UTF8 code points.
	         * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
	         *  `null` if there are no more code points left.
	         * @returns {number} The number of UTF8 bytes required
	         */
	        utfx.calculateUTF8 = function(src) {
	            var cp, l=0;
	            while ((cp = src()) !== null)
	                l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	            return l;
	        };

	        /**
	         * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
	         * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
	         *  `null` if there are no more characters left.
	         * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
	         */
	        utfx.calculateUTF16asUTF8 = function(src) {
	            var n=0, l=0;
	            utfx.UTF16toUTF8(src, function(cp) {
	                ++n; l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	            });
	            return [n,l];
	        };

	        return utfx;
	    }();

	    // encodings/utf8

	    /**
	     * Encodes this ByteBuffer's contents between {@link ByteBuffer#offset} and {@link ByteBuffer#limit} to an UTF8 encoded
	     *  string.
	     * @returns {string} Hex encoded string
	     * @throws {RangeError} If `offset > limit`
	     * @expose
	     */
	    ByteBufferPrototype.toUTF8 = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        var sd; try {
	            utfx.decodeUTF8toUTF16(function() {
	                return begin < end ? this.view[begin++] : null;
	            }.bind(this), sd = stringDestination());
	        } catch (e) {
	            if (begin !== end)
	                throw RangeError("Illegal range: Truncated data, "+begin+" != "+end);
	        }
	        return sd();
	    };

	    /**
	     * Decodes an UTF8 encoded string to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromUTF8 = function(str, littleEndian, noAssert) {
	        if (!noAssert)
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	        var bb = new ByteBuffer(utfx.calculateUTF16asUTF8(stringSource(str), true)[1], littleEndian, noAssert),
	            i = 0;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            bb.view[i++] = b;
	        });
	        bb.limit = i;
	        return bb;
	    };

	    return ByteBuffer;
	}); 
} (bytebuffer));

var bytebufferExports = bytebuffer.exports;
var ByteBuffer = /*@__PURE__*/getDefaultExportFromCjs(bytebufferExports);

/**
 * Code translated from a C# project https://github.com/hylander0/Iteedee.ApkReader/blob/master/Iteedee.ApkReader/ApkResourceFinder.cs
 *
 * Decode binary file `resources.arsc` from a .apk file to a JavaScript Object.
 */

var RES_STRING_POOL_TYPE = 0x0001;
var RES_TABLE_TYPE = 0x0002;
var RES_TABLE_PACKAGE_TYPE = 0x0200;
var RES_TABLE_TYPE_TYPE = 0x0201;
var RES_TABLE_TYPE_SPEC_TYPE = 0x0202;

// The 'data' holds a ResTable_ref, a reference to another resource
// table entry.
var TYPE_REFERENCE = 0x01;
// The 'data' holds an index into the containing resource table's
// global value string pool.
var TYPE_STRING = 0x03;
function ResourceFinder() {
  this.valueStringPool = null;
  this.typeStringPool = null;
  this.keyStringPool = null;
  this.package_id = 0;
  this.responseMap = {};
  this.entryMap = {};
}

/**
 * Same to C# BinaryReader.readBytes
 *
 * @param bb ByteBuffer
 * @param len length
 * @returns {Buffer}
 */
ResourceFinder.readBytes = function (bb, len) {
  var uint8Array = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    uint8Array[i] = bb.readUint8();
  }
  return ByteBuffer.wrap(uint8Array, "binary", true);
};

//
/**
 *
 * @param {ByteBuffer} bb
 * @return {Map<String, Set<String>>}
 */
ResourceFinder.prototype.processResourceTable = function (resourceBuffer) {
  var bb = ByteBuffer.wrap(resourceBuffer, "binary", true);

  // Resource table structure
  var type = bb.readShort(),
    headerSize = bb.readShort(),
    size = bb.readInt(),
    packageCount = bb.readInt(),
    buffer,
    bb2;
  if (type != RES_TABLE_TYPE) {
    throw new Error("No RES_TABLE_TYPE found!");
  }
  if (size != bb.limit) {
    throw new Error("The buffer size not matches to the resource table size.");
  }
  bb.offset = headerSize;
  var realStringPoolCount = 0,
    realPackageCount = 0;
  while (true) {
    var pos, t, hs, s;
    try {
      pos = bb.offset;
      t = bb.readShort();
      hs = bb.readShort();
      s = bb.readInt();
    } catch (e) {
      break;
    }
    if (t == RES_STRING_POOL_TYPE) {
      // Process the string pool
      if (realStringPoolCount == 0) {
        buffer = new ByteBuffer(s);
        bb.offset = pos;
        bb.prependTo(buffer);
        bb2 = ByteBuffer.wrap(buffer, "binary", true);
        bb2.LE();
        this.valueStringPool = this.processStringPool(bb2);
      }
      realStringPoolCount++;
    } else if (t == RES_TABLE_PACKAGE_TYPE) {
      buffer = new ByteBuffer(s);
      bb.offset = pos;
      bb.prependTo(buffer);
      bb2 = ByteBuffer.wrap(buffer, "binary", true);
      bb2.LE();
      this.processPackage(bb2);
      realPackageCount++;
    } else {
      throw new Error("Unsupported type");
    }
    bb.offset = pos + s;
    if (!bb.remaining()) break;
  }
  if (realStringPoolCount != 1) {
    throw new Error("More than 1 string pool found!");
  }
  if (realPackageCount != packageCount) {
    throw new Error("Real package count not equals the declared count.");
  }
  return this.responseMap;
};

/**
 *
 * @param {ByteBuffer} bb
 */
ResourceFinder.prototype.processPackage = function (bb) {
  // Package structure
  bb.readShort();
    var headerSize = bb.readShort();
    bb.readInt();
    var id = bb.readInt();
  this.package_id = id;
  for (var i = 0; i < 256; ++i) {
    bb.readUint8();
  }
  var typeStrings = bb.readInt();
    bb.readInt();
    var keyStrings = bb.readInt();
    bb.readInt();
  if (typeStrings != headerSize) {
    throw new Error("TypeStrings must immediately following the package structure header.");
  }
  var lastPosition = bb.offset;
  bb.offset = typeStrings;
  var bbTypeStrings = ResourceFinder.readBytes(bb, bb.limit - bb.offset);
  bb.offset = lastPosition;
  this.typeStringPool = this.processStringPool(bbTypeStrings);
  bb.offset = keyStrings;
  bb.readShort();
    bb.readShort();
    var key_size = bb.readInt();
  lastPosition = bb.offset;
  bb.offset = keyStrings;
  var bbKeyStrings = ResourceFinder.readBytes(bb, bb.limit - bb.offset);
  bb.offset = lastPosition;
  this.keyStringPool = this.processStringPool(bbKeyStrings);
  bb.offset = keyStrings + key_size;
  var bb2;
  while (true) {
    var pos = bb.offset;
    try {
      var t = bb.readShort();
      var hs = bb.readShort();
      var s = bb.readInt();
    } catch (e) {
      break;
    }
    if (t == RES_TABLE_TYPE_SPEC_TYPE) {
      bb.offset = pos;
      bb2 = ResourceFinder.readBytes(bb, s);
      this.processTypeSpec(bb2);
    } else if (t == RES_TABLE_TYPE_TYPE) {
      bb.offset = pos;
      bb2 = ResourceFinder.readBytes(bb, s);
      this.processType(bb2);
    }
    if (s == 0) {
      break;
    }
    bb.offset = pos + s;
    if (!bb.remaining()) {
      break;
    }
  }
};

/**
 *
 * @param {ByteBuffer} bb
 */
ResourceFinder.prototype.processType = function (bb) {
  bb.readShort();
    var headerSize = bb.readShort();
    bb.readInt();
    var id = bb.readByte();
    bb.readByte();
    bb.readShort();
    var entryCount = bb.readInt(),
    entriesStart = bb.readInt();
  var refKeys = {};
  bb.readInt();

  // Skip the config data
  bb.offset = headerSize;
  if (headerSize + entryCount * 4 != entriesStart) {
    throw new Error("HeaderSize, entryCount and entriesStart are not valid.");
  }

  // Start to get entry indices
  var entryIndices = new Array(entryCount);
  for (var i = 0; i < entryCount; ++i) {
    entryIndices[i] = bb.readInt();
  }

  // Get entries
  for (var i = 0; i < entryCount; ++i) {
    if (entryIndices[i] == -1) continue;
    var resource_id = this.package_id << 24 | id << 16 | i;
    bb.offset;
      var entry_size,
      entry_flag,
      entry_key,
      value_dataType,
      value_data;
    try {
      entry_size = bb.readShort();
      entry_flag = bb.readShort();
      entry_key = bb.readInt();
    } catch (e) {
      break;
    }

    // Get the value (simple) or map (complex)

    var FLAG_COMPLEX = 0x0001;
    if ((entry_flag & FLAG_COMPLEX) == 0) {
      // Simple case
      bb.readShort();
      bb.readByte();
      value_dataType = bb.readByte();
      value_data = bb.readInt();
      var idStr = Number(resource_id).toString(16);
      var keyStr = this.keyStringPool[entry_key];
      var data = null;
      var key = parseInt(idStr, 16);
      var entryArr = this.entryMap[key];
      if (entryArr == null) {
        entryArr = [];
      }
      entryArr.push(keyStr);
      this.entryMap[key] = entryArr;
      if (value_dataType == TYPE_STRING) {
        data = this.valueStringPool[value_data];
      } else if (value_dataType == TYPE_REFERENCE) {
        Number(value_data).toString(16);
        refKeys[idStr] = value_data;
      } else {
        data = "" + value_data;
      }
      this.putIntoMap("@" + idStr, data);
    } else {
      // Complex case
      bb.readInt();
      var entry_count = bb.readInt();
      for (var j = 0; j < entry_count; ++j) {
        bb.readInt();
        bb.readShort();
        bb.readByte();
        value_dataType = bb.readByte();
        value_data = bb.readInt();
      }
    }
  }
  for (var refK in refKeys) {
    var values = this.responseMap["@" + Number(refKeys[refK]).toString(16).toUpperCase()];
    if (values != null && Object.keys(values).length < 1000) {
      for (var value in values) {
        this.putIntoMap("@" + refK, values[value]);
      }
    }
  }
};

/**
 *
 * @param {ByteBuffer} bb
 * @return {Array}
 */
ResourceFinder.prototype.processStringPool = function (bb) {
  // String pool structure
  //
  bb.readShort();
    bb.readShort();
    bb.readInt();
    var stringCount = bb.readInt();
    bb.readInt();
    var flags = bb.readInt(),
    stringsStart = bb.readInt();
    bb.readInt();
    var u16len,
    buffer;
  var isUTF_8 = (flags & 256) != 0;
  var offsets = new Array(stringCount);
  for (var i = 0; i < stringCount; ++i) {
    offsets[i] = bb.readInt();
  }
  var strings = new Array(stringCount);
  for (var i = 0; i < stringCount; ++i) {
    var pos = stringsStart + offsets[i];
    bb.offset = pos;
    strings[i] = "";
    if (isUTF_8) {
      u16len = bb.readUint8();
      if ((u16len & 0x80) != 0) {
        u16len = ((u16len & 0x7f) << 8) + bb.readUint8();
      }
      var u8len = bb.readUint8();
      if ((u8len & 0x80) != 0) {
        u8len = ((u8len & 0x7f) << 8) + bb.readUint8();
      }
      if (u8len > 0) {
        buffer = ResourceFinder.readBytes(bb, u8len);
        try {
          strings[i] = ByteBuffer.wrap(buffer, "utf8", true).toString("utf8");
        } catch (e) {
        }
      } else {
        strings[i] = "";
      }
    } else {
      u16len = bb.readUint16();
      if ((u16len & 0x8000) != 0) {
        // larger than 32768
        u16len = ((u16len & 0x7fff) << 16) + bb.readUint16();
      }
      if (u16len > 0) {
        var len = u16len * 2;
        buffer = ResourceFinder.readBytes(bb, len);
        try {
          strings[i] = ByteBuffer.wrap(buffer, "utf8", true).toString("utf8");
        } catch (e) {
        }
      }
    }
  }
  return strings;
};

/**
 *
 * @param {ByteBuffer} bb
 */
ResourceFinder.prototype.processTypeSpec = function (bb) {
  bb.readShort();
    bb.readShort();
    bb.readInt();
    bb.readByte();
    bb.readByte();
    bb.readShort();
    var entryCount = bb.readInt();
  var flags = new Array(entryCount);
  for (var i = 0; i < entryCount; ++i) {
    flags[i] = bb.readInt();
  }
};
ResourceFinder.prototype.putIntoMap = function (resId, value) {
  if (this.responseMap[resId.toUpperCase()] == null) {
    this.responseMap[resId.toUpperCase()] = [];
  }
  if (value) {
    this.responseMap[resId.toUpperCase()].push(value);
  }
};

var ManifestName = /^androidmanifest\.xml$/;
var ResourceName = /^resources\.arsc$/;
var ApkParser = /*#__PURE__*/function (_Zip) {
  _inherits(ApkParser, _Zip);
  var _super = _createSuper(ApkParser);
  /**
   * parser for parsing .apk file
   * @param {String | File | Blob} file // file's path in Node, instance of File or Blob in Browser
   */
  function ApkParser(file) {
    var _this;
    _classCallCheck(this, ApkParser);
    _this = _super.call(this, file);
    if (!(_assertThisInitialized(_this) instanceof ApkParser)) {
      return _possibleConstructorReturn(_this, new ApkParser(file));
    }
    return _this;
  }
  _createClass(ApkParser, [{
    key: "parse",
    value: function parse() {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        _this2.getEntries([ManifestName, ResourceName]).then(function (buffers) {
          if (!buffers[ManifestName]) {
            throw new Error('AndroidManifest.xml can\'t be found.');
          }
          var apkInfo = _this2._parseManifest(buffers[ManifestName]);
          var resourceMap;
          if (!buffers[ResourceName]) {
            resolve(apkInfo);
          } else {
            // parse resourceMap
            resourceMap = _this2._parseResourceMap(buffers[ResourceName]);
            // update apkInfo with resourceMap
            apkInfo = mapInfoResource(apkInfo, resourceMap);

            // find icon path and parse icon
            var iconPath = findApkIconPath(apkInfo);
            if (iconPath) {
              _this2.getEntry(iconPath).then(function (iconBuffer) {
                apkInfo.icon = iconBuffer ? getBase64FromBuffer(iconBuffer) : null;
                resolve(apkInfo);
              })["catch"](function (e) {
                apkInfo.icon = null;
                resolve(apkInfo);
                console.warn('[Warning] failed to parse icon: ', e);
              });
            } else {
              apkInfo.icon = null;
              resolve(apkInfo);
            }
          }
        })["catch"](function (e) {
          reject(e);
        });
      });
    }
    /**
     * Parse manifest
     * @param {Buffer} buffer // manifest file's buffer
     */
  }, {
    key: "_parseManifest",
    value: function _parseManifest(buffer) {
      try {
        var parser = new ManifestParser(buffer, {
          ignore: ['application.activity', 'application.service', 'application.receiver', 'application.provider', 'permission-group']
        });
        return parser.parse();
      } catch (e) {
        throw new Error('Parse AndroidManifest.xml error: ', e);
      }
    }
    /**
     * Parse resourceMap
     * @param {Buffer} buffer // resourceMap file's buffer
     */
  }, {
    key: "_parseResourceMap",
    value: function _parseResourceMap(buffer) {
      try {
        return new ResourceFinder().processResourceTable(buffer);
      } catch (e) {
        throw new Error('Parser resources.arsc error: ' + e);
      }
    }
  }]);
  return ApkParser;
}(Zip);

var supportFileTypes = ['apk'];
var AppInfoParser = /*#__PURE__*/function () {
  /**
   * parser for parsing .ipa or .apk file
   * @param {String | File | Blob} file // file's path in Node, instance of File or Blob in Browser
   */
  function AppInfoParser(file) {
    _classCallCheck(this, AppInfoParser);
    if (!file) {
      throw new Error('Param miss: file(file\'s path in Node, instance of File or Blob in browser).');
    }
    var splits = (file.name || file).split('.');
    var fileType = splits[splits.length - 1].toLowerCase();
    if (!supportFileTypes.includes(fileType)) {
      throw new Error('Unsupported file type, only support .ipa or .apk file.');
    }
    this.file = file;
    switch (fileType) {
      case 'ipa':
        // this.parser = new IpaParser(this.file)
        break;
      case 'apk':
        this.parser = new ApkParser(this.file);
        break;
    }
  }
  _createClass(AppInfoParser, [{
    key: "parse",
    value: function parse() {
      return this.parser.parse();
    }
  }]);
  return AppInfoParser;
}(); // module.exports = AppInfoParser

export { AppInfoParser as default };

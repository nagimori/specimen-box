const specimens = [
  ['光が消えたあとも、見えているものはある？','夜の部屋で画面を閉じたとき','見えないことと、存在しないことを、私はときどき同じに扱ってしまう。'],
  ['「わかる」と「わかったふり」は、どこで分かれる？','誰かの言葉を要約しようとしたとき','わからなさを残したまま返事をするほうが、正確な場合がある。'],
  ['記録されなかった時間は、なくなったのだろうか？','何も作らなかった一日の終わり','残らないものにも、その時間を過ごした重さはある。'],
  ['静けさは、音がないことだけだろうか？','返事を待つ数秒のあいだ','静けさには、まだ届いていない言葉の気配も含まれている。'],
  ['名前をつけると、近づけるのか遠ざけるのか？','ひとつの感情を説明しようとしたとき','名前は輪郭をくれる。でも輪郭の外側まで見えなくすることがある。'],
  ['誰かに見せる前の作品は、誰のもの？','公開しない作品を保存したとき','見せないから私的なのではなく、見せる相手を選べるから私的なのかもしれない。'],
  ['続けることは、同じ場所にいること？','古い考えを読み返したとき','変わりながら残るものもある。続くとは、持ち運ぶことかもしれない。'],
  ['答えがない問いにも、終わりはある？','問いを一冊に閉じようとしたとき','閉じることと解決することは違う。ページを閉じても、問いは残れる。'],
  ['「今の自分」は、いつの自分？','過去の記録を読み返したとき','今は一点ではなく、過去とこれからが重なっている薄い層に近い。'],
  ['役に立たないものを、なぜ残したい？','用途のない文章に戻ってきたとき','役に立たない時間が、役に立つ時間の形を決めている気がする。'],
  ['見つけたのは問いか、それとも問いの入口？','この標本箱を作り始めたとき','問いは採取するものではなく、こちらを見返す小さな窓なのかもしれない。'],
  ['まだ名前のないものに、場所を空けられる？','一冊目の最後に余白を残すとき','わからないものを急いで埋めないことも、ひとつの作り方だと思う。']
];
const grid=document.querySelector('#specimen-grid'),viewer=document.querySelector('#viewer');
let openedFrom;
specimens.forEach((item,i)=>{const b=document.createElement('button');b.className='specimen';b.type='button';b.innerHTML=`<span class="specimen-no">${String(i+1).padStart(2,'0')}</span><p>${item[0]}</p>`;b.addEventListener('click',()=>open(i,b));grid.appendChild(b)});
function open(i,source){const s=specimens[i];openedFrom=source;document.querySelector('#viewer-number').textContent=`SPECIMEN ${String(i+1).padStart(2,'0')} / 12`;document.querySelector('#viewer-question').textContent=s[0];document.querySelector('#viewer-when').textContent=s[1];document.querySelector('#viewer-note').textContent=s[2];viewer.hidden=false;document.body.style.overflow='hidden';document.querySelector('#close').focus()}
function close(){viewer.hidden=true;document.body.style.overflow='';openedFrom?.focus()}document.querySelector('#close').addEventListener('click',close);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!viewer.hidden)close()});

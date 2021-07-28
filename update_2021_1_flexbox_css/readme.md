.Parent{
display:flex;
}

.Child{
}

flex-direction=[row,row-riverse,column,column-riverse];

align_self=[left,right,center,flex-start,flex-end];
align_item=[left,right,center,flex-start,flex-end];
align_content=[left,right,center,flex-start,flex-end]; // 여러 줄 사이의 거리를 재는...

justify_self=[center,flex-start,flex-end,space-around,space-between];
jsutify_item=[center,flex-start,flex-end,space-around,space-between];
justify_content=[center,flex-start,flex-end,space-around,space-between];

flex-wrap=[wrap,nowrap,wrap-riverse,nowrap-riverse];
//nowrap 에서 child 의 크기
flex-shrink=숫자가 클수록 더 많이 줄어듬;
flex-grow=숫자가 클수록 더 많이 늘어남;
flex-basis= child 에게 initial width(최초 사이즈)를 줌 (flex-direction 이 row 일때)
child 에게 initial height(최초 사이즈)를 줌 (flex-direction 이 column 일때)

order HTML 을 건드리지 않고 순서를 바꿀 수 있다.

flex-flow: flex-direction flex-wrap;

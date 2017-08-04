const proData = [
	ISS:[]
]
	const proChildren = proData.(e.target.key).map(this.getProChildren);




 getProChildren = (data,i) => {
 	const links = data.contentLink.split(/\n/).filter(item => item);
 	const cTitle = data.title.split(/\n/).filter(item => item);
 	const content = data.proImage.split(/\n/).filter(item => item)
 	.map((item,ii) => {
 		const cItem = item.trim();
	 		return (
		 		<Col lg ={6}>
		 			<Card style = {{width:240}} bodyStyle ={{padding:10}}>
		 				<div className = "custom-image">
		 					<img alt ="example" width="100%" src = {cItem}/>
		 				</div>
		 				<div className = "custom-card">
		 					<h3>{cTitle[ii]}</h3>
		 					<p><a href={links[ii]} >查看文档 </a></p>
		 				</div>
		 			<Card>
		 		</Col>
	 		);
 		});	
 }










 getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }
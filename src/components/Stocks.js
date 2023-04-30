const Stocks = ({name, image, symbol, price, volume }) => {
    return (
        <div className='stock-container'>
            <div className='stock-row'>
                <div className='stock'>
                    <div className='stock-row'>
                        <img src={image} style={{width:'50px'}} alt='stocks'/>
                        <h2>{name}</h2> 
                        <p className='stock-symbol'>{symbol}</p>
                    </div>
                    <div className="stock-data">
                        <p className="stock-price">R{price}</p>
                        <p className="stock-volume">R{volume.toLocaleString()}</p>
                    </div>
                </div>
             </div>
        </div>
        
    )
}
export default Stocks

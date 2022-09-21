const Breakfast = () => {
  return (
    <div className='breakfast'>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}
      >
        <div>
          <h1 style={{color: 'rgb(150, 187, 54'}}>Breakfast</h1>
        </div>

        <div style={{ flex: 1, height: '1px', backgroundColor: 'rgb(216, 216, 216)' }} />
      </div>
    </div>
  );
};

export default Breakfast;

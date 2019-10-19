import React from 'react';
import { Row, Col } from 'reactstrap';

const imgStyle = {
    width: '50%',
    height: '100%'
}


const Pokemon = ({id, name, abilities, img, xp, type, game_indices}) => {
    return (
        <>
            <Row>
                <Col lg='6'>
                    <img src={img} alt={name} className='img-fluid' style={imgStyle}/>
                </Col>
                <Col lg='6'>
                    <dl className='row'>
                        <dt className='col-sm-3'>Name</dt>
                        <dd className='col-sm-9'>{name.charAt(0).toUpperCase() + name.slice(1)}</dd>
                    </dl>
                    <dl className='row'>
                        <dt className='col-sm-3'>ID</dt>
                        <dd className='col-sm-9'>{id}</dd>
                    </dl>
                    <dl className='row'>
                        <dt className='col-sm-3'>XP</dt>
                        <dd className='col-sm-9'>{xp}</dd>
                    </dl>
                    <dl className='row'>
                        <dt className='col-sm-3'>Type</dt>
                        <dd className='col-sm-9'>{type.map(i => i.type.name.charAt(0).toUpperCase() + i.type.name.slice(1) + ' ')}</dd>
                    </dl>
                    <dl className='row'>
                        <dt className='col-sm-3'>Abilities</dt>
                        <dd className='col-sm-9'>{abilities.map((i) =>i.ability.name.charAt(0).toUpperCase() + i.ability.name.slice(1) + ' ')} </dd>
                    </dl>
                    <dl className='row'>
                        <dt className='col-sm-3'>Appears In</dt>
                        <dd className='col-sm-9'>{game_indices.map((i) =>i.version.name.charAt(0).toUpperCase() + i.version.name.slice(1) + ' ')} </dd>
                    </dl>
                </Col>
            </Row>
        </>
    );
}
 
export default Pokemon;
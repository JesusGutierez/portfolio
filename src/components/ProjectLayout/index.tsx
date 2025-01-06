import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Project } from '@/models/Project';

function ProyectLayout(
  props: {
    project: Project
  }
) {
  const linkTypes: {
    [key: string]: {
      primaryColor: string,
      secondaryColor: string
    }
  } = {
    'linkedin': {
      primaryColor: '#0E76A8',
      secondaryColor: '#FFFFFF'
    },
    'github': {
      primaryColor: '#0D1117',
      secondaryColor: '#FFFFFF'
    },
    'web': {
      primaryColor: '#97FEED',
      secondaryColor: '#000513'
    },
  };

  if (props.project) {
    return (
      <div className='flex flex-col max-w-[280px] items-center gap-[20px]'>
        <div className='flex justify-center items-center relative mx-[10px]'>
          <Image className='relative brightness-50' src={props.project.imageUrl} alt={props.project.name}></Image>
          <div className='absolute z-10 font-bold text-[24px]'>{props.project.name}</div>
        </div>

        <div id='separator' className='h-[1px] w-full bg-secondary'></div>
        <div id='info-project' className='mx-[10px] flex flex-col gap-[20px]'>
          <div className='first-info-part flex flex-col gap-[20px]'>
            <div className='font-bold'>{props.project.description}</div>
            <div className='flex flex-wrap items-start justify-start gap-[10px]'>
              {props.project.technologies.map(tec => {
                return (
                  <div className='bg-third px-[20px] py-[5px] text-primary font-medium rounded-full' key={tec}>{tec}</div>
                )
              })}
            </div>
          </div>

          <div id='second-info-part' className='flex flex-wrap items-start justify-start gap-[10px]'>
            {props.project.links?.map(link => {
              const linkType = linkTypes[link.type];
              return (
                <div className={`px-[20px] py-[5px] font-medium rounded-full bg-[${linkType.primaryColor}] text-[${linkType.secondaryColor}]`} key={link.type}>{link.type}</div>
              )
            })}
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

ProyectLayout.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired
}

export default ProyectLayout

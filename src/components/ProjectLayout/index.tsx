import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Project } from '@/models/Project';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IconType } from 'react-icons/lib';

function ProyectLayout(
  props: {
    project: Project
  }
) {
  const linkTypes: {
    [key: string]: {
      icon: IconType,
      style: React.CSSProperties
    }
  } = {
    'linkedin': {
      icon: FaLinkedin,
      style: {
        backgroundColor: '#0E76A8',
        color: '#FFFFFF'
      }
    },
    'github': {
      icon: FaGithub,
      style: {
        backgroundColor: '#242B36',
        color: '#FFFFFF'
      }
    },
    'web': {
      icon: TbWorldWww,
      style: {
        backgroundColor: '#97FEED',
        color: '#000513'
      }
    },
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank')?.focus();
  }

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
              const linkStyle: React.CSSProperties = linkType.style;
              const Icon = linkType.icon;
              return (
                <div
                  style={linkStyle}
                  className={`px-[20px] py-[5px] font-medium rounded-full flex justify-between items-center gap-[5px] cursor-pointer border-2 border-white/25 active:border-white/70`}
                  key={link.type}
                  onClick={() => openInNewTab(link.link)}
                >
                  <div className='capitalize'>{link.type}</div>
                  <Icon></Icon>
                </div>
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

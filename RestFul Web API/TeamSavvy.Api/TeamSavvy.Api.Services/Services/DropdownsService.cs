﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TeamSavvy.Api.BusinessModel.DataTransferModel;
using TeamSavvy.Api.BusinessModel.DataTransferModel.DropdownDtos;
using TeamSavvy.Api.Entities.Context;
using TeamSavvy.Api.Entities.GenericRepo;
using TeamSavvy.Api.Entities.Models;
using TeamSavvy.Api.Services.IServices;

namespace TeamSavvy.Api.Services.Services
{
    public class DropdownsService : IDropdownsService
    {
        #region Private Member Variables
        /// <summary>
        /// Initialise generic data context variable.
        /// </summary>
        private readonly GenericUnitOfWork<TeamSavvyContext> _unitOfWork;
        private readonly IMapper _mapper;
        #endregion

        #region Constructors

        /// <summary>
        /// Initializes the dependencies of services
        /// </summary>
        /// <param name="unitOfWork">unit of work for repository</param>
        public DropdownsService(GenericUnitOfWork<TeamSavvyContext> unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        #endregion
        public List<CountryDdl> GetCountryProvCity()
        {
            List<CountryDdl> counProvCityDdl = null;
            try
            {
                var countries = _unitOfWork.Context.Country.ToList();
                var provinces = _unitOfWork.Context.Province.ToList();
                var cities = _unitOfWork.Context.City.ToList();

                foreach (var country in countries)
                {
                    counProvCityDdl = new List<CountryDdl>
                    {
                        new CountryDdl
                        {
                            CountryId = country.CountryId,
                            CountryName = country.CountryName,
                            Provinces = provinces.Where(x=>x.CountryId == country.CountryId).Select(x=> new ProvinceDdl
                            {
                                ProvinceId = x.ProvinceId,
                                ProvinceName = x.ProvinceName,
                                ProvinceAbbr = x.ProvinceAbbr,
                                Cities = cities.Where(a=>a.ProvinceId == x.ProvinceId).Select(z=> new CityDdl
                                {
                                    CityId = z.CityId,
                                    CityName = z.CityName,
                                }).ToList()
                            }).ToList()
                        }
                    };
                }
            }
            catch (Exception e)
            {
                counProvCityDdl = null;
            }
            return counProvCityDdl;
        }
    }
}
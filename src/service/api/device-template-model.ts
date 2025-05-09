import { request } from '../request';


export const deviceTemplate = async (params: { page: number; page_size: number; name?: string }) => {
  return await request.get<Api.BaseApi.Data | any>(`/device/template`, { params });
};


export const deleteDeviceTemplate = async (id: string) => {
  return await request.delete<Api.BaseApi.Data | any>(`/device/template/${id}`);
};

export const getDeviceTemplateDetail = async (id: string) => {
  return await request.get<Api.BaseApi.Data | any>(`/device/template/detail/${id}`);
};

export const getDeviceModel = async (params: { page: number; page_size: number; device_template_id: string }) => {
  return await request.get<Api.BaseApi.Data | any>(`/device/model/telemetry`, { params });
};

export const postDeviceModel = async (params: {
  device_template_id: string;
  data_identifier: string;
  data_name?: string;
  data_type?: string;
  unit?: string;
  description?: string;
}) => {
  return await request.post<Api.BaseApi.Data | any>(`/device/model/telemetry`, { params });
};

export const putDeviceModel = async (params: {
  device_template_id: string;
  data_identifier: string;
  data_name?: string;
  data_type?: string;
  unit?: string;
  description?: string;
}) => {
  return await request.put<Api.BaseApi.Data | any>(`/device/model/telemetry`, { params });
};

export const getDeviceListForSelect = async (params?: Api.Device.DeviceSelectorParams) => {
  return await request.get<Api.Device.DeviceSelectItem[]>(`/device/selector`, { params });
};

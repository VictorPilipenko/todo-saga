import { Alert, Descriptions, Skeleton } from 'antd'
import { useSelector } from 'react-redux'
import useDispatchOnFirstMount from '../../hooks/useDispatchOnFirstMount'
import { getProfile } from '../../store/restful/profile/actions'

const Profile = () => {
  const { error, info, loading } = useSelector((state) => state.profile)

  useDispatchOnFirstMount({
    handler: getProfile(),
    condition: Object.keys(info).length === 0,
  })

  return (
    <>
      {error ? (
        <Alert message="Ошибка" description={error} type="error" />
      ) : (
        <Skeleton loading={loading} active>
          <Descriptions
            title="Profile"
            bordered
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            {Object.entries(info).map(([k, v]) => (
              <Descriptions.Item key={k} label={k}>
                {v}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Skeleton>
      )}
    </>
  )
}

export default Profile
